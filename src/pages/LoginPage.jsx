import { Box, Button, FormControl, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useContext, useState } from 'react';

import quizbg from '../assets/quizBG.png';
import MailLockIcon from '@mui/icons-material/MailLock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import maingif from '../assets/maingif1.gif';
import { context } from '../global/Global_Context';
import { BASE_URL, USER_TOKEN, VERIFY_API_STARTLOADING, VERIFY_API_STOPLOADING } from '../constant';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const {isVerifyApiLoading, dispatch, } = useContext(context);
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(true);
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const handleSignup = () => {
        try {
            dispatch({
                type: VERIFY_API_STARTLOADING
            });

            axios.post(`${BASE_URL}/users/verify`, {
                email: data.email,
                password: data.password
            })
                .then(async (resp) => {
                    dispatch({
                        type: VERIFY_API_STOPLOADING
                    });
                    if (resp.data.message == "Log in Successfull") {
                        // dispatch({ type: LOGIN_TAB });
                        console.log('Login Success!!!');
                        console.log('Token', resp.data.token);
                        await localStorage.setItem(USER_TOKEN,resp.data.token);
                        navigate('/');
                    }
                    if (resp.data.message == "InValid Password") {
                        alert(resp.data.message);
                    }
                    if (resp.data.message == "This E-mail is not Register with Us") {
                        alert(resp.data.message);
                    }
                    console.log(resp);
                }).catch((err) => {
                    dispatch({
                        type: VERIFY_API_STOPLOADING
                    });
                    console.log(err.message);
                    console.log('Inner Catch');
                });


        } catch (error) {
            dispatch({
                type: VERIFY_API_STOPLOADING
            });
            console.log('Outer Catch');
            console.log('Outer', error.message);
        }
    }

    return (
        <>
            <Grid container >
                <Grid item ls={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Box sx={{ width: '135px', height: '125px', mt: '22px', border: '1px solid greens' }}>
                        <img src={maingif} alt='aniimg' width={'100%'} height={'100%'} />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '210px', height: '52px', backgroundImage: `url(${quizbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '22px', fontWeight: '600', }}>Log In Account</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ padding: '5px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>E-mail</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.7', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <MailLockIcon sx={{ color: 'white' }} />
                        <InputBase placeholder='Register Email' sx={{ color: 'white', ml: '10px' }} onChange={changeHandler} name='email' value={data.email} />
                    </Box>
                </Grid>
                <Grid item xs={12} sx={{ padding: '5px', mt: '7px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>Password</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.5', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <PasswordIcon sx={{ color: 'white' }} />

                        <FormControl sx={{ width: '100%', ml: '10px', }} >
                            {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                            <InputBase sx={{ color: 'white' }}
                                id="standard-adornment-password"
                                type={showPassword ? 'password' : 'text'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff sx={{ color: 'white' }} /> : <Visibility sx={{ color: 'white' }} />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                onChange={changeHandler} name='password' value={data.password} />
                        </FormControl>
                    </Box>
                </Grid>
                {isVerifyApiLoading ? <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 'px', padding: '8px', mb: '90px' }}>
                    <Button disabled={true} sx={{  bgcolor: 'grey', padding: '10px 30px', fontSize: '14px', fontWeight: '600', '&:hover': { bgcolor: 'grey',} }} >Please Wait</Button>
                </Grid>
                    :
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '10px' }}>
                        <Button sx={{ color: 'white', bgcolor: 'green', padding: '10px 30px', fontSize: '14px', fontWeight: '600', '&:hover': { bgcolor: 'green', color: 'white' } }} onClick={handleSignup}>Sign In</Button>
                    </Grid>
                }
            </Grid>
        </>
    )
}

export default LoginPage