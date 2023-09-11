import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, MenuItem, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomLabelCheckbox, CustomSelect, CustomTextField } from '../../components';
import { useAddAddressFormSchema } from '../../hooks/';

function AddAddressForm({ toggleShowAddressForm }) {
    const schema = useAddAddressFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isValid }, setValue, reset, getValues, setFocus } = useForm({
        defaultValues: {
            email: "email@gmail.com",
            fullname: "",
            phoneNumber: "",
            cityCode: -1,
            districtCode: -1,
            wardCode: -1,
            specificAddress: "",
            isDefault: false,
        },
        resolver: yupResolver(schema)
    });

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("call api here", data);
                toggleShowAddressForm();
                resolve(data);
            }, 1000);
        })
    }

    //test data only
    const [listCityCode, setListCityCode] = useState([5, 10, 15, 20]);
    const [listDistrictCode, setDistrictCode] = useState([]);
    const [listWardCode, setWardCode] = useState([]);

    function handleCityChange() {
        console.log("get wards and set wards data here");

        //for test only
        const arr = getRandomInt(1, 100);

        setDistrictCode(arr);
        setWardCode([]);
        setValue("districtCode", -1);
        setValue("wardCode", -1);
    }

    function handleDistrictChange() {
        console.log("get wards and set wards data here");

        //for test only
        const arr = getRandomInt(1, 100);
        setWardCode(arr);
        setValue("wardCode", -1);
    }

    //for test only
    //get random array with 10 elements and value from min to max and no duplicate
    function getRandomInt(min, max) {
        const arr = [];
        while (arr.length < 10) {
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    }
    return (
        <Stack
            direction={"column"}
            spacing={2}
            component={"form"}
            onSubmit={handleSubmit(handleSubmitForm)}
            pt={4}>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <CustomTextField
                    name='fullname'
                    control={control}
                    label='Họ và tên'
                />
                <CustomTextField
                    name='phoneNumber'
                    control={control}
                    label='Số điện thoại'
                />
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <CustomSelect
                    name='cityCode'
                    control={control}
                    label='Tỉnh/ Thành phố'
                    handleCityChange={handleCityChange}
                >
                    <MenuItem value={-1} selected disabled hidden sx={{ display: "none" }}>
                        Chọn Tỉnh/ Thành phố
                    </MenuItem>
                    {/* test  data only */}
                    {listCityCode.length > 0 && listCityCode.map(item =>
                        <MenuItem value={item} key={item}>
                            {item} - City
                        </MenuItem>
                    )}
                </CustomSelect>
                <CustomSelect
                    name='districtCode'
                    control={control}
                    label='Quận/ Huyện'
                    handleDistrictChange={handleDistrictChange}
                >
                    <MenuItem value={-1} selected disabled hidden sx={{ display: "none" }}>
                        Chọn Quận/ Huyện
                    </MenuItem>
                    {listDistrictCode.length > 0 && listDistrictCode.map(item =>
                        <MenuItem value={item} key={item}>
                            {item} - District
                        </MenuItem>
                    )}
                </CustomSelect>
                <CustomSelect
                    name='wardCode'
                    control={control}
                    label='Xã/ Phường'
                >
                    <MenuItem value={-1} selected disabled hidden sx={{ display: "none" }}>
                        Chọn Xã/ Phường
                    </MenuItem>
                    {listWardCode.length > 0 && listWardCode.map(item =>
                        <MenuItem value={item} key={item}>
                            {item} - Ward
                        </MenuItem>
                    )}
                </CustomSelect>
            </Stack>

            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <CustomTextField
                    name='specificAddress'
                    control={control}
                    label='Địa chỉ cụ thể'
                />
            </Stack>
            <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <CustomLabelCheckbox
                    control={control}
                    name='isDefault'
                    label='Đặt làm địa chỉ mặc định'
                />
            </Stack>
            <Stack direction={"row"} justifyContent={"end"} spacing={2}>
                <Button onClick={toggleShowAddressForm}>Trở lại</Button>
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
                    hoàn thành
                </Button>
            </Stack>
        </Stack>
    );
}

export default AddAddressForm;