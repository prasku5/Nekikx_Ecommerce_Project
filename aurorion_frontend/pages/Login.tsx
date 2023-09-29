import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { Routes, Route, Outlet } from 'react-router-dom';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRouter } from 'next/router';
import { data } from 'autoprefixer';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Nekikx Ecommerce
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Login = () => {

    const router = useRouter(); // Use useRouter from next/navigation

    const [message, setMessage] = useState(''); // Initialize with an empty string

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

const handleSignIn = async (event: { preventDefault: () => void; }) => {
        event.preventDefault(); // Prevents auto-refresh
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // Ensure this is set to 'application/json'
                },
                body: JSON.stringify(formData)
            });
            
            console.log(response);

            if (response.ok) {
                const data = await response.json(); // Parse the response as JSON
        
                // Check if the sign-in was successful based on the response success property
                if (data.success) {
                    setMessage(data.message);
        
                    // // Store user data in local storage
                    // localStorage.setItem('userData', JSON.stringify(formData));
                    
                    // Navigate to the homepage
                    router.push('/');
                } else {
                    // Handle unsuccessful sign-in
                    console.log('Invalid email or password');
                    const data = await response.json();
                    setMessage(data.message); // Display the error message from the backend
                }
            } else {
                const data = await response.json();
                console.error('Sign-in failed');
                setMessage(data.message); // Display the error message from the backend
            }
        } catch (error) {
            console.error('Error during sign-in:', error);
        } 
    };

  const defaultTheme = createTheme();

  return (

       <ThemeProvider theme={defaultTheme}>
         
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate onSubmit={handleSignIn} sx={{ mt: 1 }} autoComplete="off">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                />
                
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                
                {message && (
                <Typography variant="body1" color="secondary">
                  {message}
                </Typography>
              )}
                
                <Button type="submit" fullWidth variant="contained" style={{ marginTop: '3px', marginBottom: '2px' }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box sx={{ marginTop: 5 }}>
                    <Copyright />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
  );
} 

export default Login;