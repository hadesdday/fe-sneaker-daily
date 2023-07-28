import { Circle } from '@mui/icons-material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Collapse, Grid, Stack, Typography, Zoom } from '@mui/material';
import { useClickAway } from '@uidotdev/usehooks';
import React, { Fragment, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
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
    const { category, productLine, name, style, id, status, price, color, images, liked, description, detailsDescription, saleOff } = product;
    function handleCloseDialog() {
        setIsZoomIn(false);
    }

    function handleChangeColor(color) {
        setCurrentColor(color);
    }

    const [showSizeTable, setShowSizeTable] = React.useState(false);
    function toggleShowSizeTable() {
        setShowSizeTable(!showSizeTable);
    }

    const [showQuantityTable, setShowQuantityTable] = React.useState(false);
    function toggleShowQuantityTable() {
        setShowQuantityTable(!showQuantityTable);
    }

    function handleChangeSize(size) {
        setSelectedSize(size)
        toggleShowSizeTable();
    }

    function handleChangeQuantity(quantity) {
        setSelectedQuantity(quantity);
        toggleShowQuantityTable();
    }

    const quantityBoxRef = useClickAway(() => {
        setShowQuantityTable(false);
    })

    const sizeBoxRef = useClickAway(() => {
        setShowSizeTable(false);
    })

    const [showDescription, setShowDescription] = useState(false);
    const [showPolicy, setShowPolicy] = useState(false);
    const [showWarranty, setShowWarranty] = useState(false);

    function toggleShowDescription() {
        setShowDescription(!showDescription);
    }

    function toggleShowPolicy() {
        setShowPolicy(!showPolicy);
    }

    function toggleShowWarranty() {
        setShowWarranty(!showWarranty);
    }

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
                            {getMoneyFormat(price - (price * saleOff))}
                            <Typography
                                component={"span"} fontWeight={"bold"} color={"secondary.400"} ml={3}
                                sx={{ textDecoration: "line-through" }}>
                                {getMoneyFormat(price)}</Typography>
                        </Fragment>
                        :
                        getMoneyFormat(price)
                    }
                </Typography>
            </Box>
            <Box
                borderBottom={"2px dashed"}
                borderColor={"secondary.600"}
            >
                <Typography variant='body1' py={4} dangerouslySetInnerHTML={{ __html: detailsDescription }}>
                </Typography>
            </Box>
            <Stack
                direction={"row"}
                spacing={3}
                py={4}
                borderBottom={"2px dashed"}
                borderColor={"secondary.300"}
            >
                {color.map((item, index) =>
                    <Box
                        bgcolor={item.color}
                        width={"30px"}
                        height={"30px"}
                        border={"1px solid"}
                        borderColor={"secondary.300"}
                        boxShadow={currentColor === item && "0 0 0 1px"}
                        onClick={() => handleChangeColor(item)}
                        key={index}
                    />
                )}
            </Stack>
            <Stack direction={"row"} spacing={4} pt={3}>
                <Box width={"50%"}>
                    <Typography
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        fontSize={"1.4rem"}
                    >
                        size
                    </Typography>
                    <Box sx={{ position: "relative" }}>
                        <Stack
                            direction={"row"}
                            border={"1px solid"}
                            justifyContent={"space-between"}
                            my={1}
                            position={"relative"}
                            sx={{ cursor: "pointer" }}
                            onClick={toggleShowSizeTable}
                        >
                            <Typography p={1} ml={1} fontWeight={"bold"}>{selectedSize}</Typography>
                            <KeyboardArrowDownIcon sx={{ mt: 1, mr: 1, fontWeight: "bold" }} />
                        </Stack>
                        <Zoom
                            in={showSizeTable}
                            unmountOnExit
                            mountOnEnter
                            ref={sizeBoxRef}
                        >
                            <Box
                                position={"absolute"}
                                top={"100%"}
                                left={0} border={"1px solid"}
                                zIndex={1}
                                bgcolor={"white"}>
                                <Grid container p={1}>
                                    {quantity.map((item, index) =>
                                        <Grid item md={3}
                                            width={50}
                                            height={50}
                                            border={"1px solid"}
                                            bgcolor={selectedSize === item.code && "secondary.500"}
                                            sx={{
                                                transition: "all 0.2s",
                                                cursor: "pointer",
                                                ":hover": {
                                                    bgcolor: "secondary.500"
                                                },
                                                opacity: item.quantity > 0 ? 1 : 0.5,
                                                pointerEvents: item.quantity > 0 ? "all" : "none"
                                            }}
                                            onClick={() => handleChangeSize(item.code)}
                                            key={index}
                                        >
                                            <Stack direction={"column"}
                                                border={selectedSize === item.code && "2px solid"}
                                                borderRadius={selectedSize === item.code && "5px"}
                                                height={"95%"}
                                                m={"1px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                fontWeight={selectedSize === item.code && "bold"}
                                            >
                                                {item.code}
                                            </Stack>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Zoom>
                    </Box>
                </Box>
                <Box width={"50%"}>
                    <Typography
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        fontSize={"1.4rem"}
                    >
                        số lượng
                    </Typography>
                    <Box sx={{ position: "relative" }}>
                        <Stack
                            direction={"row"}
                            border={"1px solid"}
                            justifyContent={"space-between"}
                            my={1}
                            position={"relative"}
                            sx={{ cursor: "pointer" }}
                            onClick={toggleShowQuantityTable}
                        >
                            <Typography p={1} ml={1} fontWeight={"bold"}>{selectedQuantity}</Typography>
                            <KeyboardArrowDownIcon sx={{ mt: 1, mr: 1, fontWeight: "bold" }} />
                        </Stack>
                        <Zoom
                            in={showQuantityTable}
                            unmountOnExit
                            mountOnEnter
                            ref={quantityBoxRef}
                        >
                            <Box
                                position={"absolute"}
                                top={"100%"}
                                left={0}
                                border={"1px solid"}
                                zIndex={1}
                                bgcolor={"white"}>
                                <Grid container p={1}>
                                    {generateArrayByMax(12).map((item, index) =>
                                        <Grid item md={3}
                                            width={50}
                                            height={50}
                                            border={"1px solid"}
                                            bgcolor={selectedQuantity === item && "secondary.500"}
                                            sx={{
                                                transition: "all 0.2s",
                                                cursor: "pointer",
                                                ":hover": {
                                                    bgcolor: "secondary.500"
                                                }
                                            }}
                                            onClick={() => handleChangeQuantity(item)}
                                            key={index}
                                        >
                                            <Stack direction={"column"}
                                                border={selectedQuantity === item && "2px solid"}
                                                borderRadius={selectedQuantity === item && "5px"}
                                                height={"95%"}
                                                m={"1px"}
                                                justifyContent={"center"}
                                                alignItems={"center"}
                                                fontWeight={selectedQuantity === item && "bold"}
                                            >
                                                {item}
                                            </Stack>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Zoom>
                    </Box>
                </Box>
            </Stack>
            <Stack direction={"row"} py={3}>
                <Button
                    variant='contained'
                    sx={{
                        fontWeight: "bold",
                        width: "85%",
                        p: 2,
                        bgcolor: "black",
                        color: "white",
                        fontSize: "1.2rem",
                        transition: "all 0.2s",
                        ":hover": {
                            bgcolor: "black",
                            opacity: 0.6
                        }
                    }}
                >
                    thêm vào giỏ hàng
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        fontWeight: "bold",
                        ml: 2,
                        px: 4,
                        bgcolor: "black",
                        color: "primary.main",
                        transition: "all 0.2s",
                        ":hover": {
                            bgcolor: "black",
                            opacity: 0.6
                        }
                    }}
                >
                    {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
            </Stack>
            <Stack direction={"row"}>
                <Button
                    variant='contained'
                    sx={{
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        width: "100%",
                        py: 2
                    }}
                >thanh toán</Button>
            </Stack>
            <Stack
                direction={"row"}
                sx={{ cursor: "pointer" }}
                color={showDescription ? "primary.main" : "black"}
                onClick={toggleShowDescription}
            >
                <Typography
                    variant='h5'
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    py={4}
                    borderBottom={"2px dashed"}
                    borderColor={"black"}
                    width={"100%"}
                >
                    thông tin sản phẩm
                    {showDescription ?
                        <ExpandLessIcon />
                        : <ExpandMoreIcon />}
                </Typography>
            </Stack>
            <Collapse in={showDescription} mountOnEnter unmountOnExit>
                <Box py={3} borderBottom={"2px dashed"}>
                    <Typography variant='body1' dangerouslySetInnerHTML={{ __html: description }}>
                    </Typography>
                    <Box component={"img"} src={SizeChartImage} mt={2} width={"100%"} />
                </Box>
            </Collapse>
            <Stack
                direction={"row"}
                sx={{ cursor: "pointer" }}
                color={showPolicy ? "primary.main" : "black"}
                onClick={toggleShowPolicy}
            >
                <Typography
                    variant='h5'
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    py={4}
                    borderBottom={"2px dashed"}
                    borderColor={"black"}
                    width={"100%"}
                >
                    quy định đổi sản phẩm
                    {showDescription ?
                        <ExpandLessIcon />
                        : <ExpandMoreIcon />}
                </Typography>
            </Stack>
            <Collapse in={showPolicy} mountOnEnter unmountOnExit>
                <Box py={3} borderBottom={"2px dashed"}>
                    {POLICIES.map((item, index) =>
                        <Stack direction={"row"} key={index}>
                            <Circle sx={{ fontSize: "10px", mr: 1, mt: 1 }} />
                            <Typography variant='body1' dangerouslySetInnerHTML={{ __html: item }}>
                            </Typography>
                        </Stack>
                    )}
                </Box>
            </Collapse>
            <Stack
                direction={"row"}
                sx={{ cursor: "pointer" }}
                color={showWarranty ? "primary.main" : "black"}
                onClick={toggleShowWarranty}
            >
                <Typography
                    variant='h5'
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    py={4}
                    borderBottom={"2px dashed"}
                    borderColor={"black"}
                    width={"100%"}
                >
                    bảo hành thế nào ?
                    {showWarranty ?
                        <ExpandLessIcon />
                        : <ExpandMoreIcon />}
                </Typography>
            </Stack>
            <Collapse in={showWarranty} mountOnEnter unmountOnExit>
                <Box py={3} borderBottom={"2px dashed"}>
                    <Stack direction={"row"}>
                        <Typography variant='body1' dangerouslySetInnerHTML={{ __html: WARRANTY_CONTENT }}>
                        </Typography>
                    </Stack>
                </Box>
            </Collapse>
            <PdProductCarousels title={"sản phẩm liên quan"} products={relevantProducts} />
            <PdProductCarousels title={"sản phẩm đã xem"} products={seenProducts} />
        </Box>
    );
}

export default ProductDetailsMobile;