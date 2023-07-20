import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { Box, Dialog, DialogContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CloseIcon from '@mui/icons-material/Close';

function ProductDetailsDesktop({ product, relevantProducts, seenProducts, mainImage, setMainImage, isZoomIn, setIsZoomIn,
    currentColor, setCurrentColor }) {
    const { category, productLine, name, style, images } = product;
    const imagesByColor = images.filter(item => item.color === currentColor);

    return (
        <Box display={{ xs: "none", md: "block" }} px={{ md: 5, lg: 23 }}>
            <Stack direction={"row"} spacing={2} pt={4} alignItems={"center"} borderBottom={"2px solid"} pb={1}>
                <Box
                    component={Link}
                    to={`/product-list?gender=all&category=${category.value}`}
                    color={"black"}
                    sx={{
                        transition: "all 0.2s",
                        ":hover": {
                            color: "primary.main"
                        }
                    }}
                >
                    {category.name}
                </Box>
                <Box sx={{
                    height: 15,
                    borderRight: "2px solid",
                    borderColor: "secondary.300"
                }} />
                <Box
                    component={Link}
                    to={`/product-list?gender=all&productLine=${productLine.value}`}
                    color={"black"}
                    sx={{
                        transition: "all 0.2s",
                        ":hover": {
                            color: "primary.main"
                        }
                    }}
                >
                    {productLine.name}
                </Box>
                <Box sx={{
                    height: 15,
                    borderRight: "2px solid",
                    borderColor: "secondary.300"
                }} />
                <Typography
                    fontWeight={"bold"}
                >
                    {name} - {style}
                </Typography>
            </Stack>
            <Grid container pt={4} columnSpacing={5}>
                <Grid item md={6}>
                    {/* main image */}
                    <Box sx={{ position: "relative" }}>
                        <Box component={"img"} src={mainImage.url} loading='lazy' width={"100%"} />
                        <Stack
                            sx={{
                                position: "absolute",
                                right: 15,
                                bottom: 25,
                                opacity: 0.7,
                                border: "2px solid",
                                borderRadius: "50%",
                                p: "5px",
                                alignItems: "center",
                                transition: "all 0.2s",
                                cursor: "pointer",
                                ":hover": {
                                    opacity: 1,
                                }
                            }}>
                            <ZoomOutMapIcon sx={{ fontSize: "1.8rem" }} onClick={() => setIsZoomIn(true)} />
                        </Stack>
                    </Box>
                    <Box pt={2}
                        sx={{
                            "& .swiper-button-prev,.swiper-button-next": {
                                color: "black",
                                opacity: 0.5,
                                ":hover": {
                                    opacity: 1
                                }
                            }
                        }}
                    >
                        <Swiper
                            slidesPerView={4}
                            navigation={true}
                            spaceBetween={7}
                            modules={[Navigation]}
                        >
                            {imagesByColor.map((item, index) =>
                                <SwiperSlide
                                    key={index}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => setMainImage(item)}
                                >
                                    <Box
                                        component={"img"}
                                        src={item.url} loading='lazy'
                                        width={"100%"}
                                        sx={{ objectFit: "cover" }} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </Box>
                    <Dialog open={isZoomIn} fullScreen>
                        <DialogContent>
                            <Stack direction={"row"} alignItems={"center"}>
                                <Stack
                                    direction={"row"}
                                    width={"50%"}
                                    sx={{
                                        "& .swiper,.swiper-slide": {
                                            transform: "rotate(90deg)",
                                        },
                                        "& .swiper-button-prev,.swiper-button-next": {
                                            color: "black",
                                            opacity: 0.5,
                                            ":hover": {
                                                opacity: 1
                                            }
                                        },
                                        translate: "-30%",
                                    }}
                                >
                                    <Swiper
                                        slidesPerView={4}
                                        navigation={true}
                                        spaceBetween={7}
                                        mousewheel={true}
                                        freeMode={true}
                                        modules={[Mousewheel, Navigation, FreeMode]}
                                        allowTouchMove={false}
                                    >
                                        {imagesByColor.map((item, index) =>
                                            <SwiperSlide
                                                key={index}
                                                style={{ cursor: "pointer" }}
                                                onClick={() => setMainImage(item)}
                                            >
                                                <Box
                                                    component={"img"}
                                                    src={item.url} loading='lazy'
                                                    width={"100%"}
                                                    sx={{
                                                        objectFit: "cover",
                                                        transform: "rotate(180deg)"
                                                    }} />
                                            </SwiperSlide>
                                        )}
                                    </Swiper>
                                </Stack>
                                <Stack direction={"row"}
                                    sx={{
                                        translate: "-40%"
                                    }}
                                >
                                    <Box
                                        component={"img"}
                                        src={mainImage.url}
                                        loading='lazy'
                                        width={"100%"}
                                        sx={{ objectFit: "cover" }} />
                                </Stack>
                                <Box sx={{ position: "absolute", top: 10, right: 10 }} onClick={() => setIsZoomIn(false)}>
                                    <IconButton>
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            </Stack>
                        </DialogContent>
                    </Dialog>
                </Grid>
                <Grid item md={6}>details</Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetailsDesktop;