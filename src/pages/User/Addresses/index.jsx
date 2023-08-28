import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AccountSidebar, AddAddressForm } from '../../../compositions';

function AddressesPage(props) {
    const [showAddressForm, setShowAddressForm] = useState(false);

    function toggleShowAddressForm() {
        setShowAddressForm(!showAddressForm);
    }

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
                    mb={5}
                    mt={{ xs: 4 }}
                >
                    <Typography variant='h4'
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        địa chỉ của tôi
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={
                            <Add />
                        }
                        onClick={toggleShowAddressForm}
                    >
                        Thêm địa chỉ mới
                    </Button>
                    <Dialog onClose={toggleShowAddressForm} open={showAddressForm} fullWidth>
                        <DialogTitle borderBottom={"1px solid"} variant='h5'>
                            Thêm địa chỉ mới
                        </DialogTitle>
                        <DialogContent>
                            <AddAddressForm toggleShowAddressForm={toggleShowAddressForm} />
                        </DialogContent>
                    </Dialog>
                </Stack>
            </Grid>
        </Grid >
    );
}

export default AddressesPage;