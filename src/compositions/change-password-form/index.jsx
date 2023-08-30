import { Box, Button, CircularProgress, IconButton, InputAdornment, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useChangePasswordFormSchema } from '../../hooks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomTextField from '../../components/textfield';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function ChangePasswordForm(props) {
    const schema = useChangePasswordFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful }, reset, getValues } = useForm({
        defaultValues: {
            email: "email@gmail.com",
            oldPassword: "",
            newPassword: "",
            confirmPassword: ""
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
    const [showOldPassword, setShowOldPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show);
    };

    const handleClickShowRePassword = () => {
        setShowRePassword((show) => !show);
    };

    const handleClickShowOldPassword = () => {
        setShowOldPassword((show) => !show);
    };

    return (
        <Stack direction={"column"} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} spacing={2}>
            <CustomTextField
                name='oldPassword'
                control={control}
                label='Mật khẩu cũ'
                type={showOldPassword ? 'text' : 'password'}
                InputProps={{
                    endAdornment:
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowOldPassword}
                                edge="end"
                            >
                                {showOldPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                }}
            />
            <CustomTextField
                name='newPassword'
                control={control}
                label='Mật khẩu mới'
                type={showPassword ? 'text' : 'password'}
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
                name='confirmPassword'
                control={control}
                label='Xác nhận mật khẩu mới'
                type={showRePassword ? 'text' : 'password'}
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
            <Box>
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
            </Box>
        </Stack>
    );
}

export default ChangePasswordForm;