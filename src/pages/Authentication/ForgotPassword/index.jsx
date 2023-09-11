import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Card, CardContent, CircularProgress, IconButton, Stack, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import Banner from "../../../assets/banner/banner-1.jpg";
import { OtpForm, ResetPasswordForm } from '../../../compositions';
import { useForgotPasswordFormSchema } from '../../../hooks';
import { CustomTextField } from '../../../components';

function ForgotPasswordPage(props) {
    const schema = useForgotPasswordFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, reset, getValues } = useForm({
        defaultValues: {
            email: ""
        },
        resolver: yupResolver(schema)
    });

    const [validCode, setValidCode] = useState(false);

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("call api here");
                setValidCode(false);
                console.log(data);
                resolve(data);
            }, 1000);
        })
    }

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
                            <Typography variant='h4' textAlign={"center"}>Đặt lại mật khẩu</Typography>
                            <Stack direction={"column"} spacing={5} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} pt={4}>
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
                                    tiếp theo
                                </Button>
                            </Stack>
                        </CardContent>
                        :
                        <CardContent>
                            {validCode ?
                                <ResetPasswordForm />
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
                                    <OtpForm
                                        submittedEmail={submittedEmail}
                                        type={"forgot-password"}
                                        setValidCode={setValidCode}
                                    />
                                </Fragment>
                            }
                        </CardContent>
                    }
                </Card>
            </Box>
        </Stack>
    );
}

export default ForgotPasswordPage;