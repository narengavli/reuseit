import { Box, TextField } from "@mui/material";

const Step1 = ({ email, handleChange }) => {
    return (
        <Box sx={{ height: '220px', width: '100%' }}>
            <TextField
                label="Email ID"
                value={email}
                name="email"
                onChange={handleChange}
                fullWidth
            />
        </Box>
    )
}

export default Step1