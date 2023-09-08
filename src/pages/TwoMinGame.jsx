import { Box, Button, Container, Grid, Typography } from '@mui/material';
import mainbg from '../assets/mainBG.png';
import React, { useContext,useState } from 'react';
import twoblueball from '../assets/twoBlueBallBG.png';
import quizbg from '../assets/quizBG.png';
import walleticon from '../assets/walletIcon.png';
import RefreshIcon from '@mui/icons-material/Refresh';
import mintsgame from '../assets/mintsGameBG.png';
import timergreen from '../assets/timerGreen.png';
import buybg from '../assets/buyBG.png';
import dots from '../assets/halfBlackBallDottedLines.png';
import halfball from '../assets/halfBlackBall.png';
import halfball1 from '../assets/halfBlackBall2.png';
import timerh1 from '../assets/timerH1.png';
import timerm1 from '../assets/timerM1.png';
import timerm2 from '../assets/timerM2.png';
import quizbg1 from '../assets/quiz.png';
import numberbg from '../assets/numbersMainBG.png';
import numbersecbg from '../assets/numbersSecBG.png';
import redviolet from '../assets/zeroBG.png';
import greenvoilet from '../assets/fiveBG.png';
import redbg from '../assets/redbg.png';
import greenbg from '../assets/green.png';
import DrawerOpenClose from '../component/DrawerOpenClose';
import FinalResultComponent from '../component/FinalResultComponent';
import { context } from '../global/Global_Context';

const numbercolor = [
    {
        color: redviolet,
        text: '0',
        colorbg: 'linear-gradient(180deg, rgba(237,54,54,1) 19%, rgba(194,39,163,1) 66%);'
    },
    {
        color: greenbg,
        text: '1',
        colorbg: 'green'
    },
    {
        color: redbg,
        text: '2',
        colorbg: 'red'
    },
    {
        color: greenbg,
        text: '3',
        colorbg: 'green'

    },
    {
        color: redbg,
        text: '4',
        colorbg: 'red'
    },
    {
        color: greenvoilet,
        text: '5',
        colorbg: 'linear-gradient(106deg, rgba(85,228,102,1) 34%, rgba(194,39,163,1) 61%);'
    },
    {
        color: redbg,
        text: '6',
        colorbg: 'red'
    },
    {
        color: greenbg,
        text: '7',
        colorbg: 'green'

    },
    {
        color: redbg,
        text: '8',
        colorbg: 'red'

    },
    {
        color: greenbg,
        text: '9',
        colorbg: 'green'
    }
]






const TwoMinGame = () => {
    const { ques,seconequestion,sectwoquestion,twominquizroomid} = useContext(context)
    const [open, setOpen] = useState(false);
    const [bgcolor, setBgcolor] = useState('');
    const [checkColor, setCheckColor] = useState("")
    


    const checkHandler = ({ bgcolor, num, text }) => {
        setOpen(true);
        setBgcolor(bgcolor);

        if (num === "color") {
            setCheckColor(text)
        }
        else {
            setCheckColor(text)
        }
    }
    const h = window.innerHeight;

    
    // console.log(secOne,secTwo)
    console.log(ques)
    console.log(seconequestion,sectwoquestion)
    
   

  
    return (
        <>
        <Container disableGutters maxWidth={'xl'} >
            <Grid container sx={{ justifyContent: 'center', height: `${h}px`}}>
                <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height:'fit-content', backgroundImage: `url(${mainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', overflowY: 'scroll',  }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '10px' }}>
                            <Typography sx={{ color: 'white', fontSize: '27px' }}>Color Prediction</Typography>

                        </Grid>
                    </Grid>
                    {/* section one  */}
                    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={11.6} sx={{ backgroundImage: `url(${twoblueball})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '20px' }}>
                            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100%' }}>
                                <Grid item xs={12} sx={{ backgroundImage: `url(${quizbg})`, backgroundSize: '100% 100%', padding: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <Box sx={{ width: '50px', height: '50px' }}>
                                            <img src={walleticon} alt='wallet' width={'100%'} height={'100%'} />

                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: 'grey', fontSize: '17px' }}>Total</Typography>
                                            <Typography sx={{ color: 'grey', fontSize: "12px" }}>Wallet Balance</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'grey' }}>
                                        <Typography sx={{ fontSize: '14px', fontWeight: '900' }}>IQ 86520.00</Typography>
                                        <RefreshIcon sx={{ fontSize: '19px', mb: '3px' }} />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sx={{ mt: '15px' }}>
                                    <Button sx={{ bgcolor: '#ffab00', color: 'white', fontSize: '12px', fontWeight: '800', borderRadius: '10px', border: '1px solid white' }}>Widthdraw</Button>
                                    <Button sx={{ bgcolor: '#1a237e', color: 'white', fontSize: '12px', fontWeight: '800', borderRadius: '10px', border: '1px solid white', ml: '10px' }}>Deposit</Button>

                                </Grid>
                            </Grid>



                        </Grid>

                    </Grid>
                    {/* section two  */}

                    <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={11.6} sx={{ backgroundImage: `url(${mintsgame})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', padding: '10px', height: '100px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={timergreen} alt='smallicon' />
                            </Box>

                        </Grid>

                    </Grid>

                    {/* section three  */}
                    <Grid container sx={{ mt: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={11.6} sx={{ backgroundImage: `url(${buybg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '100px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <Box sx={{ width: '150px', height: '90%', ml: '5px' }}>
                                <Box sx={{ border: '1px solid white', width: '70px', borderRadius: '10px', mt: '7px' }}>
                                    <Typography sx={{ color: 'white', fontSize: '12px', textAlign: 'center', mt: '3px' }}>1 Minutes</Typography>
                                </Box>
                                <Typography sx={{ fontSize: '18px', fontWeight: '900', color: 'white', mt: '18px' }}>{twominquizroomid}</Typography>

                            </Box>
                            <Box sx={{ height: '100%', width: '20px', }}>
                                <Box sx={{ width: '20px', height: '10%', display: 'flex', alignItems: 'flex-start' }}>
                                    <img src={halfball} height='100%' width={'100%'} alt='halfball'/>

                                </Box>
                                <Box sx={{ width: '20px', height: '80%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
                                    <img src={dots} alt='dot' height='100%' width={'10%'} />
                                </Box>
                                <Box sx={{ width: '20px', height: '10%', display: 'flex', alignItems: 'flex-end' }}>
                                    <img src={halfball1} height='100%' width={'100%'} alt='halfball'/>

                                </Box>


                            </Box>
                            <Box sx={{ width: '150px', height: '100%' }}>
                                <Box sx={{ mt: '7px', ml: '10px' }}>
                                    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '900' }}>Left time to buy</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', mt: '10px' }}>
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
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>{seconequestion}</Typography>
                                    </Box>
                                    <Box sx={{ backgroundImage: `url(${timerm2})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '6px', height: '15px', mr: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography sx={{ color: 'white', fontWeight: '900' }}>{sectwoquestion}</Typography>
                                    </Box>
                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                    {/* section four  */}
                    <Grid container sx={{ mt: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={11.6} sx={{ height: '140px', backgroundImage: `url(${quizbg1})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}>
                            <Typography sx={{ fontSize: '18px', color: 'white', m: '5px', ml: '8px' }}>Quiz</Typography>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ backgroundImage: `url(${quizbg})`, backgroundSize: '100% 100%', height: '80px', width: '90%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                    <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '900' }}>{ques}</Typography>
                                    <Typography sx={{ fontSize: '14px', color: 'grey' }}>Click the correct answer below</Typography>

                                </Box>

                            </Box>

                        </Grid>

                    </Grid>

                    {/* sectinon five  */}

                    <Grid container sx={{ mt: '14px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                        <Grid item xs={11.6} sx={{ height: '260px', backgroundImage: `url(${numberbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', pb: '10px' }}>
                            <Typography sx={{ textAlign: 'center', color: 'white', mt: '5px' }}>Answers</Typography>
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <Grid onClick={() => { checkHandler({ bgcolor: "green", num: "color", text: "Green" }) }} item xs={3.5} sx={{ cursor: 'pointer', borderRadius: '4px 15px 4px 15px', bgcolor: 'green', color: 'white', padding: '10px' }}>
                                    <Typography sx={{ fontWeight: '900', textAlign: 'center' }}>Green</Typography>
                                </Grid>
                                <Grid onClick={() => { checkHandler({ bgcolor: "violet", num: "color", text: "Violet" }) }} item xs={3.5} sx={{ cursor: 'pointer', borderRadius: '4px 15px 4px 15px', bgcolor: 'violet', color: 'white', padding: '10px' }}>
                                    <Typography sx={{ fontWeight: '900', textAlign: 'center' }}>Violet</Typography>
                                </Grid>
                                <Grid onClick={() => { checkHandler({ bgcolor: "red", num: "color", text: "Red" }) }} item xs={3.5} sx={{ cursor: 'pointer', borderRadius: '4px 15px 4px 15px', bgcolor: 'red', color: 'white', padding: '10px' }}>
                                    <Typography sx={{ fontWeight: '900', textAlign: 'center' }}>Red</Typography>
                                </Grid>
                            </Grid>
                            <Grid container sx={{ justifyContent: 'center', alignItems: 'center', height: '110px', }}>

                                <Grid item xs={11.5} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', backgroundImage: `url(${numbersecbg})`, backgroundSize: '100% 100%', padding: '10px', mt: '10px' }}>
                                    {
                                        numbercolor.map((ele,index) => {
                                            return (
                                                <Box key={index} onClick={() => { checkHandler({ bgcolor: ele.colorbg, num: 1, text: ele.text }) }} sx={{ width: '18%', display: 'flex', justifyContent: 'center', alignItems: 'center', m: '1px', mb: '5px' }}>

                                                    <Box sx={{ cursor: 'pointer', backgroundImage: `url(${ele.color})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '10px', width: '25px', textAlign: 'center', borderRadius: '50%', border: '1px solid white' }} >
                                                        <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: '900' }}>{ele.text}</Typography>
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }


                                </Grid>
                                <Grid item xs={11.5} sx={{ height: '45px', mt: '7px', display: 'flex', borderRadius: '20px', pb: '8px', }}>
                                    <Box onClick={() => { checkHandler({ bgcolor: '#ffab00', num: 1, text: "Big" }) }} sx={{ cursor: 'pointer', width: '50%', bgcolor: '#ffab00', height: '100%', borderRadius: '12px 0px 0px 12px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2px' }}>
                                        <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: '900' }}>Big</Typography>

                                    </Box>
                                    <Box onClick={() => { checkHandler({ bgcolor: "green", num: 1, text: "Small" }) }} sx={{ cursor: 'pointer', width: '50%', bgcolor: 'green', height: '100%', display: 'flex', justifyContent: 'center', borderRadius: '0px 12px 12px 0px', alignItems: 'center', padding: '2px' }}>
                                        <Typography sx={{ color: 'white', fontSize: '17px', fontWeight: '900' }}>Small</Typography>

                                    </Box>

                                </Grid>
                            </Grid>


                        </Grid>

                    </Grid>
                    {/* section six  */}
                    <Grid container sx={{ mt: '9px', mb: '10px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid item xs={3.6} sx={{ border: '1px solid white', bgcolor: '#e57373', padding: '14px 12px 14px 12px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: '11px', fontWeight: '900' }}>Quiz Record</Typography>

                        </Grid>
                        <Grid item xs={3.6} sx={{ border: '1px solid white', bgcolor: 'green', padding: '14px 12px 14px 12px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: '11px', fontWeight: '900' }}>Chart Record</Typography>

                        </Grid>
                        <Grid item xs={3.6} sx={{ border: '1px solid white', bgcolor: 'green', padding: '14px 12px 14px 12px', borderRadius: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Typography sx={{ color: 'white', fontSize: '11px', fontWeight: '900' }}> My Quiz Record</Typography>

                        </Grid>
                    </Grid>

                    {/* section seven  */}
                    <FinalResultComponent />

                    {/* Mui drawer  */}



                    <DrawerOpenClose open={open} setOpen={setOpen} bgcolor={bgcolor} setBgcolor={setBgcolor} checkColor={checkColor} />

                </Grid>


            </Grid>
            </Container>
        </>
    )
}

export default TwoMinGame