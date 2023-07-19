import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import DesktopProductListBanner from "../../../assets/banner/desktop_productlist.jpg";
import ProductListFilter from '../../../compositions/product-list-filter/Desktop';
import { gender, categories, statuses, styles, productLines, prices, collections, materials, fixedColors } from '../fixed-data';
import { getMoneyFormat } from '../../../utils';

function ProductListDesktop({ products, options, handleChangeFilterOptions, handleChangeGenderOptions }) {
    //options: selected options
    function isHaveOption(key, option) {
        return options[key].includes(option);
    }

    function handleBuyNow() {
        alert("clicked buy now")
    }

    function handleAddToWishlist() {
        alert("clicked add to wishlist")
    }

    return (
        <Grid container px={{ sm: 2, lg: 20 }} sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid item sm={3} pt={10}>
                <Stack
                    direction={"row"}
                    spacing={2}
                    borderBottom={"2px solid"}
                    py={3}
                    justifyContent={"center"}
                >
                    {gender.map((item, index) =>
                        <Typography
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            sx={{
                                transition: "all 0.2s",
                                borderRight: index < 2 && "1px solid #000",
                                pr: 2,
                                cursor: "pointer",
                                fontSize: { sm: "18px", lg: "20px" },
                                color: "black",
                                opacity: isHaveOption("gender", item.value) ? 1 : 0.5,
                                ":hover": {
                                    opacity: 1
                                }
                            }}
                            key={index}
                            onClick={() => handleChangeGenderOptions(item.value)}
                        >
                            {item.label}
                        </Typography>
                    )}
                </Stack>

                <Stack
                    direction={"column"}
                    spacing={1}
                    borderBottom={"2px solid"}
                    py={3}
                >
                    {categories.map((item, index) =>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            sx={{
                                transition: "all 0.2s",
                                px: 2,
                                py: 1,
                                cursor: "pointer",
                                bgcolor: isHaveOption("category", item.value) && "secondary.light",
                                ":hover": {
                                    bgcolor: "secondary.light"
                                }
                            }}
                            key={index}
                            onClick={() => handleChangeFilterOptions("category", item.value)}
                        >
                            <Typography
                                fontWeight={isHaveOption("category", item.value) && "bold"}
                            >
                                {item.label}
                            </Typography>
                            {isHaveOption("category", item.value) && <ClearIcon />}
                        </Stack>
                    )}
                </Stack>

                <ProductListFilter
                    mapKey={"status"}
                    selectedOptions={options['status']}
                    options={statuses}
                    title={"Trạng thái"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />

                <ProductListFilter
                    mapKey={"style"}
                    selectedOptions={options['style']}
                    options={styles}
                    title={"Kiểu dáng"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />

                <ProductListFilter
                    mapKey={"productLine"}
                    selectedOptions={options['productLine']}
                    options={productLines}
                    title={"Dòng sản phẩm"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />

                <ProductListFilter
                    mapKey={"price"}
                    selectedOptions={options['price']}
                    options={prices}
                    title={"Giá"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />

                <ProductListFilter
                    mapKey={"collection"}
                    selectedOptions={options['collection']}
                    options={collections}
                    title={"bộ sưu tập"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />
                <ProductListFilter
                    mapKey={"material"}
                    selectedOptions={options['material']}
                    options={materials}
                    title={"chất liệu"}
                    handleChangeFilterOptions={handleChangeFilterOptions}
                />

                <Stack
                    direction={"column"}
                    spacing={1}
                    borderBottom={"2px dashed"}
                    py={3}
                >
                    <Typography
                        variant='h5'
                        fontWeight={"bold"}
                        textTransform={"uppercase"}
                        color={"primary.main"}
                    >
                        Màu sắc
                    </Typography>

                    <Grid container columnGap={1} rowGap={1}>
                        {fixedColors.map((item, index) =>
                            <Grid
                                item
                                sm={2}
                                sx={{
                                    width: 30,
                                    height: 40,
                                    border: isHaveOption("color", item.value) && '2px solid',
                                    p: "2px",
                                    transition: "all 0.2s",
                                    boxShadow: isHaveOption("color", item.value) && "0 1px 6px 3px rgba(0, 0, 0, 0.3)",
                                }}
                                key={index}
                                onClick={() => handleChangeFilterOptions("color", item.value)}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        bgcolor: item.color,
                                        border: "1px solid #e1e1e1"
                                    }}
                                ></Box>
                            </Grid>
                        )}
                    </Grid>
                </Stack>
            </Grid >
            <Grid item sm={9} p={4}>
                <Box component={"img"} src={DesktopProductListBanner} width={"100%"} />
                <Grid container mt={3} spacing={2}>
                    {products.map((item, index) =>
                        <Grid item md={4} key={index}>
                            <Box sx={{
                                my: 3,
                                ":hover": {
                                    "& img:nth-of-type(2)": {
                                        display: "block"
                                    },
                                    "& img:nth-of-type(1)": {
                                        display: "none"
                                    },
                                    "& #btn-buy,#btn-wishlist": {
                                        opacity: 1,
                                    }
                                }
                            }}>
                                {/* images box */}
                                <Stack direction={"column"} alignItems={"center"}>
                                    <Box sx={{ position: "relative" }}>
                                        <Box component={Link} to={`/product-detail/${item.id}`}>
                                            <Box component={"img"} src={item.images[0]} width={"100%"} display={"block"} loading='lazy' />
                                            <Box component={"img"} src={item.images[1]} width={"100%"} display={"none"} loading='lazy' />
                                        </Box>
                                        <Stack direction={"row"}
                                            className="btn-product__actions"
                                            sx={{
                                                position: "relative",
                                                bottom: 0,
                                                justifyContent: "center",
                                                top: { sm: "-40px", lg: "-52px" },
                                                left: "15px"
                                            }}
                                        >
                                            <Button variant='contained'
                                                sx={{
                                                    transition: "all 0.3s",
                                                    px: 1,
                                                    fontSize: { sm: "1rem", lg: "1.4rem" },
                                                    fontWeight: "bold",
                                                    borderRadius: 0,
                                                    textTransform: "uppercase",
                                                    opacity: 0,
                                                }}
                                                id="btn-buy"
                                                onClick={handleBuyNow}
                                            >
                                                mua ngay
                                            </Button>
                                            <IconButton
                                                id="btn-wishlist"
                                                sx={{ transition: "all 0.3s", opacity: 0 }}
                                                onClick={handleAddToWishlist}>
                                                {item.liked ? <FavoriteIcon sx={{ color: 'primary.main' }} /> :
                                                    <FavoriteBorderIcon sx={{ color: 'primary.main' }} />}
                                            </IconButton>
                                        </Stack>
                                        {item.saleOff > 0 &&
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    left: 0,
                                                    width: "45%",
                                                    top: "8%",
                                                    bgcolor: "secondary.100",
                                                    color: "white",
                                                    textAlign: "center",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Sale off
                                            </Box>
                                        }
                                    </Box>
                                    <Box
                                        width={"100%"}
                                        textAlign={"center"}
                                        color={"black"}>
                                        <Box component={Link} to={`/product-detail/${item.id}`}>
                                            <Typography
                                                variant='body1'
                                                fontWeight={"bold"}
                                                about="typographyLink"
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Typography variant='body1' py={"5px"}>{item.color}</Typography>
                                        {
                                            item.saleOff > 0 ?
                                                <Stack
                                                    direction={"row"}
                                                    justifyContent={"center"}
                                                    spacing={3}
                                                >
                                                    <Typography
                                                        variant='body1'
                                                        fontWeight={"bold"}>
                                                        {getMoneyFormat(item.price - (item.price * item.saleOff))} VND
                                                    </Typography>
                                                    <Typography
                                                        variant='body1'
                                                        sx={{
                                                            textDecoration: "line-through",
                                                            color: "secondary.400",
                                                        }}>
                                                        {getMoneyFormat(item.price)} VND
                                                    </Typography>
                                                </Stack> :
                                                <Typography variant='body1' fontWeight={"bold"}>{getMoneyFormat(item.price)} VND</Typography>
                                        }
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    )}
                </Grid>
            </Grid >
        </Grid >
    );
}

export default ProductListDesktop;