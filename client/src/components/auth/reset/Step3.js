import { Box, TextField } from "@mui/material";

const Step3 = ({ password, confirmPassword, handleChange }) => {
    return (
        <Box sx={{ height: "220px", width: '100%' }}>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="New Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    type="password"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    type="password"
                />
            </Box>
        </Box>
    )
}

export default Step3