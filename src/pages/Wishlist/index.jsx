import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import WishListItem from '../../compositions/wishlist-item';
import { COLOR_TABLE } from '../../constants/dummy-data';
import { addToCartStart, updateCartStart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import { MAX_QUANTITY_ALLOWED } from '../../constants';

function Wishlist(props) {
    //demo data only
    const dummyData = [
        {
            productId: 1,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 1",
            price: 1000000,
            saleOff: 0.2,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
        {
            productId: 2,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 2",
            price: 1000000,
            saleOff: 0,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
        {
            productId: 3,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 3",
            price: 1000000,
            saleOff: 0,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
        {
            productId: 4,
            image: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg",
            name: "Shoes 4",
            price: 1000000,
            saleOff: 0,
            style: "Low Top",
            color: [
                COLOR_TABLE.find(color => color.value === "navy"),
                COLOR_TABLE.find(color => color.value === "bluewash"),
            ],
        },
    ]

    const dispatch = useDispatch();
    const currentCartItems = useSelector(selectCartItems);

    function handleAddToCart(item) {
        //demo only (add the whole item with specific schema to cart then (productId, color, size, quantity))
        const foundItem = currentCartItems.find(cartItem => (cartItem.productId === item.productId
            && cartItem.color === item.color && cartItem.size === item.size));
        if (foundItem) {
            const quantityAfterChanged = foundItem.quantity + item.quantity;
            if (quantityAfterChanged > MAX_QUANTITY_ALLOWED) {
                toast.error(`Số lượng sản phẩm vượt quá số lượng cho phép !`);
            } else {
                foundItem.quantity += item.quantity;
                dispatch(updateCartStart(foundItem));
                toast.success("Cập nhật số lượng thành công !");
            }
        } else {
            dispatch(addToCartStart(item));
            toast.success("Thêm vào giỏ hàng thành công !");
        }
    }

    return (
        <Box px={{ lg: 23 }}>
            <Typography
                variant='h4'
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                my={5}
            >
                danh mục yêu thích của bạn
            </Typography>
            <Box borderBottom={"2px solid"} >
                <Typography fontWeight={"bold"} color={"secondary.400"} pb={1}>{dummyData.length} sản phẩm</Typography>
            </Box>
            <Box>
                {dummyData.map((item, index) =>
                    <WishListItem
                        key={index}
                        isLastIndex={index === dummyData.length - 1}
                        item={item}
                        handleAddToCart={handleAddToCart} />
                )}
            </Box>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        width: { xs: "45%", sm: "30%", md: "20%" },
                        mt: 5,
                    }}>
                    xóa hết
                </Button>
                <Button
                    variant='contained'
                    sx={{
                        bgcolor: "black",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        width: { xs: "45%", sm: "30%", md: "20%" },
                        mt: 5,
                    }}>
                    tiếp tục mua hàng
                </Button>
            </Stack>
        </Box>
    );
}

export default Wishlist;