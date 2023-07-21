import { Box } from '@mui/material';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { COLOR_TABLE } from '../../constants/dummy-data';
import ProductDetailsDesktop from './Desktop';
import ProductDetailsMobile from './Mobile';

function ProductDetailPage(props) {
    const params = useParams();
    const id = params.id;

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
            COLOR_TABLE.find(color => color.value === "beige"),
            COLOR_TABLE.find(color => color.value === "gray"),
        ],
        quantity: 32,
        description: "Gender: Unisex\n" + "Size run: 35-46\n" + "Upper: Eco Nylon Fabric\n" + "Outsole: Rubber",
        liked: false,
        images: [
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_1.jpeg",
                color: "beige"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_2.jpeg",
                color: "beige"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_3.jpeg",
                color: "beige"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_4.jpeg",
                color: "beige"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_5.jpeg",
                color: "beige"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T015_6.jpeg",
                color: "beige"
            },

            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_1.jpeg",
                color: "gray"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_2.jpeg",
                color: "gray"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_3.jpeg",
                color: "gray"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_4.jpeg",
                color: "gray"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_5.jpeg",
                color: "gray"
            },
            {
                url: "https://ananas.vn/wp-content/uploads/Pro_A6T014_6.jpeg",
                color: "gray"
            },
        ],
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


    const [currentColor, setCurrentColor] = useState("gray");

    const [isZoomIn, setIsZoomIn] = useState(false);

    const imagesByColor = fakeProduct.images.filter(item => item.color === currentColor);

    const [mainImage, setMainImage] = useState(imagesByColor[0])

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
            />
        </Box>
    );
}

export default ProductDetailPage;