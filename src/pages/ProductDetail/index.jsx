import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MAX_QUANTITY_ALLOWED } from '../../constants';
import { COLOR_TABLE } from '../../constants/dummy-data';
import { addToCartStart, updateCartStart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import ProductDetailsDesktop from './Desktop';
import ProductDetailsMobile from './Mobile';

function ProductDetailPage(props) {
    const params = useParams();
    const id = parseInt(params.id);

    const dispatch = useDispatch();

    //demo data only
    const fakeProduct = {
        id,
        name: "Shoes 1",
        category: { value: "shoes", name: "Giày" },
        productLine: { value: "track-6", name: "Track 6" },
        style: "Low Top",
        status: "New Arrival",
        price: 1290000,
        saleOff: 0.3,
        color: [
            COLOR_TABLE.find(color => color.value === "navy"),
            COLOR_TABLE.find(color => color.value === "bluewash"),
        ],
        description: "Gender: Unisex <br/>" + "Size run: 35-46 <br/>" + "Upper: Eco Nylon Fabric <br/>" + "Outsole: Rubber",
        liked: false,
        images: [
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_1.jpeg",
                color: "bluewash"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_2.jpeg",
                color: "bluewash"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_3.jpeg",
                color: "bluewash"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_4.jpeg",
                color: "bluewash"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_5.jpeg",
                color: "bluewash"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_6.jpeg",
                color: "bluewash"
            },

            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1.jpeg",
                color: "navy"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_2.jpeg",
                color: "navy"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_3.jpeg",
                color: "navy"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_4.jpeg",
                color: "navy"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_5.jpeg",
                color: "navy"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_6.jpeg",
                color: "navy"
            },
        ],
        detailsDescription: "Má ngoài Suede (da lộn), má trong phủ vải canvas kèm theo các chi tiết phối trộn chất da Nappa nâu trầm điềm đạm là ý đồ sắp xếp làm nên Vintas Temperate Pack. Với tông màu cảm hứng từ cỏ cây cùng khí hậu dịu mát rõ nét của vùng Ôn Đới. Điểm chốt hạ thuyết phục cho những con người sâu sắc, mang tâm hồn yêu thiên nhiên vô bờ bến."
    }

    //demo data only
    const relevantProducts = [
        {
            id: 2,
            name: "Shoes 2",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1-500x500.jpg"
        },
        {
            id: 3,
            name: "Shoes 3",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0,
            newArrival: true,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00012_1-500x500.jpeg"
        },
        {
            id: 4,
            name: "Shoes 4",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00077_1-500x500.jpg"
        },
        {
            id: 5,
            name: "Shoes 5",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00188_1-500x500.jpg"
        },
        {
            id: 6,
            name: "Shoes 6",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00197_1-500x500.jpg"
        },
        {
            id: 7,
            name: "Shoes 7",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_AV00117_1-500x500.jpg"
        },
        {
            id: 8,
            name: "Shoes 8",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_AV00135_1-500x500.jpg"
        },
        {
            id: 8,
            name: "Shoes 8",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00006_1-500x500.jpeg"
        }
    ]

    //demo data only
    const seenProducts = [
        {
            id: 10,
            name: "Shoes 10",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00125_1-500x500.jpg"

        },
        {
            id: 11,
            name: "Shoes 11",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0,
            newArrival: true,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00012_1-500x500.jpeg"

        },
        {
            id: 12,
            name: "Shoes 12",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00077_1-500x500.jpg"

        },
        {
            id: 13,
            name: "Shoes 13",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00188_1-500x500.jpg"

        },
        {
            id: 14,
            name: "Shoes 14",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00197_1-500x500.jpg"

        },
        {
            id: 15,
            name: "Shoes 15",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_AV00117_1-500x500.jpg"

        },
        {
            id: 16,
            name: "Shoes 16",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/pro_AV00135_1-500x500.jpg"

        },
        {
            id: 17,
            name: "Shoes 17",
            color: "Navy Blue",
            price: 1190000,
            saleOff: 0.2,
            newArrival: false,
            imageUrl: "https://ananas.vn/wp-content/uploads/Pro_AV00006_1-500x500.jpeg"

        }
    ]

    const [currentColor, setCurrentColor] = useState(COLOR_TABLE.find(color => color.value === "navy"));

    const [isZoomIn, setIsZoomIn] = useState(false);

    const [imagesByColor, setImagesByColor] = useState(fakeProduct.images.filter(item => item.color === currentColor.value));

    const [mainImage, setMainImage] = useState(imagesByColor[0])

    const [selectedSize, setSelectedSize] = useState(40);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    //fixed quantity by color(demo data  only)
    const [quantity, setQuantity] = useState(
        [{
            code: 35,
            quantity: 10,
            color: "navy"
        },
        {
            code: 36,
            quantity: 0,
            color: "navy"
        },
        {
            code: 37,
            quantity: 0,
            color: "navy"
        },
        {
            code: 38,
            quantity: 10,
            color: "navy"
        },
        {
            code: 39,
            quantity: 10,
            color: "navy"
        },
        {
            code: 40,
            quantity: 10,
            color: "navy"
        },
        {
            code: 41,
            quantity: 10,
            color: "navy"
        },
        {
            code: 42,
            quantity: 10,
            color: "navy"
        },
        {
            code: 43,
            quantity: 10,
            color: "navy"
        },
        {
            code: 44,
            quantity: 10,
            color: "navy"
        },
        {
            code: 45,
            quantity: 10,
            color: "navy"
        },
        {
            code: 46,
            quantity: 10,
            color: "navy"
        }]
    );

    //demo only (when api is implemented, call api and set quantity here)
    const foundQuantity = quantity.find(item => item.code === selectedSize && item.color === currentColor.value);
    const [availableQuantity, setAvailableQuantity] = useState(foundQuantity ? foundQuantity.quantity : 0);

    useEffect(() => {
        //demo only (when api is implemented, call api and set quantity here)
        const filteredImages = fakeProduct.images.filter(item => item.color === currentColor.value);
        setImagesByColor(filteredImages);
        setMainImage(filteredImages[0]);
        console.log("dispatch new product details here")
    }, [currentColor])

    useEffect(() => {
        const foundQuantity = quantity.find(item => item.code === selectedSize && item.color === currentColor.value);
        setAvailableQuantity(foundQuantity ? foundQuantity.quantity : 0);
        console.log("fetch quantity by size and color here");
    }, [selectedSize]);

    const currentCartItems = useSelector(selectCartItems);

    function handleAddToCart() {
        //demo only (add the whole item with specific schema to cart then (productId, color, size, quantity))
        const foundItem = currentCartItems.find(cartItem => (cartItem.productId === id
            && cartItem.color === currentColor.value && cartItem.size === selectedSize));

        if (foundItem) {
            const quantityAfterChanged = foundItem.quantity + selectedQuantity;
            if (quantityAfterChanged > MAX_QUANTITY_ALLOWED) {
                toast.error(`Số lượng sản phẩm vượt quá số lượng cho phép !`);
            } else {
                foundItem.quantity += selectedQuantity;
                dispatch(updateCartStart(foundItem));
                toast.success("Cập nhật số lượng thành công !");
            }
        } else {
            dispatch(addToCartStart({
                productId: parseInt(id),
                color: currentColor.value,
                size: selectedSize,
                quantity: selectedQuantity
            }));
            toast.success("Thêm vào giỏ hàng thành công !");
        }
    }

    return (
        <Box>
            <ProductDetailsDesktop
                product={fakeProduct}
                relevantProducts={relevantProducts}
                seenProducts={seenProducts}
                mainImage={mainImage}
                setMainImage={setMainImage}
                isZoomIn={isZoomIn}
                setIsZoomIn={setIsZoomIn}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
                imagesByColor={imagesByColor}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                availableQuantity={availableQuantity}
                selectedQuantity={selectedQuantity}
                setSelectedQuantity={setSelectedQuantity}
                handleAddToCart={handleAddToCart}
            />
            <ProductDetailsMobile
                product={fakeProduct}
                relevantProducts={relevantProducts}
                seenProducts={seenProducts}
                mainImage={mainImage}
                setMainImage={setMainImage}
                isZoomIn={isZoomIn}
                setIsZoomIn={setIsZoomIn}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
                imagesByColor={imagesByColor}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
                quantity={quantity}
                availableQuantity={availableQuantity}
                selectedQuantity={selectedQuantity}
                setSelectedQuantity={setSelectedQuantity}
                handleAddToCart={handleAddToCart}
            />
        </Box>
    );
}

export default ProductDetailPage;