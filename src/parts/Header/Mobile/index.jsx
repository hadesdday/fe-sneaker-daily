import { Box, Grid, Stack, TableContainer, Typography } from '@mui/material';
import React from 'react';
import TogglerMenu from '../../../components/toggler-menu';
import Logo from "../../../assets/logo.svg"
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CartIcon from "../../../assets/icon/mb_cart.png"

function HeaderMobile(props) {
    const cartItems = [];
    return (
        <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
            <Grid container spacing={2}>
                <Grid item xs={3} textAlign={"center"} borderRight={"1px solid"} borderColor={"secondary.light"}>
                    <Box component={Link} to="/">
                        <Box component={"img"} src={Logo} alt="Logo" mt={2}></Box>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Stack direction={"row"} justifyContent={"end"} spacing={4} m={4}>
                        <Stack direction={"row"} alignItems={"flex-end"}>
                            <SearchIcon sx={{ fontSize: "47px" }} />
                        </Stack>
                        <Stack direction={"row"} alignItems={"flex-end"}>
                            <Box component={"img"} src={CartIcon} alt="Cart"></Box>
                            <Typography variant="h4">
                                ({cartItems.length})
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item xs={2} bgcolor={"secondary.100"}>
                    <TogglerMenu />
                </Grid>
            </Grid>
        </Box>
    );
}

export default HeaderMobile;