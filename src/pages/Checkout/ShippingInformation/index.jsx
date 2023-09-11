import React, { useEffect, useState } from 'react';
import { useShippingInformationFormSchema } from '../../../hooks/useCheckoutFormSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../../store/cart/cart.selector';
import { DELIVERY_FEE } from '../../../constants/fixed-data';
import { Box, Button, CircularProgress, FormControlLabel, Grid, MenuItem, Radio, Stack, Typography } from '@mui/material';
import { CustomLabelCheckbox, CustomRadioGroup, CustomSelect, CustomTextField } from '../../../components';
import { getMoneyFormat } from "../../../utils";
import { PAYMENT_API } from "../../../constants/api-endpoints";

function ShippingInformationPage(props) {
    const schema = useShippingInformationFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isSubmitSuccessful, isValid }, reset, getValues, setValue } = useForm({
        defaultValues: {
            fullname: "",
            phoneNumber: "",
            email: "",
            specificAddress: "",
            cityCode: -1,
            districtCode: -1,
            wardCode: -1,
            subscribeNews: false,
            deliveryMethod: 1,
            paymentMethod: 1
        },
        resolver: yupResolver(schema)
    });

    const cartItems = useSelector(selectCartItems);

    const discountCode = JSON.parse(localStorage.getItem("discountCode"));

    //test data only
    const [listCityCode, setListCityCode] = useState([5, 10, 15, 20]);
    const [listDistrictCode, setDistrictCode] = useState([]);
    const [listWardCode, setWardCode] = useState([]);
    const [cartItemsDetails, setCartItemsDetails] = useState([]);
    const [discountDetails, setDiscountDetails] = useState({
        id: "",
        discount: 0
    });
    const [total, setTotal] = useState(0);
    const [deliveryMethod, setDeliveryMethod] = useState(-1);
    const [paymentMethod, setPaymentMethod] = useState(1);

    //fetch cart items details once here (name,style,color name)
    //fetch discount code status by discount code saved to local storage
    useEffect(() => {
        //demo only (all the code below)
        const arr = [];
        cartItems.forEach(item => {
            arr.push(
                {
                    id: item.productId,
                    name: "Nike Air Force 1 '07",
                    style: "315122-111",
                    colorName: "White/White",
                    size: item.size,
                    price: 123456,
                    quantity: item.quantity,
                }
            );
        })
        setCartItemsDetails(arr);
        if (discountCode) {
            setDiscountDetails({
                id: "SALE10",
                discount: 0.2
            })
        }
    }, []);

    useEffect(() => {
        let totalBeforeDiscount = 0;
        cartItemsDetails.forEach(item => {
            totalBeforeDiscount += item.price * item.quantity;
        });
        setTotal(totalBeforeDiscount);
    }, [cartItemsDetails])

    useEffect(() => {
        if (deliveryMethod === 2) {
            setTotal(total + DELIVERY_FEE);
        } else {
            setTotal(total - DELIVERY_FEE);
        }
    }, [deliveryMethod])


    //get random array without duplicate
    function getRandomInt(min, max) {
        const arr = [];
        while (arr.length < 4) {
            const r = Math.floor(Math.random() * (max - min + 1)) + min;
            if (arr.indexOf(r) === -1) arr.push(r);
        }
        return arr;
    }

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

    function handleDeliveryMethodChange(data) {
        setDeliveryMethod(data);
    }

    function handlePaymentMethodChange(data) {
        setPaymentMethod(data);
    }

    function getDiscountAmount() {
        if (discountDetails.id !== "") {
            return Math.floor(total * discountDetails.discount);
        }
        return 0;
    }

    function getFinalPrice() {
        return total - getDiscountAmount();
    }

    function handleProceedToPayment() {
        if (isValid) {
            var leftPosition, topPosition;
            leftPosition = (window.screen.width / 2) - ((500 / 2) + 10);
            topPosition = (window.screen.height / 2) - ((600 / 2) + 50);
            window.open(PAYMENT_API, "",
                "status=no,height=" + 600 + ",width=" + 500 + ",resizable=yes,left="
                + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY="
                + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no");

        }
    }

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            const newData = {
                ...data,
                total: getFinalPrice()
            }
            setTimeout(() => {
                console.log("call api here");
                console.log(newData);
                resolve(newData);
            }, 1000);
        })
    }

    return (
        <Box component={"form"} onSubmit={handleSubmit(handleSubmitForm)} spacing={2}>
            <Grid container px={{ xs: 1, lg: 24 }}>
                <Grid item xs={12} sm={12} md={8} pt={5} pr={{ xs: 0, md: 5 }}>
                    <Box
                        bgcolor={"secondary.500"}
                        p={1}
                    >
                        <Typography
                            variant='h6'
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            ml={1}
                        >
                            thông tin giao hàng
                        </Typography>
                    </Box>
                    <Stack direction={"column"} spacing={4} mt={4}>
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
                        <CustomTextField
                            name='email'
                            control={control}
                            label='Email'
                        />
                        <CustomTextField
                            name='specificAddress'
                            control={control}
                            label='Địa chỉ cụ thể'
                        />

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

                        <CustomLabelCheckbox
                            control={control}
                            name='subscribeNews'
                            label='Cập nhật các thông tin mới nhất về chương trình từ Sneaker Daily'
                        />

                        <Box>
                            <Box
                                bgcolor={"secondary.500"}
                                p={1}
                            >
                                <Typography
                                    variant='h6'
                                    fontWeight={"bold"}
                                    textTransform={"uppercase"}
                                    ml={1}
                                >
                                    phương thức giao hàng
                                </Typography>
                            </Box>
                            <CustomRadioGroup
                                name='deliveryMethod'
                                control={control}
                                handleDeliveryMethodChange={handleDeliveryMethodChange}
                            >
                                <FormControlLabel value={1} control={<Radio />} label="Tốc độ tiêu chuẩn (0 VND)" />
                                <FormControlLabel value={2} control={<Radio />} label="Nhanh (từ 2 - 5 ngày làm việc) (30.000 VND)" />
                            </CustomRadioGroup>
                        </Box>
                        <Box>
                            <Box
                                bgcolor={"secondary.500"}
                                p={1}
                            >
                                <Typography
                                    variant='h6'
                                    fontWeight={"bold"}
                                    textTransform={"uppercase"}
                                    ml={1}
                                >
                                    phương thức thanh toán
                                </Typography>
                            </Box>
                            <CustomRadioGroup
                                name='paymentMethod'
                                control={control}
                                handlePaymentMethodChange={handlePaymentMethodChange}
                            >
                                <FormControlLabel value={1} control={<Radio />} label="Thanh toán trực tiếp khi giao hàng " />
                                <FormControlLabel value={2} control={<Radio />} label="Thanh toán bằng ví điện tử" />
                            </CustomRadioGroup>
                        </Box>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    pt={5}
                >
                    <Box
                        bgcolor={"secondary.500"}
                        px={2}
                    >
                        <Typography
                            variant='h6'
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            pt={2}
                            pb={1}
                            borderBottom={"2px solid"}
                        >
                            đơn hàng
                        </Typography>
                        <Stack direction={"column"} spacing={2} mt={2} pb={2} borderBottom={"2px dashed"} borderColor={"secondary.700"}>
                            {cartItemsDetails.map((item, index) =>
                                <Box key={index} color={"secondary.700"}>
                                    <Stack direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"baseline"}
                                    >
                                        <Typography fontWeight={"bold"} width={"60%"}>{item.name} - {item.style} - {item.colorName}</Typography>
                                        <Typography py={1}>{getMoneyFormat(item.price)}</Typography>
                                    </Stack>
                                    <Stack direction={"row"}
                                        justifyContent={"space-between"}
                                        alignItems={"baseline"}
                                    >
                                        <Typography>Size: {item.size}</Typography>
                                        <Typography>x {item.quantity}</Typography>
                                    </Stack>
                                </Box>
                            )}
                        </Stack>
                        <Box borderBottom={"2px dashed"} pb={2}>
                            <Stack direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"baseline"}
                                mt={4}
                            >
                                <Typography
                                    fontWeight={"bold"}
                                    color={"secondary.700"}
                                >
                                    Tạm tính
                                </Typography>
                                <Typography
                                    fontWeight={"bold"}
                                    color={"secondary.700"}
                                >
                                    {getMoneyFormat(total)}
                                </Typography>
                            </Stack>
                            <Stack direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"baseline"}
                                mt={1}
                                mb={2}
                            >
                                <Typography
                                    fontWeight={"bold"}
                                    color={"secondary.700"}
                                >
                                    Giảm
                                </Typography>
                                <Typography
                                    fontWeight={"bold"}
                                    color={"secondary.700"}
                                >
                                    - {getMoneyFormat(getDiscountAmount())}
                                </Typography>
                            </Stack>
                            <Stack direction={"row"}
                                justifyContent={"space-between"}
                                alignItems={"baseline"}
                                mb={2}
                            >
                                <Typography
                                    fontWeight={"bold"}
                                >
                                    Phí vận chuyển
                                </Typography>
                                <Typography>
                                    {deliveryMethod === 2 ? getMoneyFormat(DELIVERY_FEE) : getMoneyFormat(0)}
                                </Typography>
                            </Stack>
                        </Box>

                        <Stack direction={"row"}
                            justifyContent={"space-between"}
                            alignItems={"baseline"}
                            py={4}
                        >
                            <Typography
                                fontWeight={"bold"}
                                textTransform={"uppercase"}
                            >
                                tổng cộng
                            </Typography>
                            <Typography fontWeight={"bold"} color={"primary.main"}>
                                {getMoneyFormat(getFinalPrice())}
                            </Typography>
                        </Stack>
                        {paymentMethod === 1 ?
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
                                    fontWeight: "bold",
                                    p: 2,
                                    fontSize: "larger",
                                    mb: 3
                                }}
                                fullWidth
                            >
                                hoàn tất đặt hàng
                            </Button>
                            :
                            <Button
                                variant="contained"
                                type="button"
                                sx={{
                                    fontWeight: "bold",
                                    p: 2,
                                    fontSize: "larger",
                                    mb: 3
                                }}
                                fullWidth
                                onClick={handleProceedToPayment}
                            >
                                tiến hành thanh toán
                            </Button>
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShippingInformationPage;