import ClearIcon from '@mui/icons-material/Clear';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { getMoneyFormat } from '../../../../utils';
import DesktopProductListBanner from "../../../assets/banner/desktop_productlist.jpg";
import ProductImage1 from "../../../assets/product/product-1.jpeg";
import ProductImage2 from "../../../assets/product/product-2.jpeg";
import ProductListFilter from '../../../compositions/product-list-filter';

function ProductListDesktop({ products, options }) {
    const gender = [
        {
            value: "all",
            label: "Tất cả"
        },
        {
            value: "men",
            label: "Nam"
        },
        {
            value: "women",
            label: "Nữ"
        }
    ]

    const categories = [
        {
            value: "accessories",
            label: "Accessories | Phụ kiện"
        },
        {
            value: "shoes",
            label: "Footwear | Lên chân"
        },
        {
            value: "top",
            label: "Top | Nửa trên"
        }
    ]

    const statuses = [
        {
            value: "limited-edition",
            label: "Limited Edition"
        },
        {
            value: "online-only",
            label: "Online Only"
        },
        {
            value: "sale-off",
            label: "Sale Off"
        },
        {
            value: "new-arrival",
            label: "New Arrival"
        }
    ]

    const styles = [
        {
            value: "low-top",
            label: "Low Top"
        },
        {
            value: "high-top",
            label: "High Top"
        },
        {
            value: "slip-on",
            label: "Slip On"
        },
        {
            value: "mid-top",
            label: "Mid Top"
        },
        {
            value: "mule",
            label: "Mule"
        }
    ]

    const productLines = [
        {
            value: "basas",
            label: "Basas"
        },
        {
            value: "vintas",
            label: "Vintas"
        },
        {
            value: "urbas",
            label: "Urbas"
        },
        {
            value: "pattas",
            label: "Pattas"
        },
        {
            value: "tote-bag",
            label: "Tote Bag"
        },
        {
            value: "graphic-tee",
            label: "Graphic Tee"
        },
        {
            value: "hoodie",
            label: "Hoodie"
        },
        {
            value: "sweatshirt",
            label: "Sweatshirt"
        },
        {
            value: "socks",
            label: "Socks | Vớ"
        },
        {
            value: "hat",
            label: "Hat"
        },
        {
            value: "track-6",
            label: "Track 6"
        },
        {
            value: "basic-tee-tron",
            label: "Basic Tee"
        },
        {
            value: "shoelaces",
            label: "Shoelaces"
        }
    ]

    const prices = [
        {
            value: "500-599",
            label: "500 - 599k"
        },
        {
            value: ">600",
            label: "> 600k"
        },
        {
            value: "400-499",
            label: "400 - 499k"
        },
        {
            value: "300-399",
            label: "300 - 399k"
        },
        {
            value: "200-299",
            label: "200 - 299k"
        },
        {
            value: "<200",
            label: "< 200k"
        }
    ]

    const collections = [
        {
            value: "ananas-puppet-club",
            label: "Ananas Puppet Club"
        },
        {
            value: "track-6-2-blues",
            label: "Track 6 2 Blues"
        },
        {
            value: "ananas-outline-typo",
            label: "Ananas Outline Typo"
        },
        {
            value: "est-17-ananas",
            label: "Est. '17 Ananas"
        },
        {
            value: "discover-ananas",
            label: "Discover Ananas"
        },
        {
            value: "jazico",
            label: "Jazico"
        },
        {
            value: "track-6-isee",
            label: "Track 6 Isee"
        },
        {
            value: "soda-pop",
            label: "Soda Pop"
        },
        {
            value: "landforms",
            label: "Landforms"
        },
        {
            value: "solid-colors",
            label: "Solid Colors"
        },
        {
            value: "ananas-copy-store-bag",
            label: `Ananas "Copy" Store Bag`
        },
        {
            value: "workaday",
            label: "Workaday"
        },
        {
            value: "evergreen-pack",
            label: "Evergreen"
        },
        {
            value: "raw",
            label: "RAW"
        },
        {
            value: "polka-dots",
            label: "Polka Dots"
        },
        {
            value: "living-journey",
            label: "Living Journey"
        },
        {
            value: "retrospective",
            label: "Retrospective"
        },
        {
            value: "aunter",
            label: "Aunter"
        },
        {
            value: "monoguso",
            label: "Monoguso"
        },
        {
            value: "ruler",
            label: "Ruler"
        },
        {
            value: "flannel-pack",
            label: "Flannel"
        },
        {
            value: "track-6-class-e",
            label: "Track 6 Class E"
        },
        {
            value: "loveplus",
            label: "Love+"
        },
        {
            value: "temperate",
            label: "Temperate"
        },
        {
            value: "ananas-doraemon-50years",
            label: "Ananas x Doraemon 50 Years"
        },
        {
            value: "irrelevant",
            label: "Irrelevant"
        },
        {
            value: "track-6-unnamed",
            label: "Track 6 Unnamed"
        },
        {
            value: "discoveryou",
            label: "DiscoverYou"
        },
        {
            value: "ananas-symbol",
            label: "Ananas Symbol"
        },
        {
            value: "ananas-cropped-symbol",
            label: "Ananas Cropped Symbol"
        },
        {
            value: "ananas-typo-logo",
            label: "Ananas Typo Logo"
        },
        {
            value: "track-6-og",
            label: "Track 6 OG"
        },
        {
            value: "bst-unsettling",
            label: "Unsettling"
        },
        {
            value: "all-suede",
            label: "Track 6 Suede"
        },
        {
            value: "ananas-lucky-luke",
            label: "Ananas x Lucky Luke"
        },
        {
            value: "corluray",
            label: "Corluray"
        },
        {
            value: "bloody",
            label: "Bloody"
        },
        {
            value: "lego",
            label: "Lego"
        },
        {
            value: "mister",
            label: "Mister"
        },
        {
            value: "saigon-1980s",
            label: "Saigon 1980s"
        },
        {
            value: "bleached-sand-pack",
            label: "Bleached Sand"
        },
        {
            value: "mono",
            label: "Mono"
        },
        {
            value: "simple-life",
            label: "Simple Life"
        },
        {
            value: "mono-black",
            label: "Mono Black"
        },
        {
            value: "hook-n-loop",
            label: "Hook n' Loop"
        },
        {
            value: "bumper-gum",
            label: "Bumper Gum"
        }
    ]

    const materials = [
        {
            value: "canvas",
            label: "Canvas"
        },
        {
            value: "suede",
            label: "Suede | Da lộn"
        },
        {
            value: "leather",
            label: "Leather | Da"
        },
        {
            value: "cotton",
            label: "Cotton"
        },
        {
            value: "flannel",
            label: "Flannel"
        },
        {
            value: "acrylic",
            label: "Acrylic"
        },
        {
            value: "corduroy",
            label: "Corduroy"
        },
        {
            value: "polyester",
            label: "Polyester"
        }
    ]

    const fixedColors = [
        {
            value: "multi-color",
            color: "rgba(0, 0, 0, 0)",
        },
        {
            value: "offwhite",
            color: "rgb(254, 251, 239)"
        },
        {
            value: "pineneedle",
            color: "rgb(69, 88, 81)"
        },
        {
            value: "beige",
            color: "rgb(235, 208, 162)"
        },
        {
            value: "grey",
            color: "rgb(195, 195, 195)"
        },
        {
            value: "navy",
            color: "rgb(28, 72, 124)"
        },
        {
            value: "brown",
            color: "rgb(134, 84, 57)"
        },
        {
            value: "white",
            color: "rgb(255, 255, 255)"
        },
        {
            value: "green",
            color: "rgb(109, 153, 81)"
        },
        {
            value: "violet",
            color: "rgb(138, 92, 160)"
        },
        {
            value: "pink",
            color: "rgb(241, 119, 138)"
        },
        {
            value: "yellow",
            color: "rgb(245, 210, 85)"
        },
        {
            value: "orange",
            color: "rgb(233, 102, 44)"
        },
        {
            value: "red",
            color: "rgb(193, 0, 19)"
        },
        {
            value: "black",
            color: "rgb(70, 70, 70)"
        },
    ]
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
        <Grid container px={{ sm: 2, lg: 20 }}>
            <Grid item sm={3} pt={10}>
                <Stack
                    direction={"row"}
                    spacing={2}
                    borderBottom={"2px solid"}
                    py={3}
                    justifyContent={"center"}>
                    {gender.map((item, index) =>
                        <Typography variant='h5'
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            sx={{
                                transition: "all 0.2s",
                                borderRight: "1px solid #000",
                                pr: 2,
                                cursor: "pointer",
                                color: "black",
                                opacity: isHaveOption("gender", item.value) ? 1 : 0.5,
                                ":hover": {
                                    opacity: 1
                                }
                            }}
                            key={index}
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
                    selectedOptions={options['status']}
                    options={statuses}
                    title={"Trạng thái"}
                />

                <ProductListFilter
                    selectedOptions={options['style']}
                    options={styles}
                    title={"Kiểu dáng"}
                />

                <ProductListFilter
                    selectedOptions={options['productLine']}
                    options={productLines}
                    title={"Dòng sản phẩm"}
                />

                <ProductListFilter
                    selectedOptions={options['price']}
                    options={prices}
                    title={"Giá"}
                />

                <ProductListFilter
                    selectedOptions={options['collection']}
                    options={collections}
                    title={"bộ sưu tập"}
                />
                <ProductListFilter
                    selectedOptions={options['material']}
                    options={materials}
                    title={"chất liệu"}
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
                                    ":hover": {
                                        boxShadow: "0 1px 6px 3px rgba(0, 0, 0, 0.3)",
                                        opacity: 0.5
                                    }
                                }}
                                key={index}
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