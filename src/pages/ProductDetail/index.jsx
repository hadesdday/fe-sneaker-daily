import { Box } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage(props) {
    const params = useParams();
    const id = params.id;
    return (
        <Box>
            product detail page with id :{id}
        </Box>
    );
}

export default ProductDetailPage;