import { Box, Grid } from '@mui/material';
import React from 'react';
import { AccountSidebar } from '../../../compositions';

function PurchaseHistoryPage(props) {
    return (
        <Grid container px={{ xs: 2, sm: 7, md: 12, lg: 23 }}>
            <Grid item xs={12} md={3}>
                <AccountSidebar />
            </Grid>
            <Grid item xs={12} md={9}>
                purchase content
            </Grid>
        </Grid>
    );
}

export default PurchaseHistoryPage;