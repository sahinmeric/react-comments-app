import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function ShowProgress() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
}

export default ShowProgress;