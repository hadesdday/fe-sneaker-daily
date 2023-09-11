import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Card, CardContent, CircularProgress, IconButton, InputAdornment, Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import Banner from "../../../assets/banner/banner-1.jpg";
import { CustomTextField, LoginFacebookButton, LoginGoogleButton } from '../../../components';
import { OtpForm } from '../../../compositions';
import { useSignupFormSchema } from '../../../hooks';

function SignupPage(props) {
    const schema = useSignupFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, reset, getValues } = useForm({
        defaultValues: {
            username: "",
            password: "",
            fullname: "",
            repassword: ""
        },
        resolver: yupResolver(schema)
    });

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("call api here");
                console.log(data);
                resolve(data);
            }, 1000);
        })
    }

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleClickShowRePassword = () => {
        setShowRePassword((show) => !show);
    };

    function onResetForm() {
        reset();
    }

    const submittedEmail = getValues('username');

    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "end" }}
            sx={{
                backgroundImage: `url(${Banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100%",
            }}
        >
            <Box px={{ xs: 1, sm: 20, md: 15 }}>
                <Card sx={{ width: { xs: "100%", sm: 400 }, mt: 6 }}>
                    {!isSubmitSuccessful ?
                        <CardContent>
                            <Typography variant='h4' textAlign={"center"}>Đăng ký</Typography>
                            <Stack direction={"column"} spacing={5} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} pt={4}>
                                <CustomTextField
                                    name='username'
                                    control={control}
                                    label='Email'
                                />
                                <CustomTextField
                                    name='fullname'
                                    control={control}
                                    label='Họ và Tên'
                                />
                                <CustomTextField
                                    name='password'
                                    control={control}
                                    type={showPassword ? 'text' : 'password'}
                                    label='Mật khẩu'
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                />
                                <CustomTextField
                                    name='repassword'
                                    control={control}
                                    type={showRePassword ? 'text' : 'password'}
                                    label='Nhập lại mật khẩu'
                                    InputProps={{
                                        endAdornment:
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowRePassword}
                                                    edge="end"
                                                >
                                                    {showRePassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={isSubmitting}
                                    startIcon={
                                        isSubmitting && (
                                            <CircularProgress color="inherit" size={"1em"} />
                                        )
                                    }
                                    sx={{
                                        fontWeight: "bold"
                                    }}
                                >
                                    đăng ký
                                </Button>
                            </Stack>
                            <Stack
                                direction={"row"}
                                alignItems={"center"}
                                pt={3}
                                pb={2}
                            >
                                <Box sx={{
                                    height: "1px",
                                    width: "100%",
                                    bgcolor: "secondary.800"
                                }} />
                                <Typography
                                    variant={"body2"}
                                    sx={{
                                        px: 3,
                                        textTransform: "uppercase",
                                        color: "secondary.300"
                                    }}>
                                    Hoặc
                                </Typography>
                                <Box sx={{
                                    height: "1px",
                                    width: "100%",
                                    bgcolor: "secondary.800"
                                }} />
                            </Stack>
                            <Stack direction={"row"} justifyContent={"center"} spacing={1} pt={2} pb={4}>
                                <Box flexGrow={1}>
                                    <LoginSocialGoogle
                                        client_id={import.meta.env.VITE_GOOGLE_APP_ID || ''}
                                        onLoginStart={onLoginStart}
                                        redirect_uri={import.meta.env.VITE_REDIRECT_URI || ''}
                                        scope="openid profile email"
                                        discoveryDocs="claims_supported"
                                        access_type="offline"
                                        onResolve={({ provider, data }) => {
                                            console.log(`signup ${provider} success`, data);
                                        }}
                                        onReject={err => {
                                            console.log("signup error", err);
                                        }}
                                    >
                                        <LoginGoogleButton />
                                    </LoginSocialGoogle>
                                </Box>
                                <Box flexGrow={1}>
                                    <LoginSocialFacebook
                                        appId={import.meta.env.VITE_FACEBOOK_APP_ID || ''}
                                        fieldsProfile={
                                            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
                                        }
                                        onLoginStart={onLoginStart}
                                        // onLogoutSuccess={onLogoutSuccess}
                                        redirect_uri={import.meta.env.VITE_REDIRECT_URI || ''}
                                        onResolve={({ provider, data }) => {
                                            console.log(`signup ${provider} success`, data);
                                        }}
                                        onReject={err => {
                                            console.log("signup error", err);
                                        }}
                                    >
                                        <LoginFacebookButton />
                                    </LoginSocialFacebook>
                                </Box>
                            </Stack>
                            <Typography textAlign={"center"}>Bạn đã có tài khoản?
                                <MuiLink component={Link} to={"/signin"} color={"primary.main"}> Đăng nhập</MuiLink>
                            </Typography>
                        </CardContent>
                        :
                        <CardContent>
                            <Stack direction={"row"} alignItems={"center"}>
                                <IconButton onClick={onResetForm}>
                                    <ArrowBackIcon sx={{ color: "primary.main" }} />
                                </IconButton>
                                <Box width={"80%"}>
                                    <Typography variant='h5' textAlign={"center"}>Xác thực tài khoản</Typography>
                                </Box>
                            </Stack>
                            <Typography textAlign={"center"} pt={3}>Mã xác thực đã được gửi đến mail của bạn. Vui lòng kiểm tra hòm thư của bạn.</Typography>
                            {/* otp form here */}
                            <OtpForm submittedEmail={submittedEmail} />
                        </CardContent>
                    }
                </Card>
            </Box>
        </Stack>
    );
}

export default SignupPage;