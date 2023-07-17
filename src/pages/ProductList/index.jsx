import { Box } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductListDesktop from './Desktop';
import ProductListMobile from './Mobile';

function ProductList(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    const params = {
        gender: searchParams.get("gender"),
        category: searchParams.get("category"),
        attribute: searchParams.get("attribute"),
    }

    const fakeProducts = [
        {
            id: 1,
            name: "Shoes 1",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0
        },
        {
            id: 2,
            name: "Shoes 2",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: false,
            saleOff: 0.5

        },
        {
            id: 3,
            name: "Shoes 3",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0

        },
        {
            id: 4,
            name: "Shoes 4",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: false,
            saleOff: 0.2

        },
        {
            id: 5,
            name: "Shoes 5",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0.3

        },
        {
            id: 2,
            name: "Shoes 2",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0

        },
    ]

    const filterOptions = {
        gender: ["all"],
        category: ["accessories", "shoes"],
        status: ["limited-edition", "online-only"],
        style: ["low-top", "slip-on"],
        productLine: ["basas", "vintas"],
        price: ["500-599", ">600"],
        collection: ["ananas-puppet-club", "track-6-2-blues"],
        material: ["canvas", "cotton"],
        color: ["white", "pink"]
    };

    return (
        <Box>
            <ProductListDesktop products={fakeProducts} options={filterOptions} />
            <ProductListMobile products={fakeProducts} options={filterOptions} />
        </Box>
    );
}

export default ProductList;