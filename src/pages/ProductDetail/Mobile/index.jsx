import { Circle } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { Box, Button, Collapse, Dialog, DialogContent, Grid, IconButton, Stack, Typography, Zoom } from '@mui/material';
import { useClickAway } from '@uidotdev/usehooks';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SizeChartImage from "../../../assets/common/SizeChart.jpg";
import { PdProductCarousels } from '../../../compositions';
import { POLICIES, WARRANTY_CONTENT } from '../../../constants/dummy-data';
import { generateArrayByMax } from '../../../utils/array';
import { getMoneyFormat } from '../../../utils/currency';

function ProductDetailsMobile({ product, relevantProducts, seenProducts, mainImage, setMainImage, isZoomIn, setIsZoomIn,
    currentColor, setCurrentColor, imagesByColor, selectedSize, setSelectedSize, quantity, availableQuantity,
    selectedQuantity, setSelectedQuantity
}) {
    const { category, productLine, name, style, id, status, price, color, images, liked, description, saleOff } = product;

    return (
        <Box display={{ xs: "block", md: "none" }} px={1}>
            <Box component={"img"} src={mainImage.url} alt={name} width={"100%"} />
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
            <Typography
                variant={"h4"}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                mt={2}
            >
                {name} - {currentColor.label} - {style}
            </Typography>
            <Stack direction={"row"} justifyContent={"space-between"} py={4}>
                <Typography>Mã sản phẩm:
                    <Typography component={"span"} fontWeight={"bold"}> {id}</Typography>
                </Typography>
                <Typography>Trạng thái:
                    <Typography component={"span"} fontWeight={"bold"}> {status}</Typography>
                </Typography>
            </Stack>
            <Box
                borderBottom={"2px dashed"}
                borderColor={"secondary.600"}
            >
                <Typography
                    variant='h6'
                    color={"primary.main"}
                    fontWeight={"bold"}
                    pb={3}
                >
                    {saleOff > 0 ?
                        <Fragment>
                            {getMoneyFormat(price - (price * saleOff))} VND
                            <Typography
                                component={"span"} fontWeight={"bold"} color={"secondary.400"} ml={3}
                                sx={{ textDecoration: "line-through" }}>
                                {getMoneyFormat(price)} VND</Typography>
                        </Fragment>
                        :
                        getMoneyFormat(price) + "VND"
                    }
                </Typography>
            </Box>
            <Box
                borderBottom={"2px dashed"}
                borderColor={"secondary.600"}
            >
                <Typography variant='body1' dangerouslySetInnerHTML={{ __html: description }}>
                </Typography>
            </Box>
        </Box>
    );
}

export default ProductDetailsMobile;