import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Collapse, Dialog, DialogTitle, Fade, Grid, IconButton, InputAdornment, OutlinedInput, Slide, Stack, TextField, Typography, Zoom } from '@mui/material';
import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import CartIcon from "../../../assets/icon/mb_cart.png";
import Logo from "../../../assets/logo.svg";
import TogglerMenu from '../../../components/toggler-menu';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { PRODUCTS_MOBILE } from '../../../constants/dummy-data';

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
                </Box>
            }
        </Box>
    );
}

export default HeaderMobile;