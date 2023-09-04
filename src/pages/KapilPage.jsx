import React, { useContext } from 'react';
import AccountPage from './AccountPage';
import { Box, Container, Grid } from '@mui/material';
import BottomNavbar from '../component/BottomNavbar';
import mainbg from '../assets/mainBG.png';
import { context } from '../global/Global_Context';
import HomePage from '../pages/HomePage';
import ReferralPage from './ReferralPage';
import WalletPage from './WalletPage';
import PromotionPage from './PromotionPage';
import { USER_TOKEN } from '../constant';
import { useNavigate } from 'react-router-dom';

const KapilPage = () => {
  const { value,isUserLoggedIn } = useContext(context);
  const navigate = useNavigate();
  const screen = (value) => {
    if (value == 'Home' ) {
      return <HomePage />;
    }
    if (value == 'Account') {
      return <AccountPage />;
    }
    if (value == 'Referral') {
      return <ReferralPage />;
    }
    if (value == 'Wallet') {
      return <WalletPage />;
    }
    if (value == 'promotion') {
      return <PromotionPage />;
    }
    else {
      <h1>error compo here</h1>
    }
  };


  // const w = window.innerWidth
  const h = window.innerHeight
  console.log(h)

  return (
    <>
      <Container disableGutters maxWidth='xl'>



        <Grid container sx={{ display: 'flex', justifyContent: 'center', }}>
          <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height: `${h}px`, backgroundImage: `url(${mainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>

            <Box >

              {isUserLoggedIn? screen(value):navigate('/cred')}
              
            </Box>

          </Grid>
          <BottomNavbar />
        </Grid>
      </Container>
    </>
  )
}

export default KapilPage