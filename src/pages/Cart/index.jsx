import { Box, Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CustomTextField from '../../components/textfield';
import { CartItem } from '../../compositions';
import { COLOR_TABLE } from '../../constants/dummy-data';
import { removeFromCartStart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { getMoneyFormat } from '../../utils';

function CartPage(props) {
    const dispatch = useDispatch();

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

    function handleDeleteCartItem(productId) {
        dispatch(removeFromCartStart(productId));
    }

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            discountCode: "",
        },
    });

    async function handleSubmitDiscountForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("call api here");
                console.log(data);
                resolve(data);
            }, 1000);
        })
    }

    return (
        <>
            {
                cartItems.length > 0 ?
                    <Grid container px={{ xs: 1, lg: 24 }}>
                        <Grid item xs={12} sm={12} md={8} pt={5} pr={{ xs: 0, md: 5 }}>
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
                                    breakpoints={{
                                        100: {
                                            slidesPerView: 1,
                                        },
                                        600: {
                                            slidesPerView: 2,
                                        }
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
                            {
                                cartItems.map((item, index) =>
                                    <CartItem
                                        key={index}
                                        item={item}
                                        handleAddToWishlist={handleAddToWishlist}
                                        handleDeleteCartItem={handleDeleteCartItem}
                                        isLastIndex={index === cartItems.length - 1}
                                        //demo only
                                        liked={index % 2 === 0}
                                    />
                                )
                            }
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} pt={4} >
                            <Box bgcolor={"secondary.500"} p={2}>
                                <Typography
                                    variant='h5'
                                    fontWeight={"bold"}
                                    textTransform={"uppercase"}
                                    borderBottom={"2px solid"}
                                    pb={1}
                                >
                                    đơn hàng
                                </Typography>
                                <Typography
                                    fontWeight={"bold"}
                                    textTransform={"uppercase"}
                                    mt={6}
                                >
                                    nhập mã khuyến mãi
                                </Typography>
                                <Box
                                    component={"form"}
                                    onSubmit={handleSubmit(handleSubmitDiscountForm)}
                                    borderBottom={"2px dashed"}
                                    pb={2}
                                    borderColor={"secondary.400"}
                                >
                                    <Stack direction={"row"} py={2}>
                                        <Box width={{ xs: "60%", sm: "75%", md: "49%", lg: "auto" }}>
                                            <CustomTextField
                                                name='discountCode'
                                                control={control}
                                                label="Mã khuyến mãi"
                                                inputProps={{
                                                    style: {
                                                        textTransform: "uppercase"
                                                    }
                                                }}
                                                sx={{
                                                    bgcolor: "white",
                                                }}
                                            />
                                        </Box>

                                        <Button
                                            variant='contained'
                                            type={"submit"}
                                            disabled={isSubmitting}
                                            startIcon={
                                                isSubmitting && (
                                                    <CircularProgress color="inherit" size={"1em"} />
                                                )
                                            }
                                            sx={{
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                fontSize: "1rem",
                                                width: { xs: "40%", sm: "25%", md: "51%" },
                                            }}>
                                            áp dụng
                                        </Button>
                                    </Stack>
                                    {!isSubmitting &&
                                        <Typography color={"primary.main"} fontStyle={"italic"}>(Demo only)Mã khuyến mãi không hợp lệ do sai cú pháp hoặc quá thời hạn áp dụng.</Typography>
                                    }
                                </Box>
                                <Box py={4} borderBottom={"2px dashed"} borderColor={"secondary.700"}>
                                    <Stack direction={"row"} justifyContent={"space-between"} pb={1}>
                                        <Typography
                                            fontWeight={"bold"}
                                            color={"secondary.700"}
                                        >
                                            Đơn hàng
                                        </Typography>
                                        <Typography
                                            fontWeight={"bold"}
                                            color={"secondary.700"}
                                        >
                                            {getMoneyFormat(9999999)}
                                        </Typography>
                                    </Stack>
                                    <Stack direction={"row"} justifyContent={"space-between"}>
                                        <Typography
                                            fontWeight={"bold"}
                                            color={"secondary.700"}
                                        >
                                            Giảm
                                        </Typography>
                                        <Typography
                                            color={"secondary.700"}
                                        >
                                            {getMoneyFormat(222222)}
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Stack direction={"row"} justifyContent={"space-between"} py={4}>
                                    <Typography
                                        fontWeight={"bold"}
                                        textTransform={"uppercase"}
                                    >
                                        Tạm tính
                                    </Typography>
                                    <Typography fontWeight={"bold"}>
                                        {getMoneyFormat(222222)}
                                    </Typography>
                                </Stack>
                                <Button variant='contained' fullWidth>tiếp tục thanh toán</Button>
                            </Box>
                        </Grid>
                    </Grid>
                    :
                    <Box textAlign={"center"} px={20}>
                        <Typography
                            variant='h4'
                            borderBottom={"2px solid"}
                            py={4}
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                        >giỏ hàng của bạn</Typography>
                        <Typography py={6}>Bạn đang không có sản phẩm nào trong giỏ hàng!</Typography>
                        <Box component={Link} to={"/product-list?gender=all"} color={"white"}>
                            <Button
                                variant='contained'
                                sx={{
                                    fontWeight: "bold",
                                    textTransform: "uppercase"
                                }}>
                                quay lại mua hàng
                            </Button>
                        </Box>
                    </Box>
            }
        </>
    );
}

export default CartPage;