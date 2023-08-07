import { KeyboardArrowDown } from '@mui/icons-material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Grid, IconButton, InputAdornment, Link as MuiLink, OutlinedInput, Stack, Typography } from '@mui/material';
import { useHover } from "@uidotdev/usehooks";
import React from 'react';
import { Link } from 'react-router-dom';
import MenMenuBanner from "../../../assets/banner/Menu_Nam.jpg";
import WomenMenuBanner from "../../../assets/banner/Menu_Nu.jpg";
import AccessoriesBanner from "../../../assets/banner/Menu_Phu-kien.jpg";
import SaleBanner from "../../../assets/banner/Menu_Sale-off.jpg";
import CartIcon from "../../../assets/icon/cart.svg";
import LoveIcon from "../../../assets/icon/love.svg";
import ProfileIcon from "../../../assets/icon/profile.svg";
import TrackingOrderIcon from "../../../assets/icon/tracking-order.svg";
import Logo from "../../../assets/logo.svg";
import { ACCESSORIES, CATEGORIES, HIGHLIGHTS, PRODUCTS_PACK, STYLE, TOP_ACCESSORIES, WOMEN_ACCESSORIES, WOMEN_CATEGORIES, WOMEN_HIGHLIGHTS, WOMEN_PRODUCTS_PACK, WOMEN_STYLE, WOMEN_TOP_ACCESSORIES } from '../../../constants/dummy-data';
import "../style.scss";
import { useSelector } from 'react-redux';
import { selectCartCount } from '../../../store/cart/cart.selector';

function HeaderDesktop() {

    const cartCount = useSelector(selectCartCount);

    let itemList = [
        {
            iconSrc: CartIcon,
            text: `Giỏ hàng (${cartCount})`,
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

    const [productRef, productHovering] = useHover();
    const [menRef, menHovering] = useHover();
    const [womenRef, womenHovering] = useHover();
    const [menBoxRef, menBoxHovering] = useHover();
    const [productBoxRef, productBoxHovering] = useHover();
    const [womenBoxRef, womenBoxHovering] = useHover();

    return (
        <Box display={{ md: "block", xs: "none" }}>
            <Stack direction={"row"} justifyContent={"end"} bgcolor={"secondary.main"} pr={8} alignItems={"center"}
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
            <Stack direction={"row"} justifyContent={"space-between"} py={2} display={{ xs: "none", md: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <Stack direction={"row"} justifyContent={"end"}>
                            <Link to={'/'}>
                                <Box component={"img"} src={Logo} alt={"Logo"} />
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid item md={7}>
                        <Stack direction={"row"} justifyContent={"center"} textAlign={"center"} alignItems={"center"}>
                            <Link to={"/product-list?gender=all"} className='parent-box'>
                                <Box sx={{
                                    py: 4,
                                    px: 2,
                                    width: "100%",
                                    '&:hover': {
                                        '#text-link': {
                                            color: "primary.main"
                                        },
                                    }
                                }}
                                    ref={productBoxRef}
                                >
                                    <Typography
                                        about="secondHeaderLink"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "23px",
                                            pr: 1,
                                            borderRight: "2px solid #f1f1f1",
                                        }}
                                        id='text-link'
                                        color={productHovering ? "primary.main" : "black"}
                                    >
                                        SẢN PHẨM
                                        {(productHovering || productBoxHovering) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
                                    </Typography>
                                </Box>
                            </Link>
                            <Stack
                                direction={"row"}
                                spacing={5}
                                display={"none"}
                                bgcolor={"secondary.main"}
                                width={"100%"}
                                height={"40%"}
                                py={5}
                                justifyContent={"center"}
                                sx={{
                                    '&:hover': {
                                        display: "flex",
                                        position: "absolute",
                                        top: "17%",
                                        left: "0",
                                    },
                                    zIndex: 2
                                }}
                                className='child-box'
                                ref={productRef}
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
                                            sx={{ width: { md: "210px" } }}></Box>
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
                                            sx={{ width: { md: "210px" } }}></Box>
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
                                            sx={{ width: { md: "210px" } }}></Box>
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
                                    <Link to={"/product-list?gender=all&category=top,bottom,accessories"}>
                                        <Box component={"img"} src={AccessoriesBanner} alt="Accessories"
                                            sx={{ width: { md: "210px" } }}></Box>
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
                            <Link to={"/product-list?gender=men"} className='parent-box'>
                                <Box sx={{
                                    py: 4,
                                    px: 2,
                                    width: "100%",
                                    '&:hover': {
                                        '#text-link': {
                                            color: "primary.main"
                                        },
                                    }
                                }}
                                    ref={menBoxRef}
                                >
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
                                        {(menHovering || menBoxHovering) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}
                                    </Typography>
                                </Box>
                            </Link>
                            <Box
                                display={"none"}
                                bgcolor={"secondary.100"}
                                width={"100%"}
                                height={"70%"}
                                py={5}
                                sx={{
                                    '&:hover': {
                                        display: "flex",
                                        position: "absolute",
                                        top: "17%",
                                        left: "0",
                                    },
                                    zIndex: 2
                                }}
                                className='child-box'
                                ref={menRef}
                            >
                                <Container>
                                    <Grid container columnSpacing={10}>
                                        <Grid item md={4} borderRight={"2px dashed"} borderColor={"secondary.300"}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=men"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        NỔI BẬT
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    {HIGHLIGHTS.map((item) =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Bộ sản phẩm
                                                    </MuiLink>
                                                    {PRODUCTS_PACK.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Collaboration
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        GIÀY
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    <MuiLink component={Link}
                                                        to={"/product-list?gender=all"}
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Dòng sản phẩm
                                                    </MuiLink>
                                                    {
                                                        CATEGORIES.map(item =>
                                                            <MuiLink component={Link}
                                                                to={item.path}
                                                                color={"secondary.200"}
                                                                key={item.path}
                                                            >
                                                                {item.title}
                                                            </MuiLink>
                                                        )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Style
                                                    </MuiLink>
                                                    {STYLE.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Tất cả giày
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        <Grid item md={5}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        THỜI TRANG & PHỤ KIỆN
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    <MuiLink component={Link}
                                                        to={"/product-list"}
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Nửa trên
                                                    </MuiLink>
                                                    {
                                                        TOP_ACCESSORIES.map(item =>
                                                            <MuiLink component={Link}
                                                                to={item.path}
                                                                color={"secondary.200"}
                                                                key={item.path}
                                                            >
                                                                {item.title}
                                                            </MuiLink>
                                                        )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Phụ kiện
                                                    </MuiLink>
                                                    {ACCESSORIES.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="product-list?gender=men&category=top,bottom,accessories"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Xem tất cả
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Box>
                            {/* end new dropdown box */}

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
                                }}
                                    ref={womenBoxRef}
                                >
                                    <Typography
                                        about="secondHeaderLink"
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "23px",
                                            pr: 1,
                                            borderRight: "2px solid #f1f1f1",
                                        }}
                                        id='text-link'
                                        color={womenHovering ? "primary.main" : "black"}
                                    >
                                        NỮ
                                        {(womenHovering || womenBoxHovering) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDown />}

                                    </Typography>
                                </Box>
                            </Link>
                            <Box
                                display={"none"}
                                bgcolor={"secondary.100"}
                                width={"100%"}
                                height={"70%"}
                                py={5}
                                sx={{
                                    '&:hover': {
                                        display: "flex",
                                        position: "absolute",
                                        top: "17%",
                                        left: "0",
                                    },
                                    zIndex: 2
                                }}
                                className='child-box'
                                ref={womenRef}
                            >
                                <Container>
                                    <Grid container columnSpacing={10}>
                                        <Grid item md={4} borderRight={"2px dashed"} borderColor={"secondary.300"}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        NỔI BẬT
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    {WOMEN_HIGHLIGHTS.map((item) =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Bộ sản phẩm
                                                    </MuiLink>
                                                    {WOMEN_PRODUCTS_PACK.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Collaboration
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        <Grid item md={3}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        GIÀY
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    <MuiLink component={Link}
                                                        to={"/product-list?gender=all"}
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Dòng sản phẩm
                                                    </MuiLink>
                                                    {
                                                        WOMEN_CATEGORIES.map(item =>
                                                            <MuiLink component={Link}
                                                                to={item.path}
                                                                color={"secondary.200"}
                                                                key={item.path}
                                                            >
                                                                {item.title}
                                                            </MuiLink>
                                                        )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Style
                                                    </MuiLink>
                                                    {WOMEN_STYLE.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Tất cả giày
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                        <Grid item md={5}>
                                            <Stack direction={"column"} alignItems={"start"}>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"white"}
                                                        fontWeight={"bold"}
                                                        variant='h6'
                                                    >
                                                        THỜI TRANG & PHỤ KIỆN
                                                    </MuiLink>
                                                </Box>
                                                <Stack direction={"column"} py={4} alignItems={"start"}>
                                                    <MuiLink component={Link}
                                                        to={"/product-list?gender=all"}
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Nửa trên
                                                    </MuiLink>
                                                    {
                                                        WOMEN_TOP_ACCESSORIES.map(item =>
                                                            <MuiLink component={Link}
                                                                to={item.path}
                                                                color={"secondary.200"}
                                                                key={item.path}
                                                            >
                                                                {item.title}
                                                            </MuiLink>
                                                        )
                                                    }
                                                </Stack>
                                                <Stack direction={"column"} alignItems={"start"} pb={4}>
                                                    <MuiLink component={Link}
                                                        to="/product-list?gender=all"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Phụ kiện
                                                    </MuiLink>
                                                    {WOMEN_ACCESSORIES.map(item =>
                                                        <MuiLink component={Link}
                                                            to={item.path}
                                                            color={"secondary.200"}
                                                            key={item.path}
                                                        >
                                                            {item.title}
                                                        </MuiLink>
                                                    )}
                                                </Stack>
                                                <Box>
                                                    <MuiLink component={Link}
                                                        to="product-list?gender=all&category=top,bottom,accessories"
                                                        color={"secondary.300"}
                                                        fontWeight={"bold"}
                                                    >
                                                        Xem tất cả
                                                    </MuiLink>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </Container>
                            </Box>
                            {/* end new dropdown box */}
                        </Stack>
                    </Grid>
                    <Grid item md={3}>
                        <OutlinedInput
                            placeholder="Tìm kiếm"
                            endAdornment={
                                <InputAdornment position="start">
                                    <IconButton
                                        onClick={handleClickSearch}
                                        edge="end"
                                    >
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                            }
                            size='small'
                            sx={{ m: 3 }}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleClickSearch() }}
                        />
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}

export default HeaderDesktop;