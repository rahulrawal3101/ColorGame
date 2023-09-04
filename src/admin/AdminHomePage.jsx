import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import mainbg from '../assets/mainBG.png';
import img1 from '../assets/c1.jpg';
import img2 from '../assets/c2.jpg';
import img3 from '../assets/c3.avif';
import img4 from '../assets/c4.webp';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';

const slideImages = [
    {
        img: img1,
    },
    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    }
];

const chooseGame = [
    {
        img: card1,
        text1: 'Lucky Digits',
        number: '0-9',
        text2: '2 Minutes Game',
        text3: 'Answer the quiz',
        id: 1
    },
    {
        img: card2,
        text1: 'Lucky Digits',
        number: '0-99',
        text2: '5 Minutes Game',
        text3: 'Answer the quiz',
        id: 2
    },
    {
        img: card3,
        text1: 'Lucky Digits',
        number: '0-9',
        text2: '1 Minutes Game',
        text3: 'Answer the quiz',
        id: 3
    },
    {
        img: card4,
        text1: 'Lucky Digits',
        number: '0-9',
        text2: '1 Minutes Game',
        text3: 'Answer the quiz',
        id: 4
    },
    {
        img: card1,
        text1: 'Lucky Digits',
        number: '0-9',
        text2: '1 Minutes Game',
        text3: 'Answer the quiz',
        id: 5
    },
]

const adminPanel = [
    {
        text: 'All Users',
        color: 'green'
    },
    {
        text: '1 Min Quiz',
        color: '#c2185b'
    },
    {
        text: '1 Min Results',
        color: '#c2185b'
    },
    {
        text: '5 Min Quiz',
        color: 'green'
    },
    {
        text: '1 Min Quiz',
        color: 'green'
    }
]

const proprietes = {
    duration: 3500,
    transitionDuration: 200,
    infinite: true,
    arrows: false
}
const AdminHomePage = () => {
    const navigate = useNavigate()

    const goToResult = (id) => {
        if (id == 1) {
            navigate('/twominresult')
        }
        else {
            navigate('/adminhomepage')
        }
        console.log(id)
    }

    const h = window.innerHeight
    return (
        <>
            <Grid container sx={{ display: 'flex', justifyContent: 'center', }}>
                <Grid item lg={3.5} md={5.5} sm={9} xs={12} sx={{ height: `${h}px`, backgroundImage: `url(${mainbg})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', overflow: 'hidden' }}>
                    <Grid container>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: '8px', flexDirection: 'column' }}>
                            <Typography sx={{ color: 'white', fontSize: '27px', fontWeight: '900' }}>Color Prediction</Typography>
                            <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '900' }}>Admin Panel</Typography>

                        </Grid>
                        {/* slide part  */}
                        <Grid item xs={12} >
                            <Box>
                                <Slide {...proprietes}>
                                    {slideImages.map((ele) => (

                                        <Box sx={{ backgroundImage: `url(${ele.img})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', height: '180px' }}>

                                        </Box>

                                    ))}
                                </Slide>
                            </Box>


                        </Grid>

                        {/* control panels  */}

                        <Grid container >

                            <Grid item xs={12} sx={{ padding: '4px' }}>
                                <Typography sx={{ fontSize: '18px', color: 'white', fontWeight: '900' }}>Control panels</Typography>
                            </Grid>
                            <Grid container sx={{ height: '170px', }}>
                                <Box sx={{ display: 'flex', overflowX: 'scroll' }}>

                                    {
                                        chooseGame.map((ele) => {
                                            return (
                                                <Box sx={{ width: '135px', height: '160px', backgroundImage: `url(${ele.img})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', padding: '15px 13px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                    {/* <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}> */}


                                                    <Box onClick={() => { goToResult(ele.id) }} sx={{ cursor: 'pointer', width: '130px', padding: '1px 3px' }}>
                                                        <Box sx={{ color: 'white', }}>
                                                            <Typography sx={{ fontSize: '13px', fontWeight: '900' }}>{ele.text1}</Typography>
                                                            <Typography sx={{ fontSize: '13px', fontWeight: '900' }}>{ele.number}</Typography>
                                                        </Box>

                                                        <Box sx={{ mt: '7px' }}>
                                                            <Typography sx={{ fontSize: '11px', color: 'lightgrey' }}>{ele.text2}</Typography>
                                                            <Typography sx={{ fontSize: '11px', color: 'lightgrey' }}>{ele.text3}</Typography>
                                                        </Box>

                                                        <Box sx={{ mt: '22px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                            <Button sx={{ bgcolor: '#757575', fontSize: '11px', color: '#263238', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: '600', padding: '8px 15px', '&:hover': { bgcolor: '#757575', fontSize: '11px', color: '#263238', } }} >Play Now <ArrowForwardIcon sx={{ fontSize: '16px', ml: '3px', color: 'black' }} /></Button>
                                                        </Box>
                                                        {/* </Box> */}
                                                    </Box>
                                                </Box>
                                            )
                                        })
                                    }
                                </Box>
                            </Grid>

                        </Grid>

                        {/* admin control  */}

                        <Grid container sx={{ mt: '10px', padding: '3px' }}>
                            <Grid item xs={12} sx={{ padding: '5px' }}>
                                <Typography sx={{ fontSize: '18px', color: 'white', fontWeight: '900' }}>Admin Controls</Typography>

                            </Grid>
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px' }}>
                                {
                                    adminPanel.map((ele) => {
                                        return (
                                            <Grid item xs={5.7} sx={{ mb: '6px', bgcolor: ele.color, padding: '6px', borderRadius: '0px 17px 0px 17px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                                <Typography sx={{ fontSize: '15px', color: 'white', fontWeight: '900' }}>{ele.text}</Typography>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </Grid>


                    </Grid>



                </Grid>

            </Grid>
        </>
    )
}

export default AdminHomePage