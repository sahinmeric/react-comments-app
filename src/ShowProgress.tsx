import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function ShowProgress() {
    return (
        <Box style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
        }}>
            <CircularProgress />
        </Box>
    );
}

export default ShowProgress;