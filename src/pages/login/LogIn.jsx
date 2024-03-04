import React from 'react'
import "./login.css"
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SectionHeading from '../../components/SectionHeading';


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
                <div className='login_card'>
                  <SectionHeading style="auth_heading" text="Login"/>
                  <p>How do I get started</p>
                </div>
                <div className='provider_login'>
                    <img src="public/google.svg" alt="img" />
                    <span>Login with google</span>
                </div>
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
