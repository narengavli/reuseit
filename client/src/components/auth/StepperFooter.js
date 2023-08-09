import { Box, Button } from "@mui/material"

// import MUI icon
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const StepperFooter = ({ onBack, onNext, onFinish }) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {onBack && (
                <Button onClick={onBack} sx={{ mr: 1 }}>
                    <KeyboardArrowLeft /> Back
                </Button>
            )}
            {onNext && (
                <Button onClick={onNext}>
                    Next <KeyboardArrowRight />
                </Button>
            )}
            {onFinish && (
                <Button variant="contained" onClick={onFinish}>
                    Finish
                </Button>
            )}
        </Box>
    )
}

export default StepperFooter
