import { Box, TextField } from "@mui/material";

const Step2 = ({ otp, handleChange }) => {
    return (
        <Box sx={{ height: '220px', width: '100%' }}>
            <TextField
                label="OTP"
                value={otp}
                name="otp"
                onChange={handleChange}
                fullWidth
            />
        </Box>
    )
}

export default Step2