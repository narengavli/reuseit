"use client"
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import styles from './reset.module.css'

// import components
import AuthHeader from '@/components/auth/AuthHeader';
import AuthFooter from '@/components/auth/AuthFooter';
import Step1 from '@/components/auth/reset/Step1';
import Step2 from '@/components/auth/reset/Step2';
import Step3 from '@/components/auth/reset/Step3';

const steps = [
    { label: 'Email ID', component: Step1 },
    { label: 'OTP Verification', component: Step2 },
    { label: 'New Password', component: Step3 },
];

const ForgotPassword = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSubmit = () => {
        // Perform necessary actions after password reset
        console.log('Password reset successful!');
        console.log('Email:', email);
        console.log('OTP:', otp);
        console.log('New Password:', password);
        console.log('Confirm Password:', confirmPassword);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'otp':
                setOtp(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    const ActiveComponent = steps[activeStep].component;

    return (
        <Box className={styles.main}>
            <Box className={styles.authBox}>
                <AuthHeader title={'Reset your Password'} />

                <Box marginBottom={2}>
                    <Typography>{steps[activeStep].label}</Typography>
                </Box>

                <Box marginBottom={2}>
                    <ActiveComponent
                        email={email}
                        otp={otp}
                        password={password}
                        confirmPassword={confirmPassword}
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

                <AuthFooter que={'Remembered your password?'} path={'/login'} name={'Login'} />
            </Box>
        </Box>
    );
};

export default ForgotPassword;
