import { Box, Grid, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WalletIcon from '@mui/icons-material/Wallet';
import PersonIcon from '@mui/icons-material/Person';
import promoicon from '../assets/promoIcon3.png';
import { context } from '../global/Global_Context';



const BottomNavbar = () => {

    const {value,dispatch} = useContext(context)
    // const [value, setValue] = useState('Home');
    console.log(value);

   
    
    return (
        <>
        <Grid container sx={{ justifyContent:'center',  position:'absolute', bottom:'0px', }}>
            <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{background: 'linear-gradient(180deg, rgba(11,11,11,1) 39%, rgba(201,6,6,1) 76%)', padding:'5px'}}>
                <Box sx={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column' ,color:value === 'Home'?'yellow':'white'}} onClick={()=>{
                        dispatch({ type: 'Home' });
                    }}>
                        <HomeIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px', }}>Home</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:value === 'Referral'?'yellow':'white'}} onClick={()=>{
                        dispatch({ type: "Referral" });
                     }}>
                        <LocalOfferIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px',}}>Referral</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:value === 'promotion'?'yellow':'white' }} onClick={()=>{
                        dispatch({ type: 'promotion' });
                     }}>
                     <img src={promoicon} alt='promologo' style={{marginTop:'-55px',}}/>
                        <Typography sx={{fontSize:'14px'}} value='promotion'>promotion</Typography>
                    </Box>
                     <Box sx={{cursor:'pointer',display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:value === 'Wallet'?'yellow':'white' }} onClick={()=>{
                        dispatch({ type: 'Wallet' });
                     }}>
                        <WalletIcon fontSize='small'/>
                        <Typography sx={{fontSize:'14px'}}  >Wallet</Typography>
                    </Box>
                     <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column',color:value === 'Account'?'yellow':'white' }} onClick={()=>{
                        dispatch({ type: 'Account' });
                     }}>
                        <PersonIcon fontSize='small' />
                        <Typography sx={{fontSize:'14px'}} >Account</Typography>
                    </Box>
                </Box>

            </Grid>
        </Grid>

        </>
        
    )
}

export default BottomNavbar