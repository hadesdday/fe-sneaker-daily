import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Dialog, Grid, IconButton, InputAdornment, Link as MuiLink, OutlinedInput, Slide, Stack, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import LoveIcon from "../../../assets/icon/love.svg";
import CartIcon from "../../../assets/icon/mb_cart.png";
import ProfileIcon from "../../../assets/icon/profile.svg";
import TrackingOrderIcon from "../../../assets/icon/tracking-order.svg";
import Logo from "../../../assets/logo.svg";
import TogglerMenu from '../../../components/toggler-menu';
import { ACCESSORIES, CATEGORIES, GENERAL_CATEGORY, HIGHLIGHTS, PRODUCTS_MOBILE, PRODUCTS_PACK, STYLE, TOP_ACCESSORIES, WOMEN_ACCESSORIES, WOMEN_CATEGORIES, WOMEN_HIGHLIGHTS, WOMEN_PRODUCTS_PACK, WOMEN_STYLE, WOMEN_TOP_ACCESSORIES } from '../../../constants/dummy-data';
import { selectCartCount } from '../../../store/cart/cart.selector';
import { selectCurrentUser } from '../../../store/user/user.selector';

function HeaderMobile() {
    const cartCount = useSelector(selectCartCount);

    const navigate = useNavigate();

    const [showSearchDialog, setShowSearchDialog] = useState(false);
    const [showMenuItems, setShowMenuItems] = useState(false);


    const [showAccountList, setShowAccountList] = useState(false);
    function toggleShowAccountList() {
        setShowAccountList(!showAccountList);
    }

    function onToggleSearchDialog() {
        setShowSearchDialog(!showSearchDialog);
    }

    function onSearchHandle() {
        console.log("triggered toggle search dialog");
        onToggleSearchDialog();
        hideHeaderList();
        //test key query only
        navigate("search-results/?key=giay");
    }

    function toggleOpenHeaderList() {
        document.getElementById("toggle-menu").classList.toggle("open");
        setShowMenuItems(!showMenuItems);
        setShowHighlights({
            gender: "men",
            isShow: false
        });
        setShowShoes({
            gender: "men",
            isShow: false
        });
        setShowAccessories({
            gender: "men",
            isShow: false
        });
        setShowProductLink(false);
        setShowMenItem(false);
        setShowWomenItem(false);
        setShowAccountList(false);
    }

    function hideHeaderList() {
        document.getElementById("toggle-menu").classList.remove("open");
        setShowMenuItems(false);
        setShowHighlights({
            gender: "men",
            isShow: false
        });
        setShowShoes({
            gender: "men",
            isShow: false
        });
        setShowAccessories({
            gender: "men",
            isShow: false
        });
        setShowProductLink(false);
        setShowMenItem(false);
        setShowWomenItem(false);
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

    const currentUser = useSelector(selectCurrentUser);

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
                    <Box component={Link} to="/" onClick={hideHeaderList}>
                        <Box component={"img"} src={Logo} alt="Logo" mt={2}></Box>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Stack direction={"row"} justifyContent={"end"} spacing={4} m={4}>
                        <Stack direction={"row"} alignItems={"flex-end"} onClick={onToggleSearchDialog}>
                            <SearchIcon sx={{ fontSize: "47px" }} />
                        </Stack>
                        <Stack direction={"row"} alignItems={"flex-end"} onClick={hideHeaderList}>
                            <Box component={Link} to="/cart">
                                <Box component={"img"} src={CartIcon} alt="Cart"></Box>
                                ({cartCount})
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={2} bgcolor={"secondary.100"} onClick={toggleOpenHeaderList} >
                    <TogglerMenu />
                </Grid>
            </Grid>

            <Box sx={{
                bgcolor: "secondary.100",
                // mt: 2,
                color: "white",
                position: "absolute",
                left: 0,
                right: 0,
                transition: "all 0.2s ease-in-out",
                opacity: showMenuItems ? 1 : 0,
                zIndex: showMenuItems ? 2 : -1
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
                    <Slide
                        direction='left'
                        in={showProductLink}
                        orientation='horizontal'
                        mountOnEnter
                        unmountOnExit
                        timeout={450}
                        sx={{
                            bgcolor: "secondary.100",
                            color: "white",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            minHeight: "100vh"
                        }}
                    >
                        <Box>
                            <Stack
                                direction={"row"}
                                p={3}
                                borderBottom={"3px solid white"}
                                onClick={toggleShowProductLink}
                            >
                                <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                <Box width={"100%"}>
                                    <Typography variant='h3' fontWeight={"bold"} textAlign={"center"}>SẢN PHẨM</Typography>
                                </Box>
                            </Stack>
                            {PRODUCTS_MOBILE.map(item =>
                                <Box component={Link}
                                    to={item.path}
                                    color={"white"}
                                    key={item.path}
                                    onClick={toggleOpenHeaderList}
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
                    {/* men slide in childs items */}
                    <Slide
                        direction='left'
                        in={showMenItem}
                        orientation='horizontal'
                        mountOnEnter
                        unmountOnExit
                        timeout={450}
                        sx={{
                            bgcolor: "secondary.100",
                            color: "white",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "100%"
                        }}
                    >
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

                            <Slide
                                direction='left'
                                in={showHighlights.gender === "men" && showHighlights.isShow}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                    </Slide>
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
                    {/* men slide in childs items */}
                    <Slide
                        direction='left'
                        in={showWomenItem}
                        orientation='horizontal'
                        mountOnEnter
                        unmountOnExit
                        timeout={450}
                        sx={{
                            bgcolor: "secondary.100",
                            color: "white",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            minHeight: "100%"
                        }}
                    >
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

                            <Slide
                                direction='left'
                                in={showHighlights.gender === "women" && showHighlights.isShow}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100vh"
                                }}
                            >
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
                                            onClick={toggleOpenHeaderList}
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
                                            onClick={toggleOpenHeaderList}
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
                    </Slide>
                </Box>
                {/* end link  item */}

                {/* start link item */}
                <Box component={Link} to="/promotion/clearance-sale/" color={"white"}>
                    <Box
                        p={3}
                        borderBottom={"3px solid"}
                        borderColor={"secondary.200"}
                        onClick={toggleOpenHeaderList}
                    >
                        <Typography variant='h3' fontWeight={"bold"}>SALE OFF</Typography>
                    </Box>
                </Box>
                {/* end link  item */}

                {/* start link item */}
                <Box component={Link} to="/tracking-order/1" color={"white"}>
                    <Stack
                        direction={"row"}
                        justifyContent={"start"}
                        p={3}
                        borderBottom={"2px solid"}
                        borderColor={"secondary.200"}
                        onClick={toggleOpenHeaderList}
                        alignItems={"center"}
                    >
                        <Box component={"img"} src={TrackingOrderIcon} width={30} />
                        <Typography variant='h4' fontWeight={"bold"} pl={2}>
                            Tra cứu đơn hàng
                        </Typography>
                    </Stack>
                </Box>
                {/* end link  item */}

                {/* start link item */}
                <Box component={Link} to="/wishlist" color={"white"}>
                    <Stack
                        direction={"row"}
                        justifyContent={"start"}
                        p={3}
                        borderBottom={"2px solid"}
                        borderColor={"secondary.200"}
                        onClick={toggleOpenHeaderList}
                        alignItems={"center"}
                    >
                        <Box component={"img"} src={LoveIcon} width={30} />
                        <Typography variant='h4' fontWeight={"bold"} pl={2}>
                            Yêu thích
                        </Typography>
                    </Stack>
                </Box>
                {/* end link  item */}

                {!currentUser ?
                    <Box component={Link} to="/signin" color={"white"}>
                        <Stack
                            direction={"row"}
                            justifyContent={"start"}
                            p={3}
                            borderBottom={"2px solid"}
                            borderColor={"secondary.200"}
                            onClick={toggleOpenHeaderList}
                            alignItems={"center"}
                        >
                            <Box component={"img"} src={ProfileIcon} width={30} />
                            <Typography variant='h4' fontWeight={"bold"} pl={2}>
                                Đăng nhập
                            </Typography>
                        </Stack>
                    </Box>
                    :
                    <Fragment>
                        {/* start link item */}
                        <Box>
                            <Stack
                                direction={"row"}
                                p={3}
                                borderBottom={"1px dashed"}
                                borderColor={"secondary.200"}
                                onClick={toggleShowAccountList}>
                                <Box component={"img"} src={ProfileIcon} width={30} />
                                <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} pl={2} width={1}>
                                    <Typography variant='h4' fontWeight={"bold"}>Tài khoản</Typography>
                                    <NavigateNextIcon sx={{ fontSize: "3em" }} />
                                </Stack>
                            </Stack>
                            <Slide
                                direction='left'
                                in={showAccountList}
                                orientation='horizontal'
                                mountOnEnter
                                unmountOnExit
                                timeout={450}
                                sx={{
                                    bgcolor: "secondary.100",
                                    color: "white",
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    minHeight: "100%"
                                }}
                            >
                                <Box>
                                    <Stack
                                        direction={"row"}
                                        p={3}
                                        borderBottom={"3px solid white"}
                                        onClick={toggleShowAccountList}
                                    >
                                        <ArrowBackIosIcon sx={{ fontSize: "3em" }} />
                                        <Box textAlign={"center"} width={"100%"}>
                                            <Typography variant='h3' fontWeight={"bold"} textTransform={"uppercase"}>tài khoản</Typography>
                                        </Box>
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        p={3}
                                        borderBottom={"1px dashed"}
                                        borderColor={"secondary.200"}
                                    >
                                        <MuiLink
                                            component={Link}
                                            to={"/user/profile"}
                                            variant='h4'
                                            color={"white"}
                                            onClick={toggleOpenHeaderList}>
                                            Tài khoản của tôi
                                        </MuiLink>
                                    </Stack>
                                    <Stack
                                        direction={"row"}
                                        justifyContent={"space-between"}
                                        p={3}
                                        borderBottom={"1px dashed"}
                                        borderColor={"secondary.200"}
                                    >
                                        <MuiLink
                                            component={Link}
                                            to={"/user/purchase"}
                                            variant='h4'
                                            color={"white"}
                                            onClick={toggleOpenHeaderList}>
                                            Đơn mua
                                        </MuiLink>
                                    </Stack>
                                </Box>
                            </Slide>
                        </Box>
                        {/* end link  item */}
                    </Fragment>
                }
            </Box>

        </Box >
    );
}

export default HeaderMobile;