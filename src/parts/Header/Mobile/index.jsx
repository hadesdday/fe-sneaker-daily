import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Collapse, Dialog, DialogTitle, Fade, Grid, IconButton, InputAdornment, OutlinedInput, Slide, Stack, TextField, Typography, Zoom } from '@mui/material';
import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import CartIcon from "../../../assets/icon/mb_cart.png";
import Logo from "../../../assets/logo.svg";
import TogglerMenu from '../../../components/toggler-menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { ACCESSORIES, CATEGORIES, GENERAL_CATEGORY, HIGHLIGHTS, PRODUCTS_MOBILE, PRODUCTS_PACK, STYLE, TOP_ACCESSORIES, WOMEN_ACCESSORIES, WOMEN_CATEGORIES, WOMEN_HIGHLIGHTS, WOMEN_PRODUCTS_PACK, WOMEN_STYLE, WOMEN_TOP_ACCESSORIES } from '../../../constants/dummy-data';

function HeaderMobile(props) {
    const cartItems = [];
    const navigate = useNavigate();

    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [showMenuItems, setShowMenuItems] = useState(true);

    function onToggleSearchDialog() {
        setShowSearchDialog(!showSearchDialog);
    }

    function onSearchHandle() {
        console.log("triggered toggle search dialog");
        onToggleSearchDialog();
        navigate("search-results/?key=giay");
    }

    function toggleOpenHeader() {
        document.getElementById("toggle-menu").classList.toggle("open");
        setShowMenuItems(!showMenuItems);
    }

    const [showProductLink, setShowProductLink] = useState(false);
    function toggleShowProductLink() {
        setShowProductLink(!showProductLink);
    }

    const [showMenItem, setShowMenItem] = useState(false);
    function toggleShowMenItem() {
        setShowMenItem(!showMenItem);
    }

    const [showHighlights, setShowHighlights] = useState({
        gender: "men",
        isShow: false
    });

    const [showShoes, setShowShoes] = useState({
        gender: "men",
        isShow: false
    });
    const [showAccessories, setShowAccessories] = useState({
        gender: "men",
        isShow: false
    });

    function handleShowLinksByGender(index, gender) {
        switch (index) {
            case 0:
                setShowHighlights({
                    gender,
                    isShow: !(showHighlights.isShow)
                });
                break;
            case 1:
                setShowShoes({
                    gender,
                    isShow: !(showShoes.isShow)
                });
                break;
            case 2:
                setShowAccessories({
                    gender,
                    isShow: !(showAccessories.isShow)
                });
                break;
            default:
                console.log(gender + "None was found !");
                break;
        }
    }

    const [showWomenItem, setShowWomenItem] = useState(false);
    function toggleShowWomenItem() {
        setShowWomenItem(!showWomenItem);
    }

    function getDataByGender(gender) {
        if (gender === "men") {
            return {
                title: "Nam",
                highlights: HIGHLIGHTS,
                productsPack: PRODUCTS_PACK,
                categories: CATEGORIES,
                style: STYLE,
                accessories: ACCESSORIES,
                topAccessories: TOP_ACCESSORIES
            }
        } else {
            return {
                title: "Nữ",
                highlights: WOMEN_HIGHLIGHTS,
                productsPack: WOMEN_PRODUCTS_PACK,
                categories: WOMEN_CATEGORIES,
                style: WOMEN_STYLE,
                accessories: WOMEN_ACCESSORIES,
                topAccessories: WOMEN_TOP_ACCESSORIES
            }
        }
    }

    return (
        <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
            <Dialog onClose={onToggleSearchDialog} open={showSearchDialog} fullWidth>
                <OutlinedInput
                    sx={{ m: 2 }}
                    placeholder='Tìm kiếm'
                    endAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                onClick={onSearchHandle}
                                edge="end"
                                sx={{ bgcolor: "primary.main" }}
                            >
                                <SearchIcon sx={{ color: "white" }} />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Dialog>
            <Grid container spacing={2}>
                <Grid item xs={3} textAlign={"center"} borderRight={"1px solid"} borderColor={"secondary.light"}>
                    <Box component={Link} to="/">
                        <Box component={"img"} src={Logo} alt="Logo" mt={2}></Box>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Stack direction={"row"} justifyContent={"end"} spacing={4} m={4}>
                        <Stack direction={"row"} alignItems={"flex-end"} onClick={onToggleSearchDialog}>
                            <SearchIcon sx={{ fontSize: "47px" }} />
                        </Stack>
                        <Stack direction={"row"} alignItems={"flex-end"}>
                            <Box component={Link} to="/cart">
                                <Box component={"img"} src={CartIcon} alt="Cart"></Box>
                                ({cartItems.length})
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={2} bgcolor={"secondary.100"}>
                    <TogglerMenu onClick={toggleOpenHeader} />
                </Grid>
            </Grid>
            {showMenuItems &&
                <Box sx={{
                    bgcolor: "secondary.100",
                    mt: 2,
                    color: "white",
                    position: "absolute",
                    left: 0,
                    right: 0
                }}>
                    {/* start link item */}
                    <Box>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            p={3}
                            borderBottom={"1px dashed"}
                            borderColor={"secondary.200"}
                            onClick={toggleShowProductLink}>
                            <Typography variant='h3' fontWeight={"bold"}>SẢN PHẨM</Typography>
                            <NavigateNextIcon sx={{ fontSize: "3em" }} />
                        </Stack>
                        <Box
                            sx={{
                                bgcolor: "secondary.100",
                                color: "white",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0
                            }}
                        >
                            <Slide
                                direction='left'
                                in={showProductLink}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}>
                                <Box>
                                    <Stack
                                        direction={"row"}
                                        p={3}
                                        borderBottom={"3px solid white"}
                                        onClick={toggleShowProductLink}
                                        spacing={26}
                                    >
                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                        <Typography variant='h3' fontWeight={"bold"}>SẢN PHẨM</Typography>
                                    </Stack>
                                    {PRODUCTS_MOBILE.map(item =>
                                        <Box component={Link}
                                            to={item.path}
                                            color={"white"}
                                            key={item.path}
                                            onClick={toggleOpenHeader}
                                        >
                                            <Typography variant='h3'
                                                p={3}
                                                sx={{
                                                    borderBottom: "1px dashed",
                                                    borderColor: "whitesmoke"
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Slide>
                        </Box>
                    </Box>
                    {/* end link item */}

                    {/* start link item */}
                    <Box>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            p={3}
                            borderBottom={"1px dashed"}
                            borderColor={"secondary.200"}
                            onClick={toggleShowMenItem}>
                            <Typography variant='h3' fontWeight={"bold"}>NAM</Typography>
                            <NavigateNextIcon sx={{ fontSize: "3em" }} />
                        </Stack>
                        <Box
                            sx={{
                                bgcolor: "secondary.100",
                                color: "white",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0
                            }}
                        >
                            {/* men slide in childs items */}
                            <Slide
                                direction='left'
                                in={showMenItem}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}>
                                <Box>
                                    <Stack
                                        direction={"row"}
                                        p={3}
                                        borderBottom={"3px solid white"}
                                        onClick={toggleShowMenItem}

                                    >
                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                        <Box textAlign={"center"} width={"100%"}>
                                            <Typography variant='h3' fontWeight={"bold"}>NAM</Typography>
                                        </Box>
                                    </Stack>
                                    {/* men links ( noi bat,...) */}
                                    {GENERAL_CATEGORY.map((item, index) =>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            p={3}
                                            borderBottom={"1px dashed"}
                                            borderColor={"secondary.200"}
                                            onClick={() => handleShowLinksByGender(index, "men")}
                                            key={index}
                                        >
                                            <Typography variant='h3' textTransform={"uppercase"}>{item}</Typography>
                                            <NavigateNextIcon sx={{ fontSize: "3em" }} />
                                        </Stack>
                                    )}
                                    {/* last childs box ( deepest level item ) */}
                                    <Box
                                        sx={{
                                            bgcolor: "secondary.100",
                                            color: "white",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0
                                        }}
                                    >
                                        <Slide
                                            direction='left'
                                            in={showHighlights.gender === "men" && showHighlights.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(0, "men")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("men").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>NỔI BẬT</Typography>
                                                    </Stack>
                                                </Stack>
                                                {getDataByGender("men").highlights.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                                <Box
                                                    color={"white"}
                                                    key={"bst"}
                                                >
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Bộ sản phẩm
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("men").productsPack.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                        <Slide
                                            direction='left'
                                            in={showShoes.gender === "men" && showShoes.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(1, "men")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("men").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>GIÀY</Typography>
                                                    </Stack>
                                                </Stack>

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Dòng sản phẩm
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("men").categories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Style
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("men").style.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                        <Slide
                                            direction='left'
                                            in={showAccessories.gender === "men" && showAccessories.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(2, "men")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("men").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>THỜI TRANG & PHỤ KIỆN</Typography>
                                                    </Stack>
                                                </Stack>

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Nửa trên
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("men").topAccessories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Phụ kiện
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("men").accessories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                    </Box>
                                </Box>
                            </Slide>
                        </Box>
                    </Box>
                    {/* end link  item */}

                    {/* start link item */}
                    <Box>
                        <Stack
                            direction={"row"}
                            justifyContent={"space-between"}
                            p={3}
                            borderBottom={"1px dashed"}
                            borderColor={"secondary.200"}
                            onClick={toggleShowWomenItem}>
                            <Typography variant='h3' fontWeight={"bold"}>NỮ</Typography>
                            <NavigateNextIcon sx={{ fontSize: "3em" }} />
                        </Stack>
                        <Box
                            sx={{
                                bgcolor: "secondary.100",
                                color: "white",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0
                            }}
                        >
                            {/* men slide in childs items */}
                            <Slide
                                direction='left'
                                in={showWomenItem}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}>
                                <Box>
                                    <Stack
                                        direction={"row"}
                                        p={3}
                                        borderBottom={"3px solid white"}
                                        onClick={toggleShowWomenItem}

                                    >
                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                        <Box textAlign={"center"} width={"100%"}>
                                            <Typography variant='h3' fontWeight={"bold"}>NỮ</Typography>
                                        </Box>
                                    </Stack>
                                    {/* women links ( noi bat,...) */}
                                    {GENERAL_CATEGORY.map((item, index) =>
                                        <Stack
                                            direction={"row"}
                                            justifyContent={"space-between"}
                                            p={3}
                                            borderBottom={"1px dashed"}
                                            borderColor={"secondary.200"}
                                            onClick={() => handleShowLinksByGender(index, "women")}
                                            key={index}
                                        >
                                            <Typography variant='h3' textTransform={"uppercase"}>{item}</Typography>
                                            <NavigateNextIcon sx={{ fontSize: "3em" }} />
                                        </Stack>
                                    )}
                                    {/* last childs box ( deepest level item ) */}
                                    <Box
                                        sx={{
                                            bgcolor: "secondary.100",
                                            color: "white",
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0
                                        }}
                                    >
                                        <Slide
                                            direction='left'
                                            in={showHighlights.gender === "women" && showHighlights.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(0, "women")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("women").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>NỔI BẬT</Typography>
                                                    </Stack>
                                                </Stack>
                                                {getDataByGender("women").highlights.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                                <Box
                                                    color={"white"}
                                                    key={"bst"}
                                                >
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Bộ sản phẩm
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("women").productsPack.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                        <Slide
                                            direction='left'
                                            in={showShoes.gender === "women" && showShoes.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(1, "women")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("women").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>GIÀY</Typography>
                                                    </Stack>
                                                </Stack>

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Dòng sản phẩm
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("women").categories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Style
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("women").style.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                        <Slide
                                            direction='left'
                                            in={showAccessories.gender === "women" && showAccessories.isShow}
                                            orientation='horizontal'
                                            mountOnEnter
                                            unmountOnExit
                                            timeout={450}>
                                            <Box>
                                                <Stack
                                                    direction={"row"}
                                                    p={3}
                                                    borderBottom={"3px solid white"}
                                                    onClick={() => handleShowLinksByGender(2, "women")}
                                                >
                                                    <Box>
                                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                                    </Box>
                                                    <Stack direction={"row"} spacing={2} justifyContent={"center"} width={"100%"}>
                                                        <Typography
                                                            variant='h3'
                                                            fontWeight={"bold"}
                                                            sx={{ opacity: 0.5, textTransform: "uppercase" }}>
                                                            {getDataByGender("women").title}
                                                        </Typography>
                                                        <Box borderRight={"1px solid white"}></Box>
                                                        <Typography variant='h3' fontWeight={"bold"}>THỜI TRANG & PHỤ KIỆN</Typography>
                                                    </Stack>
                                                </Stack>

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Nửa trên
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("women").topAccessories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}

                                                <Box>
                                                    <Typography variant='h3'
                                                        p={3}
                                                        sx={{
                                                            borderBottom: "1px dashed",
                                                            borderColor: "whitesmoke",
                                                            opacity: 0.5
                                                        }}
                                                    >
                                                        Phụ kiện
                                                    </Typography>
                                                </Box>
                                                {getDataByGender("women").accessories.map(item =>
                                                    <Box component={Link}
                                                        to={item.path}
                                                        color={"white"}
                                                        key={item.path}
                                                        onClick={toggleOpenHeader}
                                                    >
                                                        <Typography variant='h3'
                                                            p={3}
                                                            sx={{
                                                                borderBottom: "1px dashed",
                                                                borderColor: "whitesmoke"
                                                            }}
                                                        >
                                                            {item.title}
                                                        </Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                        </Slide>

                                    </Box>
                                </Box>
                            </Slide>
                        </Box>
                    </Box>
                    {/* end link  item */}
                </Box>
            }
        </Box>
    );
}

export default HeaderMobile;