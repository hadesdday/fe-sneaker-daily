import { Box, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Category1Background from "../../../assets/category/catalogy-1.jpg";
import Category2Background from "../../../assets/category/catalogy-2.jpg";
import Category3Background from "../../../assets/category/catalogy-3.jpg";

function HomeCategoriesDesktop({ categories }) {
    function getBackgroundImage(index) {
        switch (index) {
            case 0:
                return Category1Background;
            case 1:
                return Category2Background;
            case 2:
                return Category3Background;
            default:
                return Category1Background;
        }
    }
    return (
        <Stack direction={"row"} justifyContent={"center"} spacing={3} display={{ xs: "none", md: "flex" }}>
            {categories.map((category, index) =>
                <Stack direction={"column"} key={index} alignItems={"center"}
                    sx={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)),url(${getBackgroundImage(index)})`,
                        backgroundSize: "auto",
                        backgroundRepeat: "no-repeat",
                        width: "400px",
                        height: "270px"
                    }}
                >
                    {category.map((item, index) =>
                        <Box
                            component={Link}
                            to={item.path}
                            textTransform={index === 0 && "uppercase"}
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"1.4rem"}
                            py={index > 0 ? 1 : 5}
                            pb={index === 0 && 2}
                            sx={{
                                transition: "all 0.2s",
                                fontSize: index > 0 ? "1rem" : "1.4rem",
                                ":hover": {
                                    color: "primary.main"
                                }
                            }}
                            key={index}
                        >
                            {item.title}
                        </Box>
                    )}
                </Stack>
            )}
        </Stack>
    );
}

export default HomeCategoriesDesktop;