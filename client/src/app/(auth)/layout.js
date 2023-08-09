import Image from "next/image"
import { Box } from "@mui/material"

const AuthLayout = ({ children }) => {
    return (
        <main>
            <Box sx={{ height: '100vh', width: '100vw', position: 'fixed', overflow: 'hidden', zIndex: '-1', opacity: '0.2' }}>
                <Image
                    alt="Authorization Background"
                    src='/image/auth/auth-bg.svg'
                    fill
                    quality={10}
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    priority
                />
            </Box>
            {children}
        </main>
    )
}

export default AuthLayout