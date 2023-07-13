import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Button, Collapse, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GovIcon from "../../../assets/icon/icon_bocongthuong.png";
import FacebookIcon from "../../../assets/icon/icon_facebook.svg";
import InstagramIcon from "../../../assets/icon/icon_instagram.svg";
import YouTubeIcon from "../../../assets/icon/icon_youtube.svg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function FooterMobile(props) {
    const productsLink = [
        {
            path: "product-list?gender=men&category=shoes&attribute=",
            title: "Giày Nam"
        },
        {
            path: "product-list?gender=women&category=shoes&attribute=",
            title: "Giày Nữ"
        },
        {
            path: "product-list?gender=men,women&category=top,bottom,accessories&attribute=",
            title: "Thời trang & Phụ kiện"
        },
        {
            path: "promotion/clearance-sale/",
            title: "Sale-off"
        },
    ];
    const aboutLinks = [
        {
            path: "",
            title: "Dứa tuyển dụng"
        },
        {
            path: "",
            title: "Liên hệ nhượng quyền"
        },
        {
            path: "",
            title: "Về Ananas"
        }
    ];

    const supportLinks = [
        {
            path: "/faqs",
            title: "FAQs"
        },
        {
            path: "/privacy",
            title: "Bảo mật thông tin"
        },
        {
            path: "/policy",
            title: "Chính sách chung"
        },
        {
            path: "/tracking-order",
            title: "Tra cứu đơn hàng"
        },
    ];
    const contactLinks = [
        {
            path: "mailto:devwebchichoo@gmail.com",
            title: "Email góp ý"
        },
        {
            path: "tel:0987654321",
            title: "Hotline: 0987 654 321"
        }
    ];

    const [showProductLinks, setShowProductLinks] = useState(false);
    function toggleProductLinks() {
        setShowProductLinks(!showProductLinks);
    }

    const [showAboutLinks, setShowAboutLinks] = useState(false);
    function toggleAboutLinks() {
        setShowAboutLinks(!showAboutLinks);
    }

    const [showSupportLinks, setShowSupportLinks] = useState(false);
    function toggleSupportLinks() {
        setShowSupportLinks(!showSupportLinks);
    }

    const [showContactLinks, setShowContactLinks] = useState(false);
    function toggleContactLinks() {
        setShowContactLinks(!showContactLinks);
    }

    return (
        <Stack direction={"column"} bgcolor={"secondary.100"}>
            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={3}
                alignItems={"center"}
                borderBottom={"1px dashed"}
                borderColor={"secondary.200"}
                onClick={toggleProductLinks}
            >
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={showProductLinks ? "primary.main" : "white"}
                >
                    sản phẩm
                </Typography>
                {showProductLinks ?
                    <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showProductLinks ? "primary.main" : "white" }} /> :
                    <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showProductLinks ? "primary.main" : "white" }} />
                }
            </Stack>
            <Collapse
                in={showProductLinks}
                mountOnEnter
                unmountOnExit
            >
                <Stack direction={"column"} p={3} bgcolor={"secondary.main"}>
                    {
                        productsLink.map((item, index) =>
                            <Box
                                component={Link}
                                to={item.path}
                                fontSize={"1.6rem"}
                                color={"white"}
                                py={1}
                                sx={{
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                                key={index}>
                                {item.title}
                            </Box>
                        )
                    }
                </Stack>
            </Collapse>

            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={3}
                alignItems={"center"}
                borderBottom={"1px dashed"}
                borderColor={"secondary.200"}
                onClick={toggleAboutLinks}
            >
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={showAboutLinks ? "primary.main" : "white"}
                >
                    về công ty
                </Typography>
                {showAboutLinks ?
                    <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showAboutLinks ? "primary.main" : "white" }} /> :
                    <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showAboutLinks ? "primary.main" : "white" }} />
                }
            </Stack>
            <Collapse
                in={showAboutLinks}
                mountOnEnter
                unmountOnExit
            >
                <Stack direction={"column"} p={3} bgcolor={"secondary.main"}>
                    {
                        aboutLinks.map((item, index) =>
                            <Box
                                component={Link}
                                to={item.path}
                                fontSize={"1.6rem"}
                                color={"white"}
                                py={1}
                                sx={{
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                                key={index}>
                                {item.title}
                            </Box>
                        )
                    }
                </Stack>
            </Collapse>

            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={3}
                alignItems={"center"}
                borderBottom={"1px dashed"}
                borderColor={"secondary.200"}
                onClick={toggleSupportLinks}
            >
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={showSupportLinks ? "primary.main" : "white"}
                >
                    hỗ trợ
                </Typography>
                {showSupportLinks ?
                    <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showSupportLinks ? "primary.main" : "white" }} /> :
                    <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showSupportLinks ? "primary.main" : "white" }} />
                }
            </Stack>
            <Collapse
                in={showSupportLinks}
                mountOnEnter
                unmountOnExit
            >
                <Stack direction={"column"} p={3} bgcolor={"secondary.main"}>
                    {
                        supportLinks.map((item, index) =>
                            <Box
                                component={Link}
                                to={item.path}
                                fontSize={"1.6rem"}
                                color={"white"}
                                py={1}
                                sx={{
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                                key={index}>
                                {item.title}
                            </Box>
                        )
                    }
                </Stack>
            </Collapse>

            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={3}
                alignItems={"center"}
                borderBottom={"1px dashed"}
                borderColor={"secondary.200"}
                onClick={toggleContactLinks}
            >
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={showContactLinks ? "primary.main" : "white"}
                >
                    liên hệ
                </Typography>
                {showContactLinks ?
                    <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showContactLinks ? "primary.main" : "white" }} /> :
                    <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showContactLinks ? "primary.main" : "white" }} />
                }
            </Stack>
            <Collapse
                in={showContactLinks}
                mountOnEnter
                unmountOnExit
            >
                <Stack direction={"column"} p={3} bgcolor={"secondary.main"}>
                    {
                        contactLinks.map((item, index) =>
                            <Box
                                component={Link}
                                to={item.path}
                                fontSize={"1.6rem"}
                                color={"white"}
                                py={1}
                                sx={{
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                                key={index}>
                                {item.title}
                            </Box>
                        )
                    }
                </Stack>
            </Collapse>

            <Stack
                direction={"row"}
                justifyContent={"space-between"}
                p={3}
                alignItems={"center"}
            >
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"white"}
                >
                    ananas social
                </Typography>
            </Stack>
            <Stack direction={"row"} pl={3} pb={2} spacing={2}>
                <Box component={"img"} src={FacebookIcon} />
                <Box component={"img"} src={InstagramIcon} />
                <Box component={"img"} src={YouTubeIcon} />
            </Stack>
            <Stack direction={"row"} p={3} spacing={2}>
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    color={"white"}
                >
                    đăng ký nhận email
                </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} px={3} >
                <TextField
                    variant="outlined"
                    type='email'
                    placeholder='Email nhận tin'
                    sx={{
                        bgcolor: "white",
                        width: "100%"
                    }}
                    required />
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: 0,
                    }}
                >
                    <ArrowForwardIcon />
                </Button>
            </Stack>
            <Box component={Link} to={""} p={3}>
                <Button variant='contained' sx={{
                    borderRadius: 0,
                    textTransform: "uppercase",
                    fontSize: "1.4rem",
                    fontWeight: "bold",
                    p: 3,
                    width: "100%"
                }}>
                    tìm cửa hàng
                </Button>
            </Box>
            <Stack direction={"column"} alignItems={"center"} px={2}>
                <Typography fontSize={"1.5rem"} my={3} color={"secondary.200"}>
                    Copyright © {new Date().getFullYear()} Ananas. All rights reserved.
                </Typography>
                <Box component={"img"} src={GovIcon} pb={3} />
            </Stack>
        </Stack>
    );
}

export default FooterMobile;