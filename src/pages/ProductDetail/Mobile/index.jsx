import { Box } from '@mui/material';
import React from 'react';

function ProductDetailsMobile({ product, relevantProducts, seenProducts }) {
    return (
        <Box display={{ xs: "block", md: "none" }}>
            mobile
        </Box>
    );
}

export default ProductDetailsMobile;