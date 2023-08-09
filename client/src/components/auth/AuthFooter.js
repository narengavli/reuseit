import React from 'react'
import Link from 'next/link'
import { Box, Link as MuiLink } from '@mui/material'

const AuthFooter = ({ que, path, name }) => {
    return (
        <Box sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {que}
            <MuiLink component={Link} href={path} underline="hover" marginX={1}>
                {name}
            </MuiLink>
        </Box>
    )
}

export default AuthFooter