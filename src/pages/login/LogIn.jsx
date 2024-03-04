import React from 'react'
import "./login.css"
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const LogIn = () => {
  return (
    <>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <div className='login_box'>
                
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='login_img'></div>
            </Grid>
          </Grid>                   
        </Box>
    </>
  )
}

export default LogIn
