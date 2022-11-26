import React from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";


function NotFoundNew() {
    const navigate = useNavigate()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                minHeight: '100vh',
                backgroundColor: '#C6EBEB',
            }}
        >
            <Typography variant="h1" style={{ color: 'black' }}>
                404
            </Typography>
            <Typography variant="h6" style={{ color: 'black' }}>
                The page you’re looking for doesn’t exist.
            </Typography>
            <Button
                variant="contained"
                size="small"
                color="error"
                startIcon={<ArrowBackIosIcon />}
                onClick={() => navigate(-1)}>
                BACK
            </Button>
        </Box>
    );
}

export default NotFoundNew;