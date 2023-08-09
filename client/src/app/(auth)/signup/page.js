"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import styles from './signup.module.css';

// MUI
import { Box, Typography, Button, Snackbar, Alert } from '@mui/material';

// import MUI icon
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// API
import axios from 'axios';

// Components
import AuthHeader from '@/components/auth/AuthHeader';
import AuthFooter from '@/components/auth/AuthFooter';
import Step1 from '@/components/auth/signup/Step1';
import Step2 from '@/components/auth/signup/Step2';
import Step3 from '@/components/auth/signup/Step3';

const steps = [
    { label: 'Step 1', component: Step1 },
    { label: 'Step 2', component: Step2 },
    { label: 'Step 3', component: Step3 },
];

const Signup = () => {
    const [activeStep, setActiveStep] = useState(0);
    const ActiveComponent = steps[activeStep].component;

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [hostelname, setHostelname] = useState('Bhabha Bhavan');
    const [roomnumber, setRoomnumber] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'firstname':
                setFirstname(value);
                break;
            case 'lastname':
                setLastname(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'mobile':
                setMobile(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'hostelname':
                setHostelname(value);
                break;
            case 'roomnumber':
                setRoomnumber(value);
                break;
            default:
                break;
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const registerRoute = useSelector((state) => state.routes.registerRoute);
    const handleSubmit = () => {
        const data = {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            mobile: mobile,
            password: password,
            address: `${roomnumber} ${hostelname}`,
        };

        axios({
            method: "post",
            url: `${registerRoute}`,
            data: data,
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
                }
            })
            .catch(function (error) {
                console.log(error)
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

    return (
        <Box className={styles.main}>
            <Box className={styles.authBox}>
                <AuthHeader title={'Create an account!'} />

                <Box marginBottom={2}>
                    <Typography>{steps[activeStep].label}</Typography>
                </Box>

                <Box marginBottom={2}>
                    <ActiveComponent
                        username={username}
                        firstname={firstname}
                        lastname={lastname}
                        email={email}
                        mobile={mobile}
                        password={password}
                        hostelname={hostelname}
                        roomnumber={roomnumber}
                        handleChange={handleChange}
                    />
                </Box>

                <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button onClick={handleBack} disabled={activeStep === 0} sx={{ mr: 1 }}>
                        <KeyboardArrowLeft /> Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                        <Button onClick={handleSubmit}>
                            Submit
                        </Button>
                    ) : (
                        <Button onClick={handleNext}>
                            Next <KeyboardArrowRight />
                        </Button>
                    )}
                </Box>

                <AuthFooter que={'Have an acoount?'} path={'/login'} name={'Login'} />
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Signup;