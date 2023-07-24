import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, CircularProgress, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTrackingOrderFormSchema } from '../../../hooks';
import CustomTextField from '../../components/textfield';

function TrackingOrder(props) {
    const schema = useTrackingOrderFormSchema();

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            orderId: "",
            phoneNumber: ""
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

    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant='h4' fontWeight={"bold"} textTransform={"uppercase"} pb={6}>tra cứu đơn hàng</Typography>
            <Stack direction={"column"} spacing={6} component={"form"} onSubmit={handleSubmit(handleSubmitForm)}>
                <CustomTextField
                    name='orderId'
                    control={control}
                    label='Mã đơn hàng'
                />
                <CustomTextField
                    name='phoneNumber'
                    control={control}
                    label='Số điện thoại'
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
                    Tra cứu đơn hàng
                </Button>
            </Stack>
        </Container>
    );
}

export default TrackingOrder;