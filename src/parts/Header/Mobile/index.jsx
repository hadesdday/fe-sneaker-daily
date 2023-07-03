import { Box, Typography } from '@mui/material';
import React from 'react';

function HeaderMobile(props) {
    return (
        <Box display={{ xs: "block", md: "none" }}>
            <Typography variant='h1'>
                hello
            </Typography>
        </Box>
    );
}

export default HeaderMobile;