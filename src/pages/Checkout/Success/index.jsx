import { Box, Button, Container, Link as MuiLink, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function CheckoutSuccessPage(props) {
    const navigate = useNavigate();

    const orderId = JSON.parse(localStorage.getItem('orderId'));

    useEffect(() => {
        //add more condition here(check if order status is cancelled or success => redirect to home page)
        if (!orderId)
            navigate("/");
        else {
            fetch(`https://jsonplaceholder.typicode.com/posts/${orderId}`)
                .then(response => response.json())
                .then(json => console.log(json))

            localStorage.removeItem('orderId');
        }
    }, []);

    return (
        <Box textAlign={"center"} mt={20}>
            <Container>
                <Typography
                    variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                >
                    đặt hàng thành công
                </Typography>
                <Typography variant='h6' mt={2}>Mã đơn hàng của bạn là
                    <Typography component={"span"} color={"primary.main"} fontWeight={"bold"}> {orderId}</Typography>
                    , hãy lưu lại để tra cứu đơn hàng khi cần thiết. Vui lòng check mail xác nhận để kiểm tra thông tin
                    hoặc tra cứu tình trạng đơn hàng <MuiLink
                        component={Link}
                        to="/tracking-order"
                        color={"primary.main"}
                        fontWeight={"bold"}
                        sx={{ textDecoration: "underline" }}
                    >tại đây
                    </MuiLink>
                    . Gọi ngay hotline <MuiLink
                        href="tel:1900 1234"
                        color={"primary.main"}
                        fontWeight={"bold"}
                        sx={{ textDecoration: "underline" }}
                    >1900 1234</MuiLink> trước khi đơn hàng được chuyển qua giao nhận nếu bạn muốn thay đổi thông tin.
                </Typography>
                <Button
                    variant='contained'
                    sx={{
                        borderRadius: 10,
                        mt: 4,
                        fontWeight: "bold",
                        fontSize: "larger"
                    }}
                    LinkComponent={Link}
                    to="/"
                >
                    Khám phá thêm
                </Button>
            </Container>
        </Box>
    );
}

export default CheckoutSuccessPage;