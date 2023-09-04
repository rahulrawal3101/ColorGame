import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
const socket = socketIOClient('http://localhost:3000/');
console.log(socket)

const SocketFile = () => {
  const [sock, setSock] = useState('')

  useEffect(()=>{
    setSock()
  })
  return (
    <div>SocketFile</div>
  )
}

export default SocketFile