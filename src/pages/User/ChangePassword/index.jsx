import React from 'react';
import { AccountSidebar, ChangePasswordForm } from '../../../compositions';
import { Grid, Stack, Typography } from '@mui/material';

function ChangePasswordPage(props) {
    return (
        <Grid container px={{ xs: 2, sm: 7, md: 12, lg: 23 }} mt={7} columnSpacing={3}>
            <Grid item xs={12} md={3}>
                <AccountSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    borderBottom={"1px solid"}
                    borderColor={"secondary.300"}
                    pb={3}
                    mb={3}
                    mt={{ xs: 4, sm: 0 }}
                >
                    <Typography variant='h4'
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        đổi mật khẩu
                    </Typography>
                </Stack>
                <ChangePasswordForm />
            </Grid>
        </Grid>
    );
}

export default ChangePasswordPage;