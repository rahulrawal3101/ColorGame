import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { context } from '../global/Global_Context';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../assets/c1.jpg';
import img2 from '../assets/c2.jpg';
import img3 from '../assets/c3.avif';
import img4 from '../assets/c4.webp';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ludoicon from '../assets/ludoIcon.webp';
import othergame from '../assets/otherGameBG.png';
import howitwork from '../assets/howItWorksBG.png';
import howitworkcard from '../assets/howItWorkCardBG.png';
import halfbgimg from '../assets/halfLeftBGBox.png';
import { useNavigate } from 'react-router-dom';


const slideImages = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  }
];

const chooseGame = [
  {
    img: card1,
    text1: 'Lucky Digits',
    number: '0-9',
    text2: '2 Minutes Game',
    text3: 'Answer the quiz',
    id:1
  },
  {
    img: card2,
    text1: 'Lucky Digits',
    number: '0-99',
    text2: '5 Minutes Game',
    text3: 'Answer the quiz',
    id:2
  },
  {
    img: card3,
    text1: 'Lucky Digits',
    number: '0-9',
    text2: '1 Minutes Game',
    text3: 'Answer the quiz',
    id:3
  },
  {
    img: card4,
    text1: 'Lucky Digits',
    number: '0-9',
    text2: '1 Minutes Game',
    text3: 'Answer the quiz',
    id:4
  },
  {
    img: card1,
    text1: 'Lucky Digits',
    number: '0-9',
    text2: '1 Minutes Game',
    text3: 'Answer the quiz',
    id:5
  },
]

const otherGame = [
  {
    icon: ludoicon,
    text: 'Ludo Game'
  },
  {
    icon: ludoicon,
    text: 'Rummy'
  },
  {
    icon: ludoicon,
    text: 'Casino'
  },
  {
    icon: ludoicon,
    text: 'Sports'
  },
  {
    icon: ludoicon,
    text: 'Ludo Game'
  },
  {
    icon: ludoicon,
    text: 'Ludo Game'
  },
  {
    icon: ludoicon,
    text: 'Ludo Game'
  },
  {
    icon: ludoicon,
    text: 'Ludo Game'
  },
  {
    icon: ludoicon,
    text: 'Ludo Game'
  }
]

const HomePage = () => {
  const navigate = useNavigate()
  const { isUserLoggedIn } = useContext(context);
  console.log(isUserLoggedIn);



  const proprietes = {
    duration: 3500,
    transitionDuration: 200,
    infinite: true,
    arrows: false
  }
  const h = window.innerHeight;

const GameType=(id) => {
if(id == 1){
 navigate('/twomin')
}
else{
  navigate('/')
}
  
console.log(id)
}

  return (
    <>
      <Box sx={{ overflowY: 'scroll', height: `${h}px`, position: 'relative', }}>


        <Grid container >
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '10px' }}>
            <Typography sx={{ color: 'white', fontSize: '27px' }}>Color Prediction</Typography>

          </Grid>
          <Grid item xs={12} >
            <Box>
              <Slide {...proprietes}>
                {slideImages.map((ele) => (

                  <Box sx={{ backgroundImage: `url(${ele.img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '180px' }}>

                  </Box>

                ))}
              </Slide>
            </Box>


          </Grid>
          {/* choose a game  */}
          <Grid container >

            <Grid item xs={12} sx={{ padding: '4px' }}>
              <Typography sx={{ fontSize: '18px', color: 'white', fontWeight: '900' }}>Choose a Game</Typography>
            </Grid>
            <Grid container sx={{ height: '170px', }}>
              <Box sx={{ display: 'flex', overflowX: 'scroll' }}>

                {
                  chooseGame.map((ele) => {
                    return (
                      <Box sx={{ width: '135px', height: '160px', backgroundImage: `url(${ele.img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '15px 13px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}> */}


                        <Box onClick={()=>{GameType(ele.id)}}  sx={{ cursor:'pointer',width: '130px', padding: '1px 3px' }}>
                          <Box sx={{ color: 'white', }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: '900' }}>{ele.text1}</Typography>
                            <Typography sx={{ fontSize: '13px', fontWeight: '900' }}>{ele.number}</Typography>
                          </Box>

                          <Box sx={{ mt: '7px' }}>
                            <Typography sx={{ fontSize: '11px', color: 'lightgrey' }}>{ele.text2}</Typography>
                            <Typography sx={{ fontSize: '11px', color: 'lightgrey' }}>{ele.text3}</Typography>
                          </Box>

                          <Box sx={{ mt: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                            <Button sx={{ bgcolor: '#757575', fontSize: '11px', color: '#263238', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', padding: '8px 15px', '&:hover':{bgcolor: '#757575', fontSize: '11px', color: '#263238',} }} >Play Now <ArrowForwardIcon sx={{ fontSize: '16px', ml: '3px', color: 'black' }} /></Button>
                          </Box>
                          {/* </Box> */}
                        </Box>
                      </Box>
                    )
                  })
                }


              </Box>
            </Grid>

          </Grid>

          <Grid container sx={{ mt: '20px' }}>
            <Grid item sx={{ padding: '4px' }}>
              <Typography sx={{ fontSize: '18px', color: 'white', fontWeight: '900' }}>Other Game</Typography>
            </Grid>
            <Grid item xs={12} sx={{ml:'8px'}}>
              <Box sx={{ backgroundImage: `url(${othergame})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', display: 'flex', overflowX: 'scroll' }}>
                {
                  otherGame.map((ele) => {
                    return (

                      <Box sx={{ width: '100px', height: '90px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '10px' }}>
                        <Box sx={{ width: '70px', height: '90%', borderRadius: '50%', backgroundImage: `url(${ele.icon})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}></Box>
                        <Typography sx={{ color: 'white', fontSize: '10px' }}>{ele.text}</Typography>

                      </Box>



                    )
                  })
                }
              </Box>



            </Grid>
          </Grid>

          {/* How it work */}
          <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Grid item xs={11.5} sx={{ mt: '15px' ,pb:'108px',  }}>
            <Grid container sx={{ backgroundImage: `url(${howitwork})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: '260px', }}>
              <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '20px', pb: '18px' }}>
                <Typography sx={{ fontSize: '17px', fontWeight: '900', color: 'white' }}>How it Works?</Typography>

              </Grid>
              <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 7px 0px 7px' }}>
                <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '92px', paddingLeft: '5px' }}>
                  <Typography sx={{ color: 'grey', mt: '7px', fontSize: '14px' }}>Total Earnings</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>IQ 30000</Typography>

                </Grid>
                <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '92px', paddingLeft: '5px' }}>
                  <Typography sx={{ color: 'grey', mt: '7px', fontSize: '14px' }}>Matches Played</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>25</Typography>

                </Grid>
              </Grid>

              <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 7px 10px 7px' }}>
                <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '92px', paddingLeft: '5px' }}>
                  <Typography sx={{ color: 'grey', mt: '7px', fontSize: '14px' }}>Total Earnings</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>IQ 30000</Typography>

                </Grid>
                <Grid item xs={5.5} sx={{ backgroundImage: `url(${howitworkcard})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: '92px', paddingLeft: '5px' }}>
                  <Typography sx={{ color: 'grey', mt: '7px', fontSize: '14px' }}>Matches Played</Typography>
                  <Typography sx={{ fontSize: '13px', color: 'white', fontWeight: '900' }}>25</Typography>

                </Grid>
              </Grid>

            </Grid>





          </Grid>
          </Grid>




        </Grid>
      </Box>

    </>
  )
}

export default HomePage