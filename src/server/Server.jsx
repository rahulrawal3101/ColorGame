
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import openSocket from 'socket.io-client';

const socket = openSocket('https://137.184.122.0:5000',{
        transports:['websocket'],
    });

const SocketFile = () => {
    const [timerData, setTimerData] = useState()
  useEffect(() => {
    

           // Event listeners and handlers
    socket.on('connection', () => {
        console.log('Connected to Server');
      });
  
      socket.on('timer', (timestamp) => {
        setTimerData(timerData);
        console.log(timestamp);
        // Handle the received data as needed
      });
  
      // Clean up the socket when the component unmounts
  
    socket.on('disconnect',(resp)=>{
        console.log('server disconnected',resp)
    });
      
    }, []);

  return (
    <>
    <Typography>hello socket.io</Typography>
    </>
  );
}
export default SocketFile;