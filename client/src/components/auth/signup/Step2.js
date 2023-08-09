import { Box, TextField } from '@mui/material'

const Step2 = ({ firstname, lastname, mobaile, handleChange }) => {
    return (
        <Box sx={{ height: '220px', width: '100%' }}>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="First Name"
                    name="firstname"
                    value={firstname}
                    onChange={handleChange}
                    type="text"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="Last Name"
                    name="lastname"
                    value={lastname}
                    onChange={handleChange}
                    type="text"
                />
            </Box>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="Mobail Number"
                    name="mobile"
                    value={mobaile}
                    onChange={handleChange}
                    type="text"
                />
            </Box>
        </Box>
    )
}

export default Step2