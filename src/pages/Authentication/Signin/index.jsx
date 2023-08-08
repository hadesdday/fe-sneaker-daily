import { Box, Button, Card, CardContent, CircularProgress, Container, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import Banner from "../../../assets/banner/banner-1.jpg";
import { useSigninFormSchema } from '../../../hooks';
import { useForm } from 'react-hook-form';
import CustomTextField from '../../../components/textfield';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { yupResolver } from '@hookform/resolvers/yup';

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

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


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
                                                // onMouseDown={handleMouseDownPassword}
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
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    );
}

export default SigninPage;