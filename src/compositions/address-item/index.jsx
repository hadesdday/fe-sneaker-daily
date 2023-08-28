import { Box, Button, Dialog, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import EditAddressForm from '../edit-address-form';

function AddressItem({ item }) {
    const { id, fullName, phoneNumber,
        city, district, ward,
        specificAddress, isDefault } = item;

    const concattedAddress = `${ward.name}, ${district.name}, ${city.name}`;

    function handleSetDefaultAddress(id) {
        console.log("set by default", id);
    }

    function handleDeleteAddress(id) {
        console.log("delete", id);
    }

    const [showAddressForm, setShowAddressForm] = useState(false);

    function toggleShowAddressForm() {
        setShowAddressForm(!showAddressForm);
    }

    return (
        <Stack
            direction={"row"}
            justifyContent={"space-between"}
            borderBottom={"1px solid"}
            borderColor={"secondary.500"}
            py={2}
        >
            <Dialog onClose={toggleShowAddressForm} open={showAddressForm} fullWidth>
                <DialogTitle borderBottom={"1px solid"} variant='h5'>
                    Cập nhật thông tin địa chỉ
                </DialogTitle>
                <DialogContent>
                    <EditAddressForm toggleShowAddressForm={toggleShowAddressForm} item={item} />
                </DialogContent>
            </Dialog>
            <Box>
                <Stack direction={"row"} spacing={2} mb={1}>
                    <Typography>{fullName}</Typography>
                    <Box component={"span"} sx={{ width: "1px", bgcolor: "secondary.200" }} />
                    <Typography color={"secondary.400"}>{phoneNumber}</Typography>
                </Stack>
                <Typography color={"secondary.400"}>{specificAddress}</Typography>
                <Typography color={"secondary.400"}>{concattedAddress}</Typography>
                <Stack direction={"row"}>
                    {isDefault ?
                        <Typography
                            color={"primary.main"}
                            border={"1px solid"}
                            borderColor={"primary.main"}
                            mt={1}
                            px={1}
                        >
                            Mặc định
                        </Typography>
                        :
                        <Typography
                            color={"secondary.400"}
                            border={"1px solid"}
                            borderColor={"secondary.400"}
                            mt={1}
                            px={1}
                        >
                            Địa chỉ giao hàng
                        </Typography>
                    }
                </Stack>
            </Box>
            <Stack direction={"column"} alignItems={"end"} justifyContent={"end"}>
                <Box>
                    <Button sx={{ color: "lightBlue.main" }} onClick={toggleShowAddressForm}>Cập nhật</Button>
                    {!isDefault &&
                        <Button sx={{ color: "lightBlue.main" }} onClick={() => handleDeleteAddress(id)}>Xóa</Button>
                    }
                </Box>
                <Stack direction={"row"}>
                    {isDefault ?
                        <Typography
                            color={"secondary.400"}
                            border={"1px solid"}
                            borderColor={"secondary.400"}
                            mt={1}
                            px={1}
                            sx={{ cursor: "not-allowed" }}
                        >
                            Thiết lập mặc định
                        </Typography>
                        :
                        <Typography
                            color={"secondary.400"}
                            border={"1px solid"}
                            borderColor={"secondary.400"}
                            mt={1}
                            px={1}
                            onClick={() => handleSetDefaultAddress(id)}
                            sx={{
                                transition: "all 0.3s ease",
                                ":hover": {
                                    cursor: "pointer",
                                    color: "primary.main",
                                    borderColor: "primary.main"
                                }
                            }}
                        >
                            Thiết lập mặc định
                        </Typography>
                    }
                </Stack>
            </Stack>
        </Stack >
    );
}


export default AddressItem;