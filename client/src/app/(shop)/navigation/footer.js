"use client"
import React from 'react'
import Link from 'next/link'
import { Box, Container, IconButton, Typography, Link as MuiLink } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <Box py={2} sx={{ backgroundColor: "#f5f5f5" }}>
            <Container maxWidth="xl" sx={{ display: "flex", justifyContent: 'space-between', alignItems: "center" }}>
                <Typography>&#169; 2023 narengavli. All rights reserved.</Typography>
                <IconButton aria-label="delete">
                    <GitHubIcon />
                </IconButton>
            </Container >
        </Box >
    )
}

export default Footer