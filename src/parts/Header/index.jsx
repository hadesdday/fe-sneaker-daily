import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from "../../assets/icon/cart.svg";
import ProfileIcon from "../../assets/icon/profile.svg";
import LoveIcon from "../../assets/icon/love.svg";
import TrackingOrderIcon from "../../assets/icon/tracking-order.svg";

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
            to: "/login"
        },
        {
            iconSrc: LoveIcon,
            text: `Yêu thích`,
            alt: "Yêu thích",
            to: "/favorite"
        },
        {
            iconSrc: TrackingOrderIcon,
            text: `Tra cứu đơn hàng`,
            alt: "Tra cứu đơn hàng",
            to: "/tracking-order"
        },

    ]

    return (
        <Stack direction={"row"} justifyContent={"end"} bgcolor={"secondary.main"} pr={8}
            flexDirection={"row-reverse"} display={{ xs: "none", md: "flex" }}>
            {itemList.map(item => (
                <Box pr={3} key={item.to}>
                    <Link to={item.to}>
                        <Typography variant='body2' about='firstHeaderLink' display={"flex"} alignItems={"center"} py={1}>
                            <Box component={"img"} src={item.iconSrc} alt={item.alt} pr={1}></Box>
                            {item.text}
                        </Typography>
                    </Link>
                </Box>
            ))}
        </Stack>
    );
}

export default Header;