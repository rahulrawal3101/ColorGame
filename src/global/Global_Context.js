import React,{ createContext, useEffect, useReducer, } from 'react'
import { reducer } from './reducer';
import { GET_LOCAL_TOKEN, USER_TOKEN } from '../constant';
import openSocket from 'socket.io-client';


export const context = createContext();

const initialState = {
    name : 'Laptop',
    age : 3,
    logInDashBoardScreen:0,
    value:'Home',
    isRegisterApiLoading:false,
    isVerifyApiLoading:false,
    isUserLoggedIn:(localStorage.getItem(USER_TOKEN)!=null && localStorage.getItem(USER_TOKEN).length>5)?true:false,
    ques:'',
    seconequestion:0,
    sectwoquestion:0,
    twominquizroomid:'..loading',
    twominquizresult:'..loading',
    finalresultshow :[]
    
};


const socket = openSocket('http://137.184.122.0:5000', {
  transports: ['websocket'],
});



const Global_Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    useEffect(()=>{
      console.log('Running useEffect in Context Global');
      console.log('useEffect Running...');
      dispatch({
        type:GET_LOCAL_TOKEN,
        payload:(localStorage.getItem(USER_TOKEN)!=null && localStorage.getItem(USER_TOKEN).length>5)?true:false
      })
    },[localStorage.getItem(USER_TOKEN)]);   

    
    useEffect(() => {
      socket.on('connection', () => {
        console.log('Connected to Server');
      });

      socket.on('question',(question)=>{
        console.log(question);
        dispatch({
          type:'QUESTION',
          payload:(question)
        })
      })
  
      socket.on('timer', (timestamp) => {
       
        console.log(timestamp)
        controlSeconds(String(timestamp))
  
      });
      socket.on('TwoMintQuizRoomID', (id)=>{
        // console.log(id)
        dispatch({
          type:'TWOMINQUIZID',
          payload:(id)
        })
      })

      socket.on('showMeAllTwoMintResults', (result)=>{
        getTwominResult(JSON.parse(result));
        console.log(JSON.parse(result));

        dispatch({
          type:'TWOMINRESULT',
          payload:(JSON.parse(result))
        })
      })
      

      socket.on('disconnect', (resp) => {
        console.log('server disconnected', resp)
      });
  
    }, []);

    const getTwominResult =(data)=>{
      const latestResult = data.filter((ele)=>{
        return (
          ele.resultColor!=null
        )
      })
      console.log(latestResult)
      dispatch({
        type:'FINALRESULTANSWERS',
        payload:(latestResult)
      })

    }

    const controlSeconds = (crtTimer)=>{

      if(crtTimer<10){
        dispatch({
          type:'SECONE',
          payload:('0')
        })
      }else{
        dispatch({
          type:'SECONE',
          payload:(crtTimer.slice(0,1))
        })
      }

      if(crtTimer>9){
        dispatch({
          type:'SECTWO',
          payload:(crtTimer.slice(1,2))
        })
      }else{
        dispatch({
          type:'SECTWO',
          payload:(crtTimer)
        })
      }



      // if(crtTimer<10){
      //   setSecOne('0')
      // }
      // else{
      //   setSecOne(crtTimer.slice(0,1))
      // }
      // if(crtTimer>9){
      //   setSecTwo(crtTimer.slice(1,2))
      // }
      // else{
      //   setSecTwo(crtTimer)
      // }
    }

    // console.log(secOne)
    // console.log(secTwo)
  return (
    <context.Provider value={{...state,dispatch,}}>{children}</context.Provider>
  )
}

export default Global_Context

