import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box, Button, Grid, Stack, Typography, Zoom } from '@mui/material';
import { useClickAway } from '@uidotdev/usehooks';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { COLOR_TABLE } from '../../constants/dummy-data';
import { generateArrayByMax, getMoneyFormat } from '../../utils';

function CartItem({ item, isLastIndex, indexing, handleAddToWishlist, liked, handleDeleteCartItem, handleUpdateCartItemInfo }) {
    const { productId, color, size, quantity } = item;

    const [currentColor, setCurrentColor] = useState(COLOR_TABLE.find(colorItem => colorItem.value === color));

    //fixed quantity by color(demo data  only)
    const [tempQuantity, setTempQuantity] = useState(
        [{
            code: 35,
            quantity: 10,
            color: "navy"
        },
        {
            code: 36,
            quantity: 0,
            color: "navy"
        },
        {
            code: 37,
            quantity: 0,
            color: "navy"
        },
        {
            code: 38,
            quantity: 10,
            color: "navy"
        },
        {
            code: 39,
            quantity: 10,
            color: "navy"
        },
        {
            code: 40,
            quantity: 10,
            color: "navy"
        },
        {
            code: 41,
            quantity: 10,
            color: "navy"
        },
        {
            code: 42,
            quantity: 10,
            color: "navy"
        },
        {
            code: 43,
            quantity: 10,
            color: "navy"
        },
        {
            code: 44,
            quantity: 10,
            color: "navy"
        },
        {
            code: 45,
            quantity: 10,
            color: "navy"
        },
        {
            code: 46,
            quantity: 10,
            color: "navy"
        }]
    );

    const [showSizeTable, setShowSizeTable] = useState(false);
    function toggleShowSizeTable() {
        setShowSizeTable(!showSizeTable);
    }

    const [showQuantityTable, setShowQuantityTable] = useState(false);
    function toggleShowQuantityTable() {
        setShowQuantityTable(!showQuantityTable);
    }

    function handleChangeColor(color) {
        setCurrentColor(color);
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


    const [selectedSize, setSelectedSize] = useState(size);
    const [selectedQuantity, setSelectedQuantity] = useState(quantity);

    //demo only (when api is implemented, call api and set quantity here)
    const foundQuantity = tempQuantity.find(item => item.code === selectedSize && item.color === currentColor.value);
    const [availableQuantity, setAvailableQuantity] = useState(foundQuantity ? foundQuantity.quantity : 0);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        console.log("fetch available quantity by selected size here");
        return () => {
            controller.abort();
        }
    }, [selectedSize]);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        console.log("fetch available size by color here");

        return () => {
            controller.abort();
        }
    }, [currentColor]);

    useEffect(() => {
        const controller = new AbortController();
        handleChangeInfo();
        return () => {
            controller.abort();
        }
    }, [selectedSize, currentColor, selectedQuantity])

    function getFinalPrice() {
        if (item.saleOff > 0) {
            return item.price - (item.price * item.saleOff);
        }
        return item.price;
    }

    function onAddToWishlist() {
        handleAddToWishlist(productId);
    }

    function onDeleteCartItem() {
        handleDeleteCartItem(indexing);
        toast.success("Xóa sản phẩm thành công !");
    }

    const colors = [
        COLOR_TABLE.find(color => color.value === "navy"),
        COLOR_TABLE.find(color => color.value === "bluewash"),
    ];

    function handleChangeInfo() {
        const updatedItem = {
            productId: productId,
            color: currentColor.value,
            size: selectedSize,
            quantity: selectedQuantity
        };
        handleUpdateCartItemInfo(updatedItem, indexing);
    }

    return (
        <Grid container borderBottom={!isLastIndex ? "2px dashed" : "2px solid"} py={4}>
            <Grid item xs={5} sm={3} md={3} width={{ xs: "28vw", sm: "100%" }} height={{ xs: "28vw", sm: "100%" }}>
                <Box component={Link} to={`/product-detail/${item.productId}`}>
                    <Box component={"img"}
                        src={"https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg"}
                        alt={"Shoes1"}
                        width={"100%"}
                        height={"100%"}
                        px={"5px"}
                        sx={{ objectFit: "cover" }}
                    />
                </Box>
            </Grid>
            <Grid item xs={7} sm={9} md={6} pl={2}>
                <Box component={Link} to={`/product-detail/${item.productId}`}>
                    <Typography
                        fontSize={"1.1rem"}
                        fontWeight={"bold"}
                        about='typographyLink'
                    >
                        Shoes {productId} - High Top - Navy
                    </Typography>
                </Box>
                <Typography
                    fontWeight={"bold"}
                    color={"secondary.400"}
                    py={3}
                    fontSize={"1.1rem"}
                >
                    Giá: <Typography component={"span"}>
                        {getMoneyFormat(123456)}
                    </Typography>
                </Typography>

                <Stack
                    direction={"row"}
                    spacing={3}
                >
                    {colors.map((colorItem, index) =>
                        <Box
                            bgcolor={colorItem.color}
                            width={"30px"}
                            height={"30px"}
                            border={"1px solid"}
                            borderColor={"secondary.300"}
                            boxShadow={currentColor === colorItem && "0 0 0 1px"}
                            onClick={() => handleChangeColor(colorItem)}
                            key={index}
                        />
                    )}
                </Stack>

                <Stack direction={"row"} spacing={4} pt={3} width={"90%"}>
                    <Box width={"50%"}>
                        <Typography
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            fontSize={"1rem"}
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
                                    left={0}
                                    right={0}
                                    border={"1px solid"}
                                    zIndex={1}
                                    bgcolor={"white"}
                                    width={{ xs: 185, md: 200 }}
                                >
                                    <Grid container p={1}>
                                        {tempQuantity.map((item, index) =>
                                            <Grid item md={3}
                                                width={55}
                                                height={55}
                                                border={"1px solid"}
                                                bgcolor={selectedSize === item.code && "secondary.500"}
                                                sx={{
                                                    transition: "all 0.2s",
                                                    cursor: "pointer",
                                                    ":hover": {
                                                        bgcolor: "secondary.500"
                                                    },
                                                    opacity: item.quantity > 0 ? 1 : 0.5,
                                                    pointerEvents: item.quantity > 0 ? "all" : "none",
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
                            fontSize={"1rem"}
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
                                    border={"1px solid"}
                                    zIndex={1}
                                    left={{ sm: 0 }}
                                    right={{ xs: "1%" }}
                                    bgcolor={"white"}
                                    width={{ xs: 185, md: 200 }}
                                >
                                    <Grid container p={1}>
                                        {generateArrayByMax(12).map((item, index) =>
                                            <Grid item md={3}
                                                width={55}
                                                height={55}
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
            </Grid >
            <Grid item xs={12} sm={12} md={3} textAlign={"end"}>
                <Stack
                    direction={{ xs: "row-reverse", md: "column" }}
                    justifyContent={{ xs: "space-between", md: "end" }}
                    py={{ xs: 2, md: 0 }}
                >
                    <Typography
                        fontSize={"1.2rem"}
                        fontWeight={"bold"}
                        color={"primary.main"}
                    >
                        {getMoneyFormat(selectedQuantity * 1234756)}
                    </Typography>
                    <Typography
                        fontStyle={"italic"}
                        color={"primary.main"}
                        fontWeight={600}
                        fontSize={{ xs: "larger", md: "normal" }}
                        py={{ md: 4 }}
                    >
                        {availableQuantity > 0 ? "Còn hàng" : "Tạm thời hết hàng"}
                    </Typography>
                </Stack>
                <Stack
                    direction={{ xs: "row-reverse", md: "column" }}
                    justifyContent={"end"}
                    alignItems={"end"}>
                    <Button variant='outlined' sx={{
                        borderColor: "black",
                        width: 125,
                        height: 40,
                        py: 1,
                        transition: "all 0.2s",
                        mr: { xs: 1, md: 0 },
                        ":hover":
                        {
                            borderColor: "black",
                            opacity: 0.8
                        },
                    }}
                        onClick={onAddToWishlist}
                    >
                        {liked ? <FavoriteIcon fontSize='medium' /> : <FavoriteBorderIcon fontSize='medium' />}
                    </Button>
                    <Button variant='outlined' sx={{
                        bgcolor: "black",
                        color: "white",
                        border: "none",
                        width: "125px",
                        height: "40px",
                        py: 1,
                        transition: "all 0.2s",
                        mt: { xs: 1, md: 2 },
                        mr: { xs: 3, md: 0 },
                        ":hover": {
                            bgcolor: "black",
                            opacity: 0.8,
                            border: "none",
                        }
                    }}
                        onClick={onDeleteCartItem}
                    >
                        <DeleteOutlineIcon fontSize='medium' />
                    </Button>
                </Stack>

            </Grid>
        </Grid >
    );
}

export default CartItem;