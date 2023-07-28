import { Grid } from '@mui/material';
import React from 'react';

function CartPage(props) {
    return (
        <Grid container px={24}>
            <Grid item xs={12} sm={12} md={9}>a</Grid>
            <Grid item xs={12} sm={12} md={3}>b</Grid>
        </Grid>
    );
}

export default CartPage;