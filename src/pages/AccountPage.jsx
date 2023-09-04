
import Avatar from '@mui/material/Avatar';
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import mainbg from '../assets/mainBG.png'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import lineiq from '../assets/lineIQ.png';
import profileimg from '../assets/profileImageDummy.png';
import halfbgimg from '../assets/halfLeftBGBox.png';
import howitwork from '../assets/howItWorksBG.png';
import howitworkcard from '../assets/howItWorkCardBG.png';
import othergame from '../assets/otherGameBG.png';
import BottomNavbar from '../component/BottomNavbar';
import { useContext } from 'react';
import { context } from '../global/Global_Context';
import { useNavigate } from 'react-router-dom';
import { LOG_OUT } from '../constant';


const AccountPage = () => {
    const {isUserLoggedIn,dispatch} = useContext(context);

    console.log(isUserLoggedIn)

    const h = window.innerHeight;

    const logOutHandler =()=>{
            dispatch({
                type:LOG_OUT
            });
            localStorage.clear();
    }
    return (
        <>
                   
       
                    <Box sx={{ overflowY: 'scroll', height: `${h}px` , position:'relative', }}>



                        <Grid container >
                            <Grid item xs={12} sx={{ mt: '3px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
                                    <ArrowBackIosNewIcon sx={{ fontSize: '20px' }} />
                                    <Typography sx={{ fontSize: '18px', ml: '4px', fontWeight: '900' }}>Profile</Typography>

                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <Box sx={{ mr: '4px', borderRadius: '5px', background: 'linear-gradient(#193190, #193190, #234DBD, #707CAD)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                                        <WalletIcon sx={{ fontSize: '21px', color: 'white', ml: '5px', mr: '3px' }} />
                                        <Typography sx={{ fontSize: '12px', color: 'white', mt: '2px', mr: '3px', fontWeight: '900' }}>IQ: 593536.00</Typography>
                                        <img src={lineiq} alt='line' height={'30px'} style={{ bgcolor: 'white' }} />
                                        <Typography sx={{ color: 'white', ml: '5px', mr: '4px', fontWeight: '600' }}>+</Typography>
                                    </Box>

                                    <SettingsIcon sx={{ color: 'white', mr: '3px' }} />



                                </Box>

                            </Grid>
                        </Grid>
                        {/* profile section */}
                        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '20px', flexDirection: 'column' }}>

                                <Avatar alt="Remy Sharp" src={profileimg} sx={{ width: '93px', height: '93px' }} />
                                <Typography sx={{ color: 'white', fontWeight: '900', mt: '4px', fontSize: '17px' }}>RAHUL</Typography>
                                <Divider sx={{ width: '75%', border: '1px solid grey', mt: '5px' }}></Divider>
                                <Box sx={{ width: '255px', height: '70px', ml: '13px', mt: '5px', backgroundImage: `url(${halfbgimg})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '900' }}>Complete KYC</Typography>


                                </Box>


                            </Grid>

                            {/* statistics section */}
                            <Grid item xs={11} sx={{ mt: '15px' }}>
                                <Grid container sx={{ backgroundImage: `url(${howitwork})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: '260px', }}>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '20px', pb: '18px' }}>
                                        <Typography sx={{ fontSize: '17px', fontWeight: '900', color: 'white' }}>Statistics</Typography>

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

                                {/* Refer and earn section  */}
                                <Grid container sx={{ backgroundImage: `url(${othergame})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', mt: '15px', pb: '20px' }}>
                                    <Grid item xs={12} sx={{ display: 'flex', backgroundImage: `url(${halfbgimg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', justifyContent: 'space-between', alignItems: 'center', padding: '7px' }}>
                                        <Box>
                                            <Typography sx={{ color: 'white', fontSize: '14px', fontWeight:'900' }}>Refer And Earn</Typography>
                                        </Box>

                                        <Box sx={{ bgcolor: '#283593', color: 'white', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                            <Typography sx={{p:'3px 13px', mt:'4px', fontWeight:'900'}}>IQ 0</Typography>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} sx={{ padding: '7px 7px 25px 7px' }}>
                                        <Typography sx={{ color: 'white', fontSize: '14px' }}>You have not invited anyone yet !</Typography>
                                    </Grid>
                                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                        <Button variant='contained'>Invite Friends</Button>

                                    </Grid>
                                </Grid>



                            </Grid>
                            {/* Log oout btn  */}

                            <Grid item xs={11} sx={{ mt: '15px', height: '136px' }}>
                                <Button sx={{ bgcolor: 'red', color: 'white', width: '100%', "&:hover": { bgcolor: 'red', color: 'white' } }} onClick={logOutHandler}>Log out Account</Button>
                            </Grid>


                        </Grid>


                    </Box>
              
        </>
    )
}

export default AccountPage