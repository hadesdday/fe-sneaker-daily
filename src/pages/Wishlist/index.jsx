import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import WishListItem from '../../compositions/wishlist-item';
import { COLOR_TABLE } from '../../constants/dummy-data';

function Wishlist(props) {
    //demo data only
    const dummyData = [
        {
            productId: 1,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 1",
            price: 1000000,
            saleOff: 0.2,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
        {
            productId: 2,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 2",
            price: 1000000,
            saleOff: 0,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
        {
            productId: 3,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 3",
            price: 1000000,
            saleOff: 0,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
    ]

    return (
        <Box px={{ lg: 23 }}>
            <Typography
                variant='h4'
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                my={5}
            >
                danh mục yêu thích của bạn
            </Typography>
            <Box borderBottom={"2px solid"} >
                <Typography fontWeight={"bold"} color={"secondary.400"} pb={1}>{dummyData.length} sản phẩm</Typography>
            </Box>
            <Box>
                {dummyData.map((item, index) =>
                    <WishListItem key={index} isLastIndex={index === dummyData.length - 1} item={item} />
                )}
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        width: { xs: "45%", sm: "30%", md: "20%" },
                        mt: 5,
                    }}>
                    xóa hết
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        width: { xs: "45%", sm: "30%", md: "20%" },
                        mt: 5,
                    }}>
                    tiếp tục mua hàng
                </Button>
            </Stack>
        </Box>
    );
}

export default Wishlist;