import { Box } from '@mui/material';
import React from 'react';

function ProductListMobile(props) {
    return (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
            mobile
        </Box>
    );
}

export default ProductListMobile;