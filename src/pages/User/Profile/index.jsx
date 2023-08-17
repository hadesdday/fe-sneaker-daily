import { yupResolver } from '@hookform/resolvers/yup';
import CloseIcon from '@mui/icons-material/Close';
import { Button, CircularProgress, Dialog, DialogContent, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomDatepicker } from '../../../components';
import CustomTextField from '../../../components/textfield';
import { AccountSidebar } from '../../../compositions';
import { useAccountInformationFormSchema } from '../../../hooks';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import EnhancedTable from '../../../compositions/recently-order';

function ProfilePage(props) {
    const [showDialog, setShowDialog] = useState(false);

    function toggleShowDialog() {
        setShowDialog(!showDialog);
    }

    const schema = useAccountInformationFormSchema();

    const { control, handleSubmit, formState: { isSubmitting } } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            phoneNumber: "",
            address: "",
            dob: "",
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
        <Grid container px={{ xs: 2, sm: 7, md: 12, lg: 23 }} mt={7} columnSpacing={3}>
            <Grid item xs={12} md={3}>
                <AccountSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                <Grid container>
                    <Grid item xs={12} sm={8}>
                        <Typography fontWeight={"bold"} textTransform={"uppercase"}>thông tin tài khoản</Typography>
                        <Grid container pt={2} rowGap={1}>
                            <Grid item xs={2}>
                                <Typography color={"secondary.400"}>Họ và tên:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Nguyễn Văn Hiếu</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography color={"secondary.400"}>Email:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>email@gmail.com</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography color={"secondary.400"}>Địa chỉ:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>Khu Phố 6 , Linh Trung, Thủ Đức, TPHCM</Typography>
                            </Grid>

                            <Grid item xs={2}>
                                <Typography color={"secondary.400"}>Điện thoại:</Typography>
                            </Grid>
                            <Grid item xs={10}>
                                <Typography>0987654321</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Button variant='contained' onClick={toggleShowDialog}>Cập nhập thông tin tài khoản</Button>
                        <Dialog onClose={toggleShowDialog} open={showDialog} fullWidth>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                pl={3}
                                pt={1}
                                pb={1}
                                borderBottom={"2px solid"}
                                borderColor={"secondary.200"}
                            >
                                <Typography variant='h4'>
                                    Cập nhật thông tin tài khoản
                                </Typography>
                                <IconButton onClick={toggleShowDialog}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                            <DialogContent>
                                <Stack direction={"column"} component={"form"} onSubmit={handleSubmit(handleSubmitForm)} spacing={2}>
                                    <CustomTextField
                                        name='fullname'
                                        control={control}
                                        label='Họ và tên'
                                    />
                                    <CustomTextField
                                        name='email'
                                        control={control}
                                        label='Email'
                                    />
                                    <CustomTextField
                                        name='phoneNumber'
                                        control={control}
                                        label='Số điện thoại'
                                    />
                                    <CustomTextField
                                        name='address'
                                        control={control}
                                        label='Địa chỉ'
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <CustomDatepicker
                                            name='dob'
                                            control={control}
                                            label='Ngày sinh'
                                        />
                                    </LocalizationProvider>

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
                                        cập nhật thông tin
                                    </Button>
                                </Stack>
                            </DialogContent>
                        </Dialog>
                    </Grid>
                </Grid>
                <EnhancedTable />
            </Grid>
        </Grid>
    );
}

export default ProfilePage;