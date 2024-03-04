import React from 'react'
import "./login.css"
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SectionHeading from '../../components/SectionHeading';


const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important',
  },
});


const LogIn = () => {
  return (
    <>
        
        <Box>
          <Grid container>
            <Grid item xs={6}>
              <div className='login_box'>
                <div className='login_card'>
                  <SectionHeading style="auth_heading" text="Login"/>
                  <p>How do I get started?</p>
                </div>
                <div className='from_main'>
                  <TextField className='email_inp' id="outlined-basic" label="Email Address" variant="outlined" />
                  <ValidationTextField
                    label="Password"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                  />
                </div>
                <div>
                  <h4 className='section_devider'>Login with others</h4>
                </div>
                <div>
                  <div className="auto_logins">
                    <div className='provider_login'>
                        <img src="public/google.svg" alt="img" />
                        <span>Login with google</span>
                    </div>
                    <div className='provider_login'>
                        <img src="public/facebook.svg" alt="img" />
                        <span>Login with Facebook</span>
                    </div>
                  </div>
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
