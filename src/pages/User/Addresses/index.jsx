import { Add } from '@mui/icons-material';
import { Button, Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { AccountSidebar, AddAddressForm, AddressItem } from '../../../compositions';

function AddressesPage(props) {
    const [showAddressForm, setShowAddressForm] = useState(false);

    function toggleShowAddressForm() {
        setShowAddressForm(!showAddressForm);
    }

    //test data only
    const tempList = [
        {
            id: 1,
            fullName: "Nguyễn Văn A",
            phoneNumber: "0123456789",
            city: {
                code: 1,
                name: "Hồ Chí Minh"
            },
            district: {
                code: 1,
                name: "Quận 1"
            },
            ward: {
                code: 1,
                name: "Phường 1"
            },
            specificAddress: "123 đường 123",
            isDefault: false
        },
        {
            id: 2,
            fullName: "Nguyễn Văn A",
            phoneNumber: "0123456789",
            city: {
                code: 1,
                name: "Hồ Chí Minh"
            },
            district: {
                code: 1,
                name: "Quận 1"
            },
            ward: {
                code: 1,
                name: "Phường 1"
            },
            specificAddress: "123 đường 123",
            isDefault: true
        },
    ];

    //test data only
    const sortedTempList = tempList.sort((a, b) => b.isDefault - a.isDefault);

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
                <Typography variant='h6' mb={3}>Địa chỉ</Typography>
                {sortedTempList.map((item) =>
                    <AddressItem key={item.id} item={item} />
                )}
            </Grid>
        </Grid>
    );
}

export default AddressesPage;