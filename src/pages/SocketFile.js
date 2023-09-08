
// import { Typography } from '@mui/material';
// import React, { useContext, useEffect, } from 'react';
// // import openSocket from 'socket.io-client';
// import { context } from '../global/Global_Context';

// const socket = openSocket('http://137.184.122.0:5000', {
//   transports: ['websocket'],
// });

// const SocketFile = () => {
//   const { timer, dispatch } = useContext(context)

//   useEffect(() => {
//     socket.on('connection', () => {
//       console.log('Connected to Server');
//     });

//     socket.on('timer', (timestamp) => {
//       dispatch({
//         type: 'TIMER',
//         payload:(timestamp)
//       })
//       console.log(timestamp);

//     });
//     socket.on('disconnect', (resp) => {
//       console.log('server disconnected', resp)
//     });

//   }, []);
//  console.log(timer)
//   return (
//     <>
//       <Typography>hello socket.io</Typography>
//     </>
//   );
// }
// export default SocketFile;