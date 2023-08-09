import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CircularProgress, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import Banner from "../../../assets/banner/banner-1.jpg";
import { LoginFacebookButton, LoginGoogleButton } from '../../../components';
import CustomTextField from '../../../components/textfield';
import { useSigninFormSchema } from '../../../hooks';

function SigninPage(props) {
    const schema = useSigninFormSchema();

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            username: "",
            password: ""
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
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    return (
        <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{ xs: "center", sm: "end" }}
            // alignItems={"center"}
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
                    <CardContent>
                        <Typography variant='h4' textAlign={"center"}>Đăng nhập</Typography>
                        <Stack direction={"column"} spacing={5} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} pt={4}>
                            <CustomTextField
                                name='username'
                                control={control}
                                label='Email/ Số điện thoại'
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
                                đăng nhập
                            </Button>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} pt={1} pb={2}>
                            <Box component={Link} to={"/forgot-password"}>
                                <Typography variant={"body2"} about="typographyLink">Quên mật khẩu?</Typography>
                            </Box>
                            <Box component={Link} to={"/signup"}>
                                <Typography variant={"body2"} about="typographyLink">Chưa có tài khoản?</Typography>
                            </Box>
                        </Stack>
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
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
                                        console.log(`login ${provider} success`, data);
                                    }}
                                    onReject={err => {
                                        console.log(err);
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
                                        console.log(`login ${provider} success`, data);
                                    }}
                                    onReject={err => {
                                        console.log(err);
                                    }}
                                >
                                    <LoginFacebookButton />
                                </LoginSocialFacebook>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </Stack >
    );
}

export default SigninPage;