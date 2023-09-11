import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useResetPasswordFormSchema } from '../../hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomTextField } from '../../components';

function ResetPasswordForm(props) {
    const navigate = useNavigate();

    function handleBack() {
        navigate("/signin");
    }

    const schema = useResetPasswordFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, reset, getValues } = useForm({
        defaultValues: {
            //test data only ( all )
            username: "admin@gmail.com",
            code: "123456",
            password: "",
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

    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleClickShowRePassword = () => {
        setShowRePassword((show) => !show);
    };

    return (
        <Box>
            <Stack direction={"row"} alignItems={"center"}>
                <IconButton onClick={handleBack}>
                    <ArrowBackIcon sx={{ color: "primary.main" }} />
                </IconButton>
                <Box width={"80%"}>
                    <Typography variant='h5' textAlign={"center"}>Thiết lập mật khẩu mới</Typography>
                </Box>
            </Stack>
            <Stack direction={"column"} spacing={5} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} pt={4}>
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
                    Xác nhận
                </Button>
            </Stack>
        </Box>
    );
}

export default ResetPasswordForm;