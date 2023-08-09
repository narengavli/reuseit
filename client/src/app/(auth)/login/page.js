"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Link from 'next/link';

// import css
import styles from './login.module.css'

// import MUI
import { Box, FormControl, InputLabel, InputAdornment, OutlinedInput, IconButton, Button, Divider, Link as MuiLink, Snackbar, Alert } from '@mui/material';

// import MUI icon
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UseridIcon from '@mui/icons-material/AlternateEmailRounded';
import LockOpenRoundedIcon from '@mui/icons-material/LockOpenRounded';

// import local icon
import GoogleIcon from '@/assets/icon/Google';

// import components
import AuthHeader from '@/components/auth/AuthHeader';
import AuthFooter from '@/components/auth/AuthFooter';

// API
import axios from 'axios';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const loginRoute = useSelector((state) => state.routes.loginRoute);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // Create FormData object
        const formData = new FormData(form);

        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        axios({
            method: "post",
            url: `${loginRoute}`,
            data: JSON.stringify(jsonData),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        })
            .then(function (response) {
                if (!response.data.status) {
                    handleResponse(response.data.message, 'error');
                }
                else {
                    handleResponse(response.data.message, 'success');
                    localStorage.setItem(
                        process.env.REACT_APP_LOCALHOST_KEY, response.data.userData.authtoken
                    );
                }
            })
            .catch(function (error) {
                //handle error
                console.log(error);
            });
    };

    const [open, setOpen] = React.useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const handleResponse = (message, severity) => {
        setMessage(message);
        setSeverity(severity);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const loginButtonStyle = {
        color: 'black',
        textTransform: 'none',
        borderColor: '#bdbdbd'
    };
    return (
        <Box className={styles.main}>
            <Box className={styles.authBox}>
                <AuthHeader title={'Welcome Back!'} />
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Box marginBottom={2}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <OutlinedInput
                                id="username"
                                name='username'
                                type='text'
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="user id icon"
                                            edge="end"
                                        >
                                            <UseridIcon />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Username"
                            />
                        </FormControl>
                    </Box>

                    <Box marginBottom={2}>
                        <FormControl fullWidth variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={(event) => event.preventDefault()}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </Box>

                    <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <MuiLink component={Link} href='/forgot-password' underline="hover">
                            {'Forgot password ?'}
                        </MuiLink>
                    </Box>

                    <Button fullWidth type="submit" variant="contained" sx={{ fontWeight: "bold" }} startIcon={<LockOpenRoundedIcon />} >
                        Login
                    </Button>
                </Box>

                <Box marginY={2}>
                    <Divider sx={{ color: 'text.secondary' }}>or</Divider>
                </Box>

                <Box marginBottom={2}>
                    <Button fullWidth variant="outlined" style={loginButtonStyle} startIcon={<GoogleIcon size={18} />}>
                        Sign up with Google
                    </Button>
                </Box>

                <AuthFooter que={'Dont you have an account?'} path={'/signup'} name={'Sign up'} />
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Login