import { Box, Typography } from '@mui/material';
import React from 'react';
import HomeCategoriesDesktop from './Desktop';
import HomeCategoriesMobile from './Mobile';

function HomeCategories({ categories }) {
    return (
        <Box>
            <Typography
                variant='h4'
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                pb={5}
                display={{ xs: "none", md: "inherit" }}
            >
                danh mục mua hàng
            </Typography>
            <HomeCategoriesDesktop categories={categories} />
            <HomeCategoriesMobile categories={categories} />
        </Box>
    );
}

export { HomeCategories };