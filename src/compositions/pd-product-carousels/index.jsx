import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import React, { Fragment, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMoneyFormat } from '../../utils/currency';

function PdProductCarousels({ title, products }) {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <Fragment>
            <Stack direction={"row"} justifyContent={"center"} pb={4} pt={10}>
                <Typography
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    fontSize={"2rem"}
                >
                    {title}
                </Typography>
            </Stack>
            <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={"center"}
            >
                <IconButton onClick={handlePrev} >
                    <ArrowBackIosIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
                <Swiper
                    slidesPerView={4}
                    navigation={false}
                    spaceBetween={7}
                    modules={[Navigation]}
                    ref={sliderRef}
                >
                    {products.map((item, index) =>
                        <SwiperSlide
                            key={index}
                            style={{ cursor: "pointer" }}
                        >
                            <Box component={Link} to={`/product-detail/${item.id}`}>
                                <Box
                                    component={"img"}
                                    src={item.imageUrl} loading='lazy'
                                    width={"100%"}
                                    sx={{ objectFit: "cover" }} />
                            </Box>
                            {item.newArrival &&
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: 0,
                                        width: "50%",
                                        top: "5%",
                                        bgcolor: "secondary.100",
                                        color: "white",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                    }}
                                >
                                    New Arrival
                                </Box>
                            }
                            <Box
                                component={Link}
                                to={`/product-detail/${item.id}`}
                                color={"black"}
                                fontWeight={"bold"}
                                sx={{
                                    transition: "all 0.2s",
                                    textAlign: "center",
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                            >
                                {item.name}
                            </Box>
                            <Typography py={"5px"}>{item.color}</Typography>
                            <Stack direction={"row"} justifyContent={"center"}>
                                {item.saleOff > 0 ?
                                    <Fragment>
                                        <Typography width={"50%"} fontWeight={"bold"}>
                                            {getMoneyFormat(item.price)} VND
                                        </Typography>
                                        <Typography width={"50%"} sx={{ textDecoration: "line-through", color: "secondary.400" }}>
                                            {getMoneyFormat(item.price - (item.price * item.saleOff))} VND
                                        </Typography>
                                    </Fragment>
                                    :
                                    <Typography fontWeight={"bold"}>{getMoneyFormat(item.price)} VND</Typography>
                                }
                            </Stack>
                        </SwiperSlide>
                    )}
                </Swiper>
                <IconButton onClick={handleNext} >
                    <ArrowForwardIosIcon sx={{ fontSize: "2rem" }} />
                </IconButton>
            </Stack>
        </Fragment>
    );
}

export { PdProductCarousels };