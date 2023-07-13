import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Link as MuiLink, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import StoreImage from "../../../assets/Store.svg";
import GovIcon from "../../../assets/icon/icon_bocongthuong.png";
import FacebookIcon from "../../../assets/icon/icon_facebook.svg";
import InstagramIcon from "../../../assets/icon/icon_instagram.svg";
import YouTubeIcon from "../../../assets/icon/icon_youtube.svg";

function FooterDesktop(props) {
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


    return (
        <Stack
            direction={"row"}
            spacing={8}
            p={6}
            display={{ xs: "none", lg: "flex" }}
        >
            <Stack direction={"column"}>
                <Box component={"img"} src={StoreImage}></Box>
                <Button
                    variant={"contained"}
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        mt: 3,
                        borderRadius: 0,
                    }}>
                    Tìm cửa hàng
                </Button>
            </Stack>
            <Stack direction={"column"}>
                <Box component={Link}
                    to="product-list/"
                    textTransform={"uppercase"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    pb={3}
                >
                    Sản phẩm
                </Box>
                {productsLink.map(item =>
                    <Box component={Link}
                        to={item.path}
                        color={"white"}
                        mb={1}
                        sx={{
                            transition: "all 0.2s",
                            ":hover": {
                                color: "primary.main"
                            }
                        }}
                        key={item.path}
                    >
                        {item.title}
                    </Box>
                )}
                <Typography
                    fontSize={"1.3rem"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    mt={3}
                    mb={2}
                    color={"white"}>
                    ananas social
                </Typography>
                <Stack direction={"row"} spacing={1}>
                    <Box component={MuiLink} href='https://www.facebook.com/Ananas.vietnam/' target='_blank'>
                        <Box component={"img"} src={FacebookIcon} />
                    </Box>
                    <Box component={MuiLink} href='https://www.instagram.com/ananasvn/' target='_blank'>
                        <Box component={"img"} src={InstagramIcon} />
                    </Box>
                    <Box component={MuiLink} href='https://www.youtube.com/discoveryou' target='_blank'>
                        <Box component={"img"} src={YouTubeIcon} />
                    </Box>
                </Stack>
                <Box component={MuiLink} href='http://online.gov.vn/Home/WebDetails/61921' target='_blank' mt={5}>
                    <Box component={"img"} src={GovIcon} />
                </Box>
            </Stack>
            <Stack direction={"column"}>
                <Box component={Link}
                    to="/"
                    textTransform={"uppercase"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    pb={3}
                >
                    về công ty
                </Box>
                {aboutLinks.map((item, index) =>
                    <Box component={Link}
                        to={item.path}
                        color={"white"}
                        mb={1}
                        sx={{
                            transition: "all 0.2s",
                            ":hover": {
                                color: "primary.main"
                            }
                        }}
                        key={index}
                    >
                        {item.title}
                    </Box>
                )}
                <Typography
                    fontSize={"1.3rem"}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    mt={7}
                    mb={2}
                    color={"white"}>
                    đăng ký nhận mail
                </Typography>
                <Stack direction={{ md: "column", lg: "row" }} spacing={1}>
                    <TextField
                        variant="outlined"
                        type='email'
                        placeholder='Email nhận tin'
                        sx={{ bgcolor: "white" }}
                        required />
                    <Button variant='contained' sx={{ borderRadius: 0 }}>
                        <ArrowForwardIcon />
                    </Button>
                </Stack>
                <Typography mt={7} color={"secondary.200"}>
                    Copyright © {new Date().getFullYear()} Ananas. All rights reserved.
                </Typography>
            </Stack>
            <Stack direction={"column"}>
                <Box component={Link}
                    to="/"
                    textTransform={"uppercase"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    pb={3}
                >
                    hỗ trợ
                </Box>
                {supportLinks.map((item, index) =>
                    <Box component={Link}
                        to={item.path}
                        color={"white"}
                        sx={{
                            transition: "all 0.2s",
                            ":hover": {
                                color: "primary.main"
                            }
                        }}
                        mb={1}
                        key={index}
                    >
                        {item.title}
                    </Box>
                )}
            </Stack>
            <Stack direction={"column"}>
                <Box component={Link}
                    to="/"
                    textTransform={"uppercase"}
                    color={"white"}
                    fontWeight={"bold"}
                    fontSize={"1.3rem"}
                    pb={3}
                >
                    Liên hệ
                </Box>
                {contactLinks.map((item, index) =>
                    <Box component={MuiLink}
                        href={item.path}
                        target='_blank'
                        color={"white"}
                        sx={{
                            transition: "all 0.2s",
                            ":hover": {
                                color: "primary.main"
                            }
                        }}
                        mb={1}
                        key={index}
                    >
                        {item.title}
                    </Box>
                )}
            </Stack>
        </Stack>
    );
}

export default FooterDesktop;