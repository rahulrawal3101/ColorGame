import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { context } from '../global/Global_Context';
import { LOGIN_TAB, REGISTER_TAB } from '../constant';

const LoginRegisterHeader = () => {
    const { age, logInDashBoardScreen, dispatch } = useContext(context);
    console.log(logInDashBoardScreen);
    const activeHeader = { padding: '12px', bgcolor: 'green', borderRadius: '20px', color: 'white', };
    const inActiveHeader = { padding: '12px' };
    return (
        <Grid container sx={{ bgcolor: '#fafafa', borderRadius: '20px' }}>
            <Grid item xs={6} sx={logInDashBoardScreen == 0 ? activeHeader : inActiveHeader} onClick={() => {
                dispatch({ type: LOGIN_TAB });
            }}>

                <Typography sx={{ fontSize: '15px', fontWeight: '600', textAlign: 'center' }}>Log In</Typography>

            </Grid>
            <Grid item xs={6} sx={logInDashBoardScreen == 1 ? activeHeader : inActiveHeader} onClick={() => {
                dispatch({ type: REGISTER_TAB });
            }}>
                <Typography sx={{ fontSize: '15px', fontWeight: '600', textAlign: 'center' }}>Register</Typography>

            </Grid>
        </Grid>
    )
}

export default LoginRegisterHeader