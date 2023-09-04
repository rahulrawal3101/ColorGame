import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import resultmainbg from '../assets/resultMainBG.png';
import quizbg from '../assets/quizBG.png';


const resultData = [
    {
        period: '20238267378',
        number: 2,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 3,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 5,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 9,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 0,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 2,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 7,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 5,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 6,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 2,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 3,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 5,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 9,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 0,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 2,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 7,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 5,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 2,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },
    {
        period: '20238267378',
        number: 7,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'red' }} />
    },
    {
        period: '20238267378',
        number: 9,
        size: 'Small',
        color: <CircleIcon sx={{ fontSize: '10px', color: 'green' }} />
    },


]

const FinalResultComponent = () => {
    return (
        <>
            {/* last few results  */}
            <Grid container sx={{ mt: '4px' }}>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 6px 4px 6px' }} >
                    <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: '800' }}>Last Few Results</Typography>
                    <Typography sx={{ color: 'white', fontSize: '10px', fontWeight: '900' }}>View All</Typography>
                </Grid>

                <Grid container sx={{ mt: '2px', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: '80px' }}>

                    <Grid item xs={11.6} sx={{ backgroundImage: `url(${resultmainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: 'fit-content' }} >

                        <Box sx={{ width: '100%', height: '70px', display: 'flex', justifyContent: 'center', alignItems: 'center', pt: '10px', pb: '10px' }}>
                            <Grid container sx={{ width: '95%', height: '60px', backgroundImage: `url(${quizbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={4.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 900 }}>Period</Typography>
                                </Grid>
                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 900 }}>Number</Typography>
                                </Grid>
                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 900 }}>Size</Typography>
                                </Grid>
                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Typography sx={{ color: 'white', fontSize: '14px', fontWeight: 900 }}>Color</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        {/* main result part in same section  */}

                        <Box sx={{ padding: '10px' }}>
                            <Box sx={{ width: '100%', border: '1px solid white', height: '300px', overflowY: 'scroll', }}>

                                {
                                    resultData.map((ele) => {
                                        return (

                                            <Grid container sx={{ borderBottom: '0.5px solid grey', padding: '8px' }}>
                                                <Grid item xs={4.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.period}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.number}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.size}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.color}</Typography>
                                                </Grid>
                                            </Grid>
                                        )
                                    })
                                }

                            </Box>
                        </Box>


                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default FinalResultComponent