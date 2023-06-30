import { KeyboardArrowDown, KeyboardArrowUp, Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Grid, IconButton, InputAdornment, List, ListItem, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHover, useMouse } from "@uidotdev/usehooks";
import CartIcon from "../../assets/icon/cart.svg";
import LoveIcon from "../../assets/icon/love.svg";
import ProfileIcon from "../../assets/icon/profile.svg";
import TrackingOrderIcon from "../../assets/icon/tracking-order.svg";
import Logo from "../../assets/logo.svg";
import SearchIcon from '@mui/icons-material/Search';
import MenMenuBanner from "../../assets/banner/Menu_Nam.jpg";
import WomenMenuBanner from "../../assets/banner/Menu_Nu.jpg";
import AccessoriesBanner from "../../assets/banner/Menu_Phu-kien.jpg";
import SaleBanner from "../../assets/banner/Menu_Sale-off.jpg";

import "./style.scss"

function Header(props) {

    const cartItems = [];

    let itemList = [
        {
            iconSrc: CartIcon,
            text: `Giỏ hàng (${cartItems.length})`,
            alt: "Giỏ hàng",
            to: "/cart"
        },
        {
            iconSrc: ProfileIcon,
            text: `Đăng nhập`,
            alt: "Đăng nhập",
            to: "/signin"
        },
        {
            iconSrc: LoveIcon,
            text: `Yêu thích`,
            alt: "Yêu thích",
            to: "/wishlist"
        },
        {
            iconSrc: TrackingOrderIcon,
            text: `Tra cứu đơn hàng`,
            alt: "Tra cứu đơn hàng",
            to: "/tracking-order"
        },

    ]

    const handleClickSearch = () => {
        console.log("click search");
    }

    const [ref, hovering] = useHover();
    const [menRef, menHovering] = useHover();

    // useEffect(() => {
    //     console.log(ref, hovering)
    // }, [hovering, ref])

    return (
        <>
            <Stack direction={"row"} justifyContent={"end"} bgcolor={"secondary.main"} pr={8}
                flexDirection={"row-reverse"} display={{ xs: "none", md: "flex" }}>
                {itemList.map(item => (
                    <Box pr={3} key={item.to}>
                        <Link to={item.to}>
                            <Typography variant='body2' about='firstHeaderLink' display={"flex"} alignItems={"center"}>
                                <Box component={"img"} src={item.iconSrc} alt={item.alt} pr={1}></Box>
                                {item.text}
                            </Typography>
                        </Link>
                    </Box>
                ))}
            </Stack>
            <Stack direction={"row"} justifyContent={"space-between"} py={2} flexGrow={1}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Stack direction={"row"} justifyContent={"end"}>
                            <Link to={'/'}>
                                <Box component={"img"} src={Logo} alt={"Logo"} />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item xs={7}>
                        <Stack direction={"row"} justifyContent={"center"} textAlign={"center"}>
                            <Link to={"/product-list"} className='parent-box'>
                                <Box sx={{
                                    py: 4,
                                    px: 2,
                                    width: "100%",
                                    '&:hover': {
                                        '#text-link': {
                                            color: "primary.main"
                                        },
                                    }
                                }}>
                                    <Typography
                                        about="secondHeaderLink"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "23px",
                                            pr: 1,
                                            borderRight: "2px solid #f1f1f1",
                                        }}
                                        id='text-link'
                                        color={hovering ? "primary.main" : "black"}
                                    >
                                        SẢN PHẨM
                                        <KeyboardArrowDown />
                                    </Typography>
                                </Box>
                            </Link>
                            <Stack
                                direction={"row"}
                                spacing={5}
                                display={"none"}
                                bgcolor={"secondary.main"}
                                width={"100%"}
                                height={"50%"}
                                py={5}
                                justifyContent={"center"}
                                sx={{
                                    '&:hover': {
                                        display: "flex",
                                        position: "absolute",
                                        top: "17%",
                                        left: "0",
                                    }
                                }}
                                className='child-box'
                                ref={ref}
                            >
                                <Box
                                    sx={{
                                        transition: "all 0.2s ease-in-out",
                                        opacity: "0.5",
                                        "&:hover": {
                                            opacity: "1",
                                        }
                                    }}
                                >
                                    <Link to={"/product-list?gender=men"}>
                                        <Box component={"img"} src={MenMenuBanner} alt="Men"
                                            sx={{ width: { md: "260px" } }}></Box>
                                        <Typography
                                            fontWeight={"bold"}
                                            variant='h6'
                                            textAlign={"center"}
                                            color={"white"}
                                            sx={{
                                                transition: "all 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "primary.main",
                                                }
                                            }}
                                        >
                                            CHO NAM
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        transition: "all 0.2s ease-in-out",
                                        opacity: "0.5",
                                        "&:hover": {
                                            opacity: "1",
                                        }
                                    }}
                                >
                                    <Link to={"/product-list?gender=women"}>
                                        <Box component={"img"} src={WomenMenuBanner} alt="Women"
                                            sx={{ width: { md: "260px" } }}></Box>
                                        <Typography
                                            fontWeight={"bold"}
                                            variant='h6'
                                            textAlign={"center"}
                                            color={"white"}
                                            sx={{
                                                transition: "all 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "primary.main",
                                                }
                                            }}
                                        >
                                            CHO NỮ
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        transition: "all 0.2s ease-in-out",
                                        opacity: "0.5",
                                        "&:hover": {
                                            opacity: "1",
                                        }
                                    }}
                                >
                                    <Link to={"/promotion/clearance-sale"}>
                                        <Box component={"img"} src={SaleBanner} alt="Sale off"
                                            sx={{ width: { md: "260px" } }}></Box>
                                        <Typography
                                            fontWeight={"bold"}
                                            variant='h6'
                                            textAlign={"center"}
                                            color={"white"}
                                            sx={{
                                                transition: "all 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "primary.main",
                                                }
                                            }}
                                        >
                                            OUTLET SALE
                                        </Typography>
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        transition: "all 0.2s ease-in-out",
                                        opacity: "0.5",
                                        "&:hover": {
                                            opacity: "1",
                                        }
                                    }}
                                >
                                    <Link to={"/product-list?gender=men,women&category=top,bottom,accessories"}>
                                        <Box component={"img"} src={AccessoriesBanner} alt="Accessories"
                                            sx={{ width: { md: "260px" } }}></Box>
                                        <Typography
                                            fontWeight={"bold"}
                                            variant='h6'
                                            textAlign={"center"}
                                            color={"white"}
                                            sx={{
                                                transition: "all 0.2s ease-in-out",
                                                "&:hover": {
                                                    color: "primary.main",
                                                }
                                            }}
                                        >
                                            THỜI TRANG & PHỤ KIỆN
                                        </Typography>
                                    </Link>
                                </Box>
                            </Stack>

                            {/* start new dropdown box */}
                            <Link to={"/product"} className='parent-box'>
                                <Box sx={{
                                    py: 4,
                                    px: 2,
                                    width: "100%",
                                    '&:hover': {
                                        '#text-link': {
                                            color: "primary.main"
                                        },
                                    }
                                }}>
                                    <Typography
                                        about="secondHeaderLink"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "23px",
                                            pr: 1,
                                            borderRight: "2px solid #f1f1f1",
                                        }}
                                        id='text-link'
                                        color={menHovering ? "primary.main" : "black"}
                                    >
                                        NAM
                                        <KeyboardArrowDown />
                                    </Typography>
                                </Box>
                            </Link>
                            <Stack
                                direction={"row"}
                                spacing={5}
                                display={"none"}
                                bgcolor={"secondary.main"}
                                width={"100%"}
                                height={"50%"}
                                py={5}
                                justifyContent={"center"}
                                sx={{
                                    '&:hover': {
                                        display: "flex",
                                        position: "absolute",
                                        top: "17%",
                                        left: "0",
                                    }
                                }}
                                className='child-box'
                                ref={menRef}
                            >
                                <Box>
                                    <Link to={"/product-list"}>
                                        <Typography variant='h2'>
                                            hello
                                        </Typography>
                                    </Link>
                                </Box>
                            </Stack>
                            {/* end new dropdown box */}
                        </Stack>
                    </Grid>
                    <Grid item xs={3}>
                        <OutlinedInput
                            placeholder="Tìm kiếm"
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickSearch}
                                        edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            size='small'
                        />
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
}

export default Header;