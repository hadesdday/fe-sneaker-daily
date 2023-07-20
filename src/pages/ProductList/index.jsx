import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setFilterAllOptions } from '../../store/filter-product-list/filter.action';
import { selectCurrentFilterOptions } from '../../store/filter-product-list/filter.selector';
import ProductListDesktop from './Desktop';
import ProductListMobile from './Mobile';

function ProductList() {
    let [searchParams, setSearchParams] = useSearchParams();

    const dispatch = useDispatch();

    //convert search params from string to array
    function processValueFromUrl(key) {
        const value = searchParams.get(key);
        if (value) {
            return value.split(",");
        }
        return [];
    }

    //search params in array
    const params = {
        gender: [searchParams.get("gender")] || ["all"],
        category: processValueFromUrl("category"),
        status: processValueFromUrl("status"),
        style: processValueFromUrl("style"),
        productLine: processValueFromUrl("productLine"),
        price: processValueFromUrl("price"),
        collection: processValueFromUrl("collection"),
        material: processValueFromUrl("material"),
        color: processValueFromUrl("color")
    }
    //search params in string
    const paramsInString = {
        gender: params["gender"].join(",") || "all",
        category: params["category"].join(",") || "",
        status: params["status"].join(",") || "",
        style: params["style"].join(",") || "",
        productLine: params["productLine"].join(",") || "",
        price: params["price"].join(",") || "",
        collection: params["collection"].join(",") || "",
        material: params["material"].join(",") || "",
        color: params["color"].join(",") || ""
    }

    //change  search params by key name
    function setSearchParamsByKey(key, newArrayValue) {
        paramsInString[key] = newArrayValue.join(",");
        setSearchParams(paramsInString);
    }

    //set store data from parsed data from url at first load ( also when change route )
    useEffect(() => {
        dispatch(setFilterAllOptions(params));
    }, [searchParams]);

    //demo data only
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

    const currentFilterOptions = useSelector(
        selectCurrentFilterOptions
    );

    function handleChangeFilterOptions(key, newValue) {
        const foundValue = currentFilterOptions[key].find(item => item === newValue);
        if (!foundValue) {
            currentFilterOptions[key].push(newValue);
            // dispatch(setFilterOptions(key, currentFilterOptions[key]));
            setSearchParamsByKey(key, currentFilterOptions[key]); //set search params in url by changes in store
        } else {
            currentFilterOptions[key] = currentFilterOptions[key].filter(item => item !== newValue);
            // dispatch(setFilterOptions(key, currentFilterOptions[key]));
            setSearchParamsByKey(key, currentFilterOptions[key]); //set search params in url by changes in store
        }
    }

    function handleChangeGenderOptions(newValue) {
        const foundValue = currentFilterOptions["gender"].find(item => item === newValue);
        if (!foundValue) {
            // dispatch(setFilterOptions("gender", [newValue]));
            setSearchParamsByKey("gender", [newValue]);
        }
    }

    return (
        <Box>
            <ProductListDesktop
                products={fakeProducts}
                options={currentFilterOptions}
                handleChangeFilterOptions={handleChangeFilterOptions} //change params (data) from store (also in the url) immediately
                handleChangeGenderOptions={handleChangeGenderOptions} //change params (data) from store (also in the url) immediately
            />
            <ProductListMobile
                products={fakeProducts}
                options={currentFilterOptions}
                params={params}
                paramsInString={paramsInString}
                setSearchParams={setSearchParams}
                setSearchParamsByKey={setSearchParamsByKey}
            />
        </Box>
    );
}

export default ProductList;