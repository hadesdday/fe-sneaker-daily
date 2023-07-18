import { Box, Typography } from '@mui/material';
import React from 'react';

function ProductListFilterMobile({ title, options, selectedOptions }) {
    return (
        <Box
            px={4}
            py={3}
        >
            <Typography
                fontSize={"4vw"}
                textTransform={"uppercase"}
                color={"primary.main"}
                fontWeight={"bold"}
            >
                {title}
            </Typography>
            {options.map((item, index) =>
                <Typography
                    fontSize={"4vw"}
                    key={index}
                >
                    {item.label}
                </Typography>
            )}
        </Box>
    );
}

export default ProductListFilterMobile;