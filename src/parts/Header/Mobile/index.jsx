import SearchIcon from '@mui/icons-material/Search';
import { Box, Dialog, DialogTitle, Grid, IconButton, InputAdornment, OutlinedInput, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import CartIcon from "../../../assets/icon/mb_cart.png";
import Logo from "../../../assets/logo.svg";
import TogglerMenu from '../../../components/toggler-menu';

function HeaderMobile(props) {
    const cartItems = [];
    const navigate = useNavigate();

    const [showSearchDialog, setShowSearchDialog] = useState(false);

    function onToggleSearchDialog() {
        setShowSearchDialog(!showSearchDialog);
    }

    function onSearchHandle() {
        console.log("triggered toggle search dialog");
        onToggleSearchDialog();
        navigate("search-results/?key=giay");
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
                    <TogglerMenu />
                </Grid>
            </Grid>
        </Box >
    );
}

export default HeaderMobile;