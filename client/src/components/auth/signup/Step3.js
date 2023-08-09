import { Box, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'

const Step3 = ({ roomnumber, hostelname, handleChange }) => {
    return (
        <Box sx={{ height: "220px", width: '100%' }}>
            <Box marginBottom={2}>
                <TextField
                    fullWidth
                    label="Room Number"
                    name="roomnumber"
                    value={roomnumber}
                    onChange={handleChange}
                    type="text"
                />
            </Box>
            <Box marginBottom={2}>
                <FormControl fullWidth>
                    <InputLabel id="hostel">Hostel</InputLabel>
                    <Select
                        labelId="hostel"
                        id="demo-simple-select"
                        value={hostelname}
                        name="hostelname"
                        label="Hostel"
                        onChange={handleChange}
                    >
                        <MenuItem value="Bhabha Bhavan">Bhabha Bhavan</MenuItem>
                        <MenuItem value="Swami Bhavan">Swami Bhavan</MenuItem>
                        <MenuItem value="Gajjar Bhavan">Gajjar Bhavan</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Box>
    )
}

export default Step3