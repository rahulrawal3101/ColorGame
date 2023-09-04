import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import mainbg from '../assets/mainBG.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MenuIcon from '@mui/icons-material/Menu';
import game3 from '../assets/game3.jpeg';
import game5 from '../assets/game5.jpeg';
import game1 from '../assets/game1.jpeg';
import game2 from '../assets/game2.jpeg';
import game6 from '../assets/game6.jpeg';
import game7 from '../assets/game7.jpeg';
import game4 from '../assets/game4.jpeg';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CircleIcon from '@mui/icons-material/Circle';





const LandingPage = () => {
  const h = window.innerHeight

  useEffect(() => {
    AOS.init({ duration: 2000 })
  })
  return (
    <>
      <Grid container sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'black' }}>
        <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height: `${h}px`, overflowY: 'scroll', backgroundImage: `url(${mainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',height: 'fit-content', border: '1px solid black',  }}>
          <Grid container>
            <Grid item xs={12} sx={{ padding: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,}}>
              <Box sx={{ display: 'flex' }}>
                <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: '800' }}>C</Typography>
                <Typography sx={{ color: '#2e7d32', fontSize: '18px', fontWeight: '800' }}>o</Typography>
                <Typography sx={{ color: '#cddc39', fontSize: '18px', fontWeight: '800' }}>l</Typography>
                <Typography sx={{ color: '#673ab7', fontSize: '18px', fontWeight: '800' }}>o</Typography>
                <Typography sx={{ color: '#ef6c00', fontSize: '18px', fontWeight: '800' }}>r</Typography>
                <Typography sx={{ color: '#e91e63', fontSize: '18px', fontWeight: '800' }}>g</Typography>
                <Typography sx={{ color: '#0d47a1', fontSize: '18px', fontWeight: '800' }}>a</Typography>
                <Typography sx={{ color: '#d50000', fontSize: '18px', fontWeight: '800' }}>m</Typography>
                <Typography sx={{ color: '#673ab7', fontSize: '18px', fontWeight: '800' }}>e</Typography>
              </Box>
              <MenuIcon sx={{ color: 'grey' }} />

            </Grid>

          </Grid>

          {/* Second section  */}
          <Grid container sx={{  display: 'flex', justifyContent: 'center', alignItems: 'center',mt:'20px' }}>
            <Grid item data-aos='fade-up' xs={7} sx={{ height: '340px' }}>
              <Box sx={{ width: '100%', height: '100%', }}>
                <img src={game3} width={'100%'} height={'100%'} alt='game1' />
              </Box>

            </Grid>
            <Grid item xs={11.8} data-aos='fade-up' sx={{mt:'40px'}} >
              <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800', textAlign: 'center' }}>Colorgame is One Of The Best colour Predictions in India.</Typography>
              <Typography sx={{ color: 'lightgrey', fontSize: '16px', mt: '5px', textAlign: 'center' }}>Colorgame allows you to earn money by guessing the correct colours. The amount earned can be withdrawn through Paytm.</Typography>
            </Grid>

          </Grid>

          {/* section three  */}
          <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:'30px'}}>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800',mt:'10px' }}>Why Colorgame</Typography>

            </Grid>
            <Grid item xs={11.8} >
              <Typography sx={{ color: 'lightgrey', fontSize: '15px', textAlign: 'center',mt:'20px' }}>Colorgame is One Of The Best colour Predictions in India. Colorgame is a casino game. Many people have shared their personal experiences in the Daman game. You can play online by downloading the Colorgame App. Colorgame is a very good colour prediction app on which you can easily earn 20k-30k a month by working properly.</Typography>

            </Grid>

            <Grid item xs={7} data-aos='fade-left' sx={{mt:'20px'}}>
              <Box sx={{ width: '100%:', height: '350px' }}>
                <img src={game5} width={'100%'} height={'100%'} alt='game5' />

              </Box>

            </Grid>


          </Grid>

          {/* 4th section  */}
          <Grid container sx={{padding:'2px', mt:'30px',display:'flex', justifyContent:'space-between', alignItems:'flex-start', }}>
            <Grid item xs={3} data-aos='fade-right' >
              <ThumbUpOffAltIcon  sx={{fontSize:'60px', color:'#5c6bc0'}}/>
            </Grid>
            <Grid item xs={9} sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', flexDirection:'column', mb:'20px'}}>
              
              <Box data-aos='fade-up' sx={{display:'flex',justifyContent:'center', alignItems:'center' ,}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>Start Prediction with Only 1 Rs</Typography>
              </Box>

              <Box data-aos='fade-up'sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'15px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>Fast Withdrawal (Most of the time, money comes to your account within 1 hour)</Typography>
              </Box>

              <Box data-aos='fade-up' sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>No Withdrawal Fee (You can withdraw as much as you want in this game without any withdrawal fee)</Typography>
              </Box>

              <Box data-aos='fade-up' sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>24/7 Customer Service</Typography>
              </Box>

              <Box data-aos='fade-up' sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>Very Good Promotion Mission (Earn More than 4 Lakh for Complete Promotion Task)</Typography>
              </Box>

              <Box data-aos='fade-up' sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>Promotion Bonus Upto 5 Levels</Typography>
              </Box>

              <Box data-aos='fade-up' sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', mt:'10px'}}>
                <CircleIcon sx={{fontSize:'12px',color:'#5c6bc0'}}/>
                <Typography sx={{fontSize:'14px', color:'lightgrey', ml:'8px', fontWeight:'900'}}>Every two months, new events come in which you can participate and Earn Up to 6 Lakh.</Typography>
              </Box>

            </Grid>
            
          </Grid>

          {/* 5th section  */}


          <Grid container sx={{padding:'2px', mt:'10px',display:'flex', justifyContent:'center', alignItems:'flex-start'}}>
            <Grid item xs={12} data-aos='fade-up' sx={{textAlign:'center',}} >
              <Typography sx={{ color: '#5c6bc0', fontSize: '23px', fontWeight: '800' }}>About Colorgame</Typography>
            </Grid>
            <Grid item xs={7.5} data-aos='fade-right' sx={{mt:'10px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game7} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-left' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game6} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-right' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game5} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-left' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game4} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-right' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game2} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-left' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game1} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>

            <Grid item xs={7.5} data-aos='fade-right' sx={{mt:'15px'}}>
              <Box sx={{width:'100%', height:'350px'}}>
                <img src={game3} width={'100%'} height={'100%'} alt='register'/>

              </Box>

            </Grid>
           
            
          </Grid>


        </Grid>

      </Grid>
    </>
  )
}

export default LandingPage