import { Box, Button, FormControl, Grid, IconButton, InputAdornment, Typography } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import React, { useContext, useState } from 'react';
import quizbg from '../assets/quizBG.png';
import MailLockIcon from '@mui/icons-material/MailLock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import PasswordIcon from '@mui/icons-material/Password';
import maingif from '../assets/maingif1.gif';
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { context } from '../global/Global_Context';
import { REGISTER_API_STARTLOADING, REGISTER_API_STOPLOADING, LOGIN_TAB, BASE_URL } from '../constant';
import axios from 'axios';



const RegisterPage = () => {
    const { isRegisterApiLoading, dispatch } = useContext(context)
    const [showPassword, setShowPassword] = useState(true);
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: ''
    })

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleRegister = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value })
    }

    const RegisterSubmit = () => {
        // try {
        //     dispatch({
        //         type: REGISTER_API_STARTLOADING
        //     });

        //     axios.post(`${BASE_URL}/users/register`, {
        //         fullName: registerData.name,
        //         email:registerData.email,
        //         mobile:registerData.mobile,
        //         password:registerData.password
        //     })
        //         .then((resp) => {
        //             dispatch({
        //                 type: REGISTER_API_STOPLOADING
        //             });
        //             if(resp.data.message=="Registraton Success"){
        //                 dispatch({ type: LOGIN_TAB });
        //             }
        //             if(resp.data.message=="Already This Email is Register With Us"){
        //                 alert(resp.data.message);
        //             }
        //             if(resp.data.message=="Failed To Register"){
        //                 alert(resp.data.message);
        //             }
        //             console.log(resp);
        //         }).catch((err) => {
        //             dispatch({
        //                 type: REGISTER_API_STOPLOADING
        //             });
        //             console.log(err.message);
        //             console.log('Inner Catch');
        //         });


        // } catch (error) {
        //     dispatch({
        //         type: REGISTER_API_STOPLOADING
        //     });
        //     console.log('Outer Catch');
        //     console.log('Outer',error.message);
        // }
        // console.log(registerData)





        try {
            dispatch({
                type: REGISTER_API_STARTLOADING
            });

            axios.post(`${BASE_URL}/users/register`, {
                fullName: registerData.name,
                email: registerData.email,
                mobile: registerData.mobile,
                password: registerData.password
            })
                .then((resp) => {
                    dispatch({
                        type: REGISTER_API_STOPLOADING
                    });
                    if (resp.data.message == "Registraton Success") {
                        dispatch({ type: LOGIN_TAB });
                    }
                    if (resp.data.message == 'Already This Email is Register With Us') {
                        alert(resp.data.message);
                    }
                    if (resp.data.message == 'Failed To Register') {
                        alert(resp.data.message)
                    }
                }).catch((err) => {
                    dispatch({
                        type: REGISTER_API_STOPLOADING
                    });
                    console.log(err.message);
                    console.log('Inner Catch');
                })

        } catch (error) {
            dispatch({
                type: REGISTER_API_STOPLOADING
            });
            console.log('outer catch')
        }
    }
    return (
        <>
            {/* <Box sx={{overflowY:'scroll'}}> */}


            <Grid container >
                <Grid item ls={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Box sx={{ width: '135px', height: '105px', mt: '22px', border: '1px solid greens' }}>
                        <img src={maingif} alt='aniimg' width={'100%'} height={'100%'} />

                    </Box>

                </Grid>
                <Grid item xs={12} sx={{ height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ width: '210px', height: '52px', backgroundImage: `url(${quizbg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ color: 'white', fontSize: '21px', fontWeight: '600', }}>Register Account</Typography>


                    </Box>


                </Grid>
                {/* name */}
                <Grid item xs={12} sx={{ padding: '5px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>Full Name</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.7', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <PersonIcon sx={{ color: 'white' }} />
                        <InputBase placeholder='Full Name' sx={{ color: 'white', ml: '10px' }} onChange={handleRegister} name='name' value={registerData.name} />


                    </Box>



                </Grid>

                {/* email */}
                <Grid item xs={12} sx={{ padding: '5px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>E-mail</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.7', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <MailLockIcon sx={{ color: 'white' }} />
                        <InputBase placeholder='Register Email' type='email' sx={{ color: 'white', ml: '10px' }} onChange={handleRegister} name='email' value={registerData.email} />


                    </Box>



                </Grid>

                {/* mobile */}
                <Grid item xs={12} sx={{ padding: '5px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>Mobile Number</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.7', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <PhoneAndroidIcon sx={{ color: 'white' }} />
                        <InputBase placeholder='Mobile Number' sx={{ color: 'white', ml: '10px' }} onChange={handleRegister} name='mobile' value={registerData.mobile} />


                    </Box>



                </Grid>


                {/* pass */}

                <Grid item xs={12} sx={{ padding: '5px', mt: '5px' }}>
                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '600' }}>Password</Typography>
                    <Box sx={{ borderRadius: '10px', bgcolor: '#212121', opacity: '0.5', padding: '8px', display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
                        <PasswordIcon sx={{ color: 'white' }} />

                        <FormControl sx={{ width: '100%', ml: '10px', }} >
                            {/* <InputLabel htmlFor="standard-adornment-password">Password</InputLabel> */}
                            <InputBase sx={{ color: 'white' }}
                                placeholder='Password'
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
                                onChange={handleRegister} name='password' value={registerData.password} />
                        </FormControl>


                    </Box>



                </Grid>

                {/* signup btn */}
                {isRegisterApiLoading ? <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 'px', padding: '8px', mb: '90px' }}>
                    <Button variant='contained' disabled={true} sx={{ color: 'white', padding: '10px 30px', fontSize: '14px', fontWeight: '600', '&:hover': {  color: 'white' } }} >Please Wait</Button>
                </Grid>
                    :
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 'px', padding: '8px', mb: '90px' }}>
                        <Button sx={{ color: 'white', bgcolor: 'green', padding: '10px 30px', fontSize: '14px', fontWeight: '600', '&:hover': { bgcolor: 'green', color: 'white' } }} onClick={RegisterSubmit}>Register</Button>
                    </Grid>}
            </Grid>
            {/* </Box> */}

        </>
    )
}

export default RegisterPage