import { Box, TextField } from '@mui/material'

const Step1 = ({ username, email, password, handleChange }) => {
    return (
        <Box sx={{ height: "220px", width: '100%' }}>
            <Box marginBottom={2}>
                <TextField
                    label="Username"
                    value={username}
                    name='username'
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="Email ID"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    type="text"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    label="Password"
                    name='password'
                    value={password}
                    onChange={handleChange}
                    fullWidth
                />
            </Box>
        </Box>
    )
}

export default Step1