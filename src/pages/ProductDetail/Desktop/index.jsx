import CloseIcon from '@mui/icons-material/Close';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import { Box, Button, Dialog, DialogContent, Grid, IconButton, Stack, Typography, Zoom } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMoneyFormat } from '../../../utils/currency';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { generateArrayByMax } from '../../../utils/array';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductDetailsDesktop({ product, relevantProducts, seenProducts, mainImage, setMainImage, isZoomIn, setIsZoomIn,
    currentColor, setCurrentColor, imagesByColor, selectedSize, setSelectedSize, quantity, availableQuantity,
    selectedQuantity, setSelectedQuantity
}) {
    const { category, productLine, name, style, id, status, price, color, images, liked } = product;

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
                    <Dialog open={isZoomIn} fullScreen onClose={handleCloseDialog}>
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
                                                    src={item.url}
                                                    loading='lazy'
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
                <Grid item md={6}>
                    <Typography variant='h4' fontWeight={"bold"}>
                        {name} - {style} - {currentColor.label}
                    </Typography>
                    <Stack direction="row" justifyContent={"space-between"} py={4}>
                        <Box>
                            <Typography>Mã sản phẩm:
                                <Typography component={"span"} fontWeight={"bold"}> {id}</Typography>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography>Tình trạng:
                                <Typography component={"span"} fontWeight={"bold"}> {status}</Typography>
                            </Typography>
                        </Box>
                    </Stack>
                    <Box
                        borderBottom={"2px dashed"}
                        borderColor={"secondary.300"}
                    >
                        <Typography
                            variant='h6'
                            color={"primary.main"}
                            fontWeight={"bold"}
                            pb={4}
                        >{getMoneyFormat(price)} VND</Typography>
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
                                >
                                    <Box position={"absolute"} top={"100%"} left={0} border={"1px solid"}>
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
                                                        }
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
                                >
                                    <Box position={"absolute"} top={"100%"} left={0} border={"1px solid"}>
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

                </Grid>
            </Grid>
        </Box>
    );
}

export default ProductDetailsDesktop;