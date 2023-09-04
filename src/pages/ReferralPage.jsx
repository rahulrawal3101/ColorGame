import React, { useContext } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { context } from '../global/Global_Context';


const ReferralPage = () => {
  const {isUserLoggedIn}= useContext(context);
  console.log(isUserLoggedIn);
  return (
    <>
    <Grid container>
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid red' }}>
        <Typography sx={{ color: 'white' }}>This is Referral page</Typography>
        <Button variant='contained'>Referral</Button>
      </Grid>
     
    </Grid>

  </>
)}

export default ReferralPage