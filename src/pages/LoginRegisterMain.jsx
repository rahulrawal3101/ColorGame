import React, { useContext, } from 'react'
import LoginRegisterHeader from '../component/LoginRegisterHeader'
import { Box, Grid } from '@mui/material'
import mainbg from '../assets/mainBG.png'
import LoginPage from './LoginPage'
import { context } from '../global/Global_Context';
import RegisterPage from './RegisterPage'
import BottomNavbar from '../component/BottomNavbar'
// import BottomNavbar from '../component/BottomNavbar'

const LoginRegisterMain = () => {
    const { logInDashBoardScreen } = useContext(context);
    console.log(logInDashBoardScreen);
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', bgcolor: 'black' }}>
                <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height: '100vh', backgroundImage: `url(${mainbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed', top: '0px', }}>
                    <LoginRegisterHeader />
                   <Box sx={{overflowY:'scroll', height:'85vh'}}>

                            {logInDashBoardScreen === 0 ? <LoginPage /> : <RegisterPage />}
                   </Box>
                      
                </Grid>
                    {/* <BottomNavbar /> */}
            </Grid>
        </>


    )
}

export default LoginRegisterMain