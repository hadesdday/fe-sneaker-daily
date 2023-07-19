import { Box } from '@mui/material';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductListDesktop from './Desktop';
import ProductListMobile from './Mobile';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentFilterOptions } from '../../store/filter-product-list/filter.selector';
import { setFilterOptions } from '../../store/filter-product-list/filter.action';

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
            saleOff: 0,
            newArrival: true
        },
        {
            id: 2,
            name: "Shoes 2",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: false,
            saleOff: 0.5,
            newArrival: false

        },
        {
            id: 3,
            name: "Shoes 3",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0,
            newArrival: false

        },
        {
            id: 4,
            name: "Shoes 4",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: false,
            saleOff: 0.2,
            newArrival: true

        },
        {
            id: 5,
            name: "Shoes 5",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0.3,
            newArrival: true

        },
        {
            id: 2,
            name: "Shoes 2",
            color: "Navy Blue",
            price: 1190000,
            images: ["https://ananas.vn/wp-content/uploads/Pro_A6T014_1-500x500.jpeg", "https://ananas.vn/wp-content/uploads/Pro_A6T014_2-500x500.jpeg"],
            liked: true,
            saleOff: 0,
            newArrival: false

        },
    ]

    //demo data only
    // const filterOptions = {
    //     gender: ["all"],
    //     category: ["accessories", "shoes"],
    //     status: ["limited-edition", "online-only"],
    //     style: ["low-top", "slip-on"],
    //     productLine: ["basas", "vintas"],
    //     price: ["500-599", ">600"],
    //     collection: ["ananas-puppet-club", "track-6-2-blues"],
    //     material: ["canvas", "cotton"],
    //     color: ["white", "pink"]
    // };

    const dispatch = useDispatch();
    const currentFilterOptions = useSelector(
        selectCurrentFilterOptions
    );

    function handleChangeFilterOptions(key, newValue) {
        const foundValue = currentFilterOptions[key].find(item => item === newValue);
        if (!foundValue) {
            currentFilterOptions[key].push(newValue);
            dispatch(setFilterOptions(key, currentFilterOptions[key]));
        } else {
            currentFilterOptions[key] = currentFilterOptions[key].filter(item => item !== newValue);
            dispatch(setFilterOptions(key, currentFilterOptions[key]));
        }
    }

    function handleChangeGenderOptions(newValue) {
        const foundValue = currentFilterOptions["gender"].find(item => item === newValue);
        if (!foundValue)
            dispatch(setFilterOptions("gender", [newValue]));
    }

    return (
        <Box>
            <ProductListDesktop products={fakeProducts}
                options={currentFilterOptions}
                handleChangeFilterOptions={handleChangeFilterOptions}
                handleChangeGenderOptions={handleChangeGenderOptions}
            />
            <ProductListMobile products={fakeProducts}
                options={currentFilterOptions}
            />
        </Box>
    );
}

export default ProductList;