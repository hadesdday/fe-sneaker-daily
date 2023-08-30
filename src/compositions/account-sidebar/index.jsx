import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { Link as MuiLink, Stack, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../store/user/user.selector';

function AccountSidebar(props) {
    const user = useSelector(selectCurrentUser);

    const path = window.location.pathname;
    return (
        <Stack direction={"column"} alignItems={"center"} bgcolor={"secondary.light"} justifyContent={"center"} py={3}>
            <Stack
                direction={"column"}
                justifyContent={"center"}
                width={100}
                height={100}
                bgcolor={"grey.100"}
                borderRadius={"50%"}
                textAlign={"center"}
                fontSize={"40px"}
                textTransform={"uppercase"}
                color={"white"}
                fontWeight={"bold"}
                mb={2}
            >
                {user.name.charAt(0)}
            </Stack>
            <Typography>Xin chào <Typography color={"primary.main"} component={"span"} fontWeight={"bold"}>{user.name}</Typography>
            </Typography>
            <Stack direction={"column"} justifyContent={"center"}>
                <Stack direction={"row"} py={"3px"}>
                    <MuiLink component={Link} to={"/user/profile"}
                        color={path.includes("/user/profile") && "primary.main"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ":hover": {
                                color: "primary.main"
                            },
                        }}
                    >
                        <AccountCircleIcon fontSize='small' sx={{ mr: 1, color: path.includes("/user/profile") && "primary.main" }} />
                        Thông tin tài khoản
                    </MuiLink>
                </Stack>
                <Stack direction={"row"} py={"3px"}>
                    <MuiLink component={Link} to={"/user/purchase"}
                        color={path.includes("/user/purchase") && "primary.main"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ":hover": {
                                color: "primary.main"
                            },
                        }}
                    >
                        <AssignmentIcon fontSize='small' sx={{ mr: 1, color: path.includes("/user/purchase") && "primary.main" }} />
                        Đơn mua
                    </MuiLink>
                </Stack>
                <Stack direction={"row"} py={"3px"}>
                    <MuiLink component={Link} to={"/user/addresses"}
                        color={path.includes("/user/addresses") && "primary.main"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ":hover": {
                                color: "primary.main"
                            },
                        }}
                    >
                        <LocationOnIcon fontSize='small' sx={{ mr: 1, color: path.includes("/user/addresses") && "primary.main" }} />
                        Danh sách địa chỉ
                    </MuiLink>
                </Stack>
                <Stack direction={"row"} py={"3px"}>
                    <MuiLink component={Link} to={"/user/change-password"}
                        color={path.includes("/user/change-password") && "primary.main"}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ":hover": {
                                color: "primary.main"
                            },
                        }}
                    >
                        <PasswordOutlinedIcon fontSize='small' sx={{ mr: 1, color: path.includes("/user/change-password") && "primary.main" }} />
                        Đổi mật khẩu
                    </MuiLink>
                </Stack>
            </Stack>
        </Stack >
    );
}

export default AccountSidebar;