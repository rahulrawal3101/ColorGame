import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import mainbg from '../assets/mainBG.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import timerh1 from '../assets/timerH1.png';
import timerm1 from '../assets/timerM1.png';
import timerm2 from '../assets/timerM2.png';
import CircleIcon from '@mui/icons-material/Circle';
import EditIcon from '@mui/icons-material/Edit';
import resultmainbg from '../assets/resultMainBG.png';

import FinalResultComponent from '../component/FinalResultComponent';




const TwoMinResult = () => {
    const h = window.innerHeight
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', }}>
                <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height: `${h}px`, backgroundImage: `url(${mainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat',overflowY:'scroll'}}>
                    <Grid container >
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'left', padding: '4px' }}>
                            <ArrowBackIosNewIcon sx={{ fontSize: '20px', color: 'white' }} />
                            <Typography sx={{ fontSize: '19px', fontWeight: '600', color: 'white', ml: '6px', mt: '2px' }}>2 Mint Panel</Typography>
                        </Grid>
                    </Grid>
                    {/* running game id  */}
                    <Grid container sx={{  bgcolor: '#6d4c41', background: 'rgb(70,70,70)', backgroundBlendMode: 'multiply', opacity: '0.75', borderRadius: '20px' }}>
                        <Grid item xs={12} sx={{ borderBottom: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <Typography sx={{ fontSize: '18px', color: 'green', fontWeight: '800' }}>Running Game ID</Typography>
                            <Typography sx={{ fontSize: '14px', color: '#fafafa', fontWeight: '800', }}>202382911583</Typography>


                        </Grid>
                        <Grid item xs={12} sx={{borderBottom:'1px solid black'}}>
                            <Box sx={{ width: '100%', mt: '5px' }}>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '900' }}>Time Left</Typography>
                                </Box>
                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Box sx={{ backgroundImage: `url(${timerh1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>0</Typography>
                                    </Box>

                                    <Box sx={{ backgroundImage: `url(${timerm1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>0</Typography>
                                    </Box>

                                    <Box sx={{ backgroundImage: `url(${timerm1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>:</Typography>
                                    </Box>

                                    <Box sx={{ backgroundImage: `url(${timerm1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>2</Typography>
                                    </Box>
                                    <Box sx={{ backgroundImage: `url(${timerm2})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>4</Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '4px', pb:'4px' }}>
                                    <Typography sx={{ fontSize: '12px', color: 'white', fontWeight: '900' }}>Whats is 7*8/4-10?</Typography>
                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ pb: '20px',mt:'3px' }}>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '7px' }}>
                                <Typography sx={{ color: 'white', fontSize: '15px', fontWeight: '800' }}>Result in Last 23 Seconds</Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: 'flex', border: '1px solid green', p: '5px' }}>

                                <Box sx={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'green', fontWeight: '800', fontSize: '14px' }}>Number</Typography>
                                    <Typography sx={{ color: 'white', }}>5</Typography>
                                </Box>
                                <Box sx={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'green', fontWeight: '800', fontSize: '14px' }}>Number</Typography>
                                    <Typography sx={{ color: 'white', mt: '2px' }}>5</Typography>
                                </Box>
                                <Box sx={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'green', fontWeight: '800', fontSize: '14px' }}>Number</Typography>
                                    <Box sx={{ display: 'flex', mt: '2px' }}>

                                        <CircleIcon sx={{ fontSize: '14px', color: 'green' }} />
                                        <CircleIcon sx={{ fontSize: '14px', color: 'red' }} />
                                    </Box>
                                </Box>
                                <Box sx={{ width: '25%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'green', fontWeight: '800', fontSize: '14px' }}>Number</Typography>
                                    <EditIcon sx={{ color: 'yellow', mt: '2px' }} />
                                </Box>

                            </Box>

                        </Grid>



                    </Grid>
                    {/* text  */}
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'white', fontSize: '11px', textAlign: 'center' }}>Above Results will be shown to user on Zero seconds nd To Admin on 23 seconds, Results will shown to Admin for last 23 to 0 sec, after that it will br erased</Typography>

                        </Grid>
                    </Grid>

                    {/* active participant  */}

                    <Grid container sx={{padding: '5px', mt:'3px' }}>
                        <Grid item xs={12}>
                            <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: '600' }}>Active Participant (0)</Typography>
                        </Grid>

                        <Grid container sx={{ backgroundImage: `url(${resultmainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: '85px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item xs={12} sx={{ border: '1px solid white', padding: '10px', height: '50px' }}>

                            </Grid>
                        </Grid>
                    </Grid>

                    {/* last few results  */}

                    <FinalResultComponent/>
                    



                </Grid>

            </Grid>
        </>
    )
}

export default TwoMinResult