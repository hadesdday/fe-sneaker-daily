import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Card, CardContent, CircularProgress, IconButton, Link as MuiLink, Stack, Typography } from '@mui/material';
import React, { Fragment, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { LoginSocialFacebook, LoginSocialGoogle } from 'reactjs-social-login';
import Banner from "../../../assets/banner/banner-1.jpg";
import { LoginFacebookButton, LoginGoogleButton } from '../../../components';
import CustomTextField from '../../../components/textfield';
import { OtpForm } from '../../../compositions';
import { useSigninOtpFormSchema } from '../../../hooks';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SigninOtpPage(props) {
    const schema = useSigninOtpFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, getValues, reset } = useForm({
        defaultValues: {
            email: ""
        },
        resolver: yupResolver(schema)
    });

    const submittedEmail = getValues('email');

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("call api check if called send otp over 6 time => block 24 hours + not send otp");
                console.log(data);
                resolve(data);
            }, 1000);
        })
    }

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    function onResetForm() {
        reset();
    }

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
                    <CardContent>
                        {!isSubmitSuccessful ?
                            <Fragment>
                                <Typography variant='h4' textAlign={"center"}>Đăng nhập</Typography>
                                <Stack
                                    direction={"column"}
                                    spacing={5}
                                    component={"form"}
                                    onSubmit={handleSubmit(handleSubmitForm)}
                                    pt={4}>
                                    <CustomTextField
                                        name='email'
                                        control={control}
                                        label='Email'
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
                                <Stack direction={"row"} justifyContent={"end"} pt={1} pb={2}>
                                    <Box component={Link} to={"/signin"}>
                                        <Typography variant={"body2"} about="typographyLink">Đăng nhập với mật khẩu</Typography>
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
                                <Typography textAlign={"center"}>Chưa có tài khoản?
                                    <MuiLink component={Link} to={"/signup"} color={"primary.main"}> Đăng ký</MuiLink>
                                </Typography>
                            </Fragment>
                            //if first form submitted show otp form
                            :
                            <Fragment>
                                <Stack direction={"row"} alignItems={"center"}>
                                    <IconButton onClick={onResetForm}>
                                        <ArrowBackIcon sx={{ color: "primary.main" }} />
                                    </IconButton>
                                    <Box width={"80%"}>
                                        <Typography variant='h5' textAlign={"center"}>Nhập mã xác nhận</Typography>
                                    </Box>
                                </Stack>
                                <Typography textAlign={"center"} pt={3}>Mã xác nhận đã được gửi đến mail của bạn. Vui lòng kiểm tra hòm thư của bạn.</Typography>
                                {/* otp form here */}
                                <OtpForm submittedEmail={submittedEmail} />
                            </Fragment>
                        }
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    );
}

export default SigninOtpPage;