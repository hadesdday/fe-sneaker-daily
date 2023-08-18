import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckIcon from '@mui/icons-material/Check';
import CircleIcon from '@mui/icons-material/Circle';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Grid, Link as MuiLink, Paper, Stack, Step, StepConnector, StepLabel, Stepper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography, stepConnectorClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { AccountSidebar } from '../../../compositions';
import { getMoneyFormat } from '../../../utils';

function PurchaseDetailsPage(props) {
    let { orderId } = useParams();

    const steps = ['Chờ xử lý', 'Xác thực', 'Đã xuất kho', 'Đang giao hàng', 'Hoàn thành'];

    const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 22,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: "var(--primary-main)"
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: "var(--primary-main)"
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 2,
            border: 0,
            backgroundColor:
                theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderRadius: 1,
        },
    }));

    const CustomLabelStepIcon = styled('div')(({ theme, ownerState }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        ...(ownerState.active && {
            backgroundColor: "var(--primary-main)",
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
        }),
        ...(ownerState.completed && {
            boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
            backgroundColor: "var(--primary-main)"
        }),
    }));

    function CustomStepIcons(props) {
        const { active, completed, className } = props;

        const icons = {
            1: <AssignmentIcon />,
            2: <CheckIcon />,
            3: <InventoryIcon />,
            4: <LocalShippingIcon />,
            5: <CheckIcon />,
        };

        return (
            <CustomLabelStepIcon ownerState={{ completed, active }} className={className}>
                {icons[String(props.icon)]}
            </CustomLabelStepIcon>
        );
    }

    return (
        <Grid container px={{ xs: 2, sm: 7, md: 12, lg: 23 }} mt={7} columnSpacing={3}>
            <Grid item xs={12} md={3}>
                <AccountSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                <Typography variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    borderBottom={"1px solid"}
                    borderColor={"secondary.300"}
                    py={3}
                    mb={5}
                >
                    chi tiết đơn hàng
                </Typography>
                <Box>
                    <Typography fontSize={"larger"} fontWeight={"bold"}>Đơn hàng: #{orderId}</Typography>
                    <Typography fontWeight={"bold"}>Ngày đặt hàng: <Typography component={"span"}>12/12/2021</Typography></Typography>
                    <Grid container mt={2} spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <Stack direction={"column"} spacing={1}>
                                <Typography fontSize={"larger"} fontWeight={"bold"}>Địa chỉ nhận thanh toán</Typography>
                                <Typography fontWeight={"bold"}>Trạng thái thanh toán: <Typography component={"span"}>
                                    Đã thanh toán <CircleIcon sx={{ color: "success.light", fontSize: 15 }} />
                                </Typography>
                                </Typography>
                                <Typography>Họ và tên: Nguyễn Văn A</Typography>
                                <Typography>Địa chỉ 1: Khu Phố 6, Linh Trung, Thủ Đức, TPHCM</Typography>
                                <Typography>Điện thoại: 0987654321</Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Stack direction={"column"} spacing={1}>
                                <Typography fontSize={"larger"}>Địa chỉ gửi hàng</Typography>
                                <Typography>Trạng thái đơn hàng: Đã hoàn thành <CircleIcon sx={{ color: "success.light", fontSize: 15 }} /></Typography>
                                <Typography>Họ và tên: Nguyễn Văn A</Typography>
                                <Typography>Địa chỉ 1: Khu Phố 6, Linh Trung, Thủ Đức, TPHCM</Typography>
                                <Typography>Điện thoại: 0987654321</Typography>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Stepper alternativeLabel activeStep={1} connector={<CustomStepConnector />} sx={{ mt: 6 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={CustomStepIcons}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <TableContainer component={Paper} sx={{ boxShadow: 2, mt: 4 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} width={"25%"}>Sản phẩm</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Mã sản phẩm</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }}>Đơn giá</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} width={"25%"}>Số lượng</TableCell>
                                    <TableCell sx={{ fontWeight: "bold" }} width={"25%"}>Thành tiền</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>
                                        <Box component={"img"} src="https://picsum.photos/300/300" width={100} />
                                    </TableCell>
                                    <TableCell>
                                        <MuiLink component={Link} to={`/product-detail/1`}>Giày thể thao ABCXYZ Autumn Collection High Purple DSLKASJLKAJ ( Tím )</MuiLink>
                                        <Typography>Tím / 40</Typography>
                                    </TableCell>
                                    <TableCell>DSMH06200TIM40</TableCell>
                                    <TableCell>{getMoneyFormat(1231456)}</TableCell>
                                    <TableCell>1</TableCell>
                                    <TableCell>{getMoneyFormat(123456 * 1)}</TableCell>
                                </TableRow>
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>Giá sản phẩm</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>{getMoneyFormat(1123456)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>Giao hàng tận nơi</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>{getMoneyFormat(30000)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>Tổng tiền</TableCell>
                                    <TableCell sx={{ fontWeight: "bold", color: "black", fontSize: "1rem" }}>{getMoneyFormat(123123123)}</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>
                </Box>
            </Grid>
        </Grid>
    );
}

export default PurchaseDetailsPage;