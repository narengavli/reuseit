import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
const AuthHeader = ({ title }) => {
    return (
        <>
            <Box marginBottom={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60px', width: '60px', backgroundColor: '#f3f5f8', borderRadius: '30px' }}>
                    <Link href='/'>
                        <Image src='/image/reuseit.svg' alt="Brand Logo" height={40} width={40} />
                    </Link>
                </Box>
            </Box>

            <Box marginBottom={2}>
                <Typography variant="h5" fontWeight={"bold"} textAlign='center'>
                    {title}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }} textAlign='center'>
                    Join a community of savvy shoppers and sellers.
                </Typography>
            </Box>
        </>
    )
}

export default AuthHeader