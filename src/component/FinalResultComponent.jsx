import { Box, Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import resultmainbg from '../assets/resultMainBG.png';
import quizbg from '../assets/quizBG.png';
import { context } from '../global/Global_Context';



const FinalResultComponent = () => {
    const {  finalresultshow } = useContext(context)
    console.log(finalresultshow)
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
                                    finalresultshow.map((ele, index) => {
                                        return (

                                            <Grid key={index} container sx={{ borderBottom: '0.5px solid grey', padding: '8px' }}>
                                                <Grid item xs={4.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.roomID}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.resultNumber}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>{ele.resultSize}</Typography>
                                                </Grid>
                                                <Grid item xs={2.5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Typography sx={{ color: 'white', fontSize: '14px', }}>
                                                       
                                                      {
                                                        ele.resultColor === "Green" || ele.resultColor === "Red"?
                                                        <CircleIcon sx={{ fontSize: '10px', color:ele.resultColor }} />:
                                                        <>
                                                        <CircleIcon sx={{ fontSize: '10px', color:ele.resultColor==="GV"?"green":"red" }} />
                                                        <CircleIcon sx={{ fontSize: '10px', color:"violet" }} />
                                                        </>
                                                      }

                                                    </Typography>
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