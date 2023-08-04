import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartItem } from '../../compositions';
import { COLOR_TABLE } from '../../constants/dummy-data';
import { selectCartItems } from '../../store/cart/cart.selector';
import { getMoneyFormat } from '../../utils';

function CartPage(props) {
    //demo data only ( get from api when backend implemented )
    const recommendedItems = [
        {
            productId: 1,
            name: "Baseball Cap - Be Positive",
            color: COLOR_TABLE[0],
            price: 85000,
            saleOff: 0,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ABC004_1-500x500.jpg"
        },
        {
            productId: 2,
            name: "Blank Shoelaces",
            color: COLOR_TABLE[1],
            price: 35000,
            saleOff: 0.1,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ALB017_1_Fix-500x500.jpeg"
        },
        {
            productId: 3,
            name: "Blank Shoelaces 3",
            color: COLOR_TABLE[2],
            price: 35000,
            saleOff: 0.1,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ALB017_1_Fix-500x500.jpeg"
        },
        {
            productId: 4,
            name: "Blank Shoelaces 4",
            color: COLOR_TABLE[3],
            price: 35000,
            saleOff: 0,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ALB017_1_Fix-500x500.jpeg"
        },
        {
            productId: 5,
            name: "Blank Shoelaces 5",
            color: COLOR_TABLE[3],
            price: 35000,
            saleOff: 0.1,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ALB017_1_Fix-500x500.jpeg"
        },
        {
            productId: 6,
            name: "Blank Shoelaces 6",
            color: COLOR_TABLE[6],
            price: 35000,
            saleOff: 0.1,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_ALB017_1_Fix-500x500.jpeg"
        },
    ]

    const cartItems = useSelector(selectCartItems);

    function handleAddToWishlist(productId) {
        console.log("add to wishlist", productId);
    }

    return (
        <Grid container px={{ xs: 1, lg: 24 }}>
            <Grid item xs={12} sm={12} md={8} pt={5} pr={5}>
                <Typography
                    variant='h6'
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    pb={2}
                    borderBottom={"2px solid"}>
                    bạn có cần thêm?
                </Typography>
                <Box pt={2} sx={{
                    ".swiper-button-prev,.swiper-button-next": {
                        transition: "color 0.2s ease-in-out",
                        color: "secondary.400",
                        ":hover": {
                            color: "black"
                        }
                    }
                }}>
                    <Swiper
                        slidesPerView={2}
                        navigation={true}
                        spaceBetween={20}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                        loop={true}
                        modules={[Navigation, Autoplay]}
                    >
                        {recommendedItems.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Stack direction={"row"} spacing={2}>
                                    <Box
                                        component={Link}
                                        to={`/product-detail/${item.productId}`}
                                    >
                                        <Box
                                            component={"img"}
                                            src={item.imageUrl}
                                            alt={item.name}
                                            width={"140px"}
                                            height={"100%"}
                                            sx={{ objectFit: "cover" }} />
                                    </Box>
                                    <Box position={"relative"}>
                                        <Box
                                            component={Link}
                                            to={`/product-detail/${item.productId}`}
                                        >
                                            <Typography about="typographyLink" fontWeight={"bold"}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Typography fontWeight={"bold"} pt={"3px"} pb={2}>{item.color.label}</Typography>
                                        <Typography color={"primary.main"} fontWeight={"bold"}>
                                            {getMoneyFormat(item.price)}
                                        </Typography>
                                        <Button
                                            variant='contained'
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                fontWeight: "bold",
                                                textTransform: "uppercase"
                                            }}>
                                            thêm
                                        </Button>
                                    </Box>
                                </Stack>
                            </SwiperSlide>
                        )}
                    </Swiper>
                </Box>

                <Typography
                    variant='h5'
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    py={1}
                    bgcolor={"secondary.500"}
                    mt={8}
                    pl={2}
                >
                    giỏ hàng
                </Typography>
                {cartItems.map((item, index) =>
                    <CartItem
                        key={index}
                        item={item}
                        handleAddToWishlist={handleAddToWishlist}
                        isLastIndex={index === cartItems.length - 1}
                        //demo only
                        liked={index % 2 === 0}
                    />
                )}
            </Grid>
            <Grid item xs={12} sm={12} md={4} bgcolor={"secondary.500"}>b</Grid>
        </Grid >
    );
}

export default CartPage;