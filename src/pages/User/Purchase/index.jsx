import { Grid, Typography } from '@mui/material';
import React from 'react';
import { AccountSidebar, RecentlyOrderTable } from '../../../compositions';

function PurchaseHistoryPage(props) {
    return (
        <Grid container px={{ xs: 2, sm: 7, md: 12, lg: 23 }} mt={7} columnSpacing={3}>
            <Grid item xs={12} md={3}>
                <AccountSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                <Typography variant='h4'
                    textTransform={"uppercase"}
                    fontWeight={"bold"}
                    textAlign={"center"}
                    borderBottom={"1px solid"}
                    borderColor={"secondary.300"}
                    pb={3}
                    mb={5}
                >
                    đơn hàng của bạn
                </Typography>
                <RecentlyOrderTable />
            </Grid>
        </Grid>
    );
}

export default PurchaseHistoryPage;