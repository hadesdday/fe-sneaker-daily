import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Collapse, Grid, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DesktopProductListBanner from "../../../assets/banner/desktop_productlist.jpg";
import ProductListFilterMobile from '../../../compositions/product-list-filter/Mobile';
import { setFilterAllOptions } from '../../../store/filter-product-list/filter.action';
import { categories, collections, fixedColors, gender, materials, prices, productLines, statuses } from '../fixed-data';
import { Link, useSearchParams } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMoneyFormat } from '../../../utils';

function ProductListMobile({ products, options }) {
    //options: selected options
    const dispatch = useDispatch();

    let [searchParams, setSearchParams] = useSearchParams();

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

    const [preselected, setPreselected] = useState(params);
    function isHaveOption(key, option) {
        return preselected[key].includes(option);
    }

    const [showFilterOptions, setShowFilterOptions] = useState(false);
    function toggleFilterOptions() {
        setShowFilterOptions(!showFilterOptions);
        toggleShowFooter();
    }

    function handleFilterOptions() {
        dispatch(setFilterAllOptions(preselected));
        setSearchParams({
            gender: preselected["gender"].join(",") || "all",
            category: preselected["category"].join(",") || "",
            status: preselected["status"].join(",") || "",
            style: preselected["style"].join(",") || "",
            productLine: preselected["productLine"].join(",") || "",
            price: preselected["price"].join(",") || "",
            collection: preselected["collection"].join(",") || "",
            material: preselected["material"].join(",") || "",
            color: preselected["color"].join(",") || ""
        });
        toggleFilterOptions();
    }

    function toggleShowFooter() {
        //hide footer  when toggle show filter options
        setTimeout(() => {
            if (!showFilterOptions) {
                document.getElementById("footer-mobile").style.display = "none";
            }
            else {
                document.getElementById("footer-mobile").style.display = "flex";
            }
        }, 500)
    }

    async function handleClickOption(key, option) {
        const foundValue = preselected[key].find(item => item === option);
        if (!foundValue) {
            const newPreselected = await (async (prev) => {
                const newValue = [...prev[key], option];
                return {
                    ...prev,
                    [key]: newValue
                }
            })(preselected);
            setPreselected(newPreselected);
            paramsInString[key] = preselected[key].join(",");
        } else {
            const newPreselected = await (async (prev) => {
                return {
                    ...prev,
                    [key]: preselected[key].filter(item => item !== option)
                }
            })(preselected);
            setPreselected(newPreselected);
            paramsInString[key] = preselected[key].join(",");
        }
        console.log(`new value for ${key}`, preselected[key]);
    }

    async function handleClickGenderOption(option) {
        const newPreselected = await (async (prev) => {
            return {
                ...prev,
                gender: [option]
            };
        })(preselected);
        setPreselected(newPreselected);
        dispatch(setFilterAllOptions(newPreselected));
        setSearchParamsByKey("gender", newPreselected["gender"]);
    }

    async function handleSelectCategoryOption(option) {
        const foundValue = preselected["category"].find(item => item === option);
        if (!foundValue) {
            const newPreselected = await (async (prev) => {
                const newValue = [...prev["category"], option];
                return {
                    ...prev,
                    category: newValue
                }
            })(preselected);
            setPreselected(newPreselected);
            dispatch(setFilterAllOptions(newPreselected));
            setSearchParamsByKey("category", newPreselected["category"]);
        } else {
            const newPreselected = await (async (prev) => {
                return {
                    ...prev,
                    category: preselected["category"].filter(item => item !== option)
                }
            })(preselected);
            setPreselected(newPreselected);
            dispatch(setFilterAllOptions(newPreselected));
            setSearchParamsByKey("category", newPreselected["category"]);
        }
    }

    function handleResetOptions() {
        setPreselected({
            gender: ["all"],
            category: [],
            status: [],
            style: [],
            productLine: [],
            price: [],
            collection: [],
            material: [],
            color: [],
        })
    }

    function handleAddToWishlist() {
        alert("add to wishlist");
    }
    return (
        <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box component={"img"} src={DesktopProductListBanner} width={"100%"} />
            <Stack
                direction={"row"}
                spacing={3}
                borderBottom={"2px solid"}
                py={3}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {gender.map((item, index) =>
                    <React.Fragment key={index}>
                        <Typography
                            variant='h3'
                            textTransform={"uppercase"}
                            fontWeight={"bold"}
                            sx={{
                                transition: "all 0.2s",
                                cursor: "pointer",
                                color: "black",
                                opacity: isHaveOption("gender", item.value) ? 1 : 0.5,
                                ":hover": {
                                    opacity: 1
                                }
                            }}
                            onClick={() => handleClickGenderOption(item.value)}
                            key={item.label}
                        >
                            {item.label}
                        </Typography>
                        {index < 2 &&
                            <Box borderRight={"1px solid"} height={"5vw"}></Box>
                        }
                    </React.Fragment>
                )}
            </Stack>
            <Stack
                direction={"row"}
                spacing={2}
                py={3}
                justifyContent={"center"}
                alignItems={"center"}
            >
                {categories.map((item, index) =>
                    <React.Fragment key={index}>
                        <Typography
                            sx={{
                                fontSize: "3vw",
                                transition: "all 0.2s",
                                p: 1,
                                pr: 2,
                                cursor: "pointer",
                                color: "black",
                                fontWeight: isHaveOption("category", item.value) ? "bold" : "normal",
                                ":after": {
                                    display: "block",
                                    content: '""',
                                    mt: 1,
                                    borderBottom: "solid 4px",
                                    borderBottomColor: "primary.main",
                                    transition: "transform 250ms ease-in-out",
                                    transform: isHaveOption("category", item.value) ? "scaleX(1)" : "scaleX(0)",
                                    borderBottom: "solid 4px black"
                                }
                            }}
                            onClick={() => handleSelectCategoryOption(item.value)}
                        >
                            {item.label}
                        </Typography>
                        {
                            index < 2 &&
                            <Box borderRight={"2px solid"} height={"4vw"} borderColor={"secondary.300"}></Box>
                        }
                    </React.Fragment>
                )}
            </Stack>
            <Stack direction={"row"}>
                <Stack
                    direction={"row"}
                    alignItems={"center"}
                    bgcolor={"secondary.main"}
                    color={"white"}
                    width={"50%"}
                    borderRight={"1px solid"}
                    borderRightColor={"secondary.400"}
                    onClick={toggleFilterOptions}
                >
                    <Typography
                        variant='h4'
                        fontWeight="bold"
                        textTransform={"uppercase"}
                        p={4}
                    >
                        tùy chọn
                    </Typography>
                    <IconButton>
                        {showFilterOptions ?
                            <ExpandLessIcon sx={{ fontSize: "2.8rem", color: "white" }} /> :
                            <ExpandMoreIcon sx={{ fontSize: "2.8rem", color: "white" }} />
                        }
                    </IconButton>
                </Stack>
                <Box
                    bgcolor={"secondary.main"}
                    color={"white"}
                    width={"50%"}
                    p={4}
                >
                    <Typography
                        fontSize={"1.8rem"}
                        textAlign={"end"}
                    >
                        {products.length} sản phẩm
                    </Typography>
                </Box>
            </Stack>
            <Collapse
                in={showFilterOptions}
                unmountOnExit
                mountOnEnter
            >
                <Stack
                    direction={"column"}
                >
                    <ProductListFilterMobile
                        title={"Trạng thái"}
                        options={statuses} //fixed-data
                        preselected={preselected["status"]} //selected options from redux store
                        mapKey={"status"} //mapkey
                        handleClickOption={handleClickOption}
                    />
                    <ProductListFilterMobile
                        title={"dòng sản phẩm"}
                        options={productLines} //fixed-data
                        preselected={preselected["productLine"]} //selected options from redux store
                        mapKey={"productLine"} //mapkey
                        handleClickOption={handleClickOption}
                    />
                    <ProductListFilterMobile
                        title={"giá"}
                        options={prices} //fixed-data
                        preselected={preselected["price"]} //selected options from redux store
                        mapKey={"price"} //mapkey
                        handleClickOption={handleClickOption}
                    />
                    <ProductListFilterMobile
                        title={"bộ sưu tập"}
                        options={collections} //fixed-data
                        preselected={preselected["collection"]} //selected options from redux store
                        mapKey={"collection"} //mapkey
                        handleClickOption={handleClickOption}
                    />
                    <ProductListFilterMobile
                        title={"chất liệu"}
                        options={materials} //fixed-data
                        preselected={preselected["material"]} //selected options from redux store
                        mapKey={"material"} //mapkey
                        handleClickOption={handleClickOption}
                    />
                    <Stack
                        direction={"column"}
                        spacing={1}
                        p={3}
                    >
                        <Typography
                            variant='h4'
                            fontWeight={"bold"}
                            textTransform={"uppercase"}
                            color={"primary.main"}
                        >
                            Màu sắc
                        </Typography>

                        <Grid container gap={3}>
                            {fixedColors.map((item, index) =>
                                <Grid
                                    item
                                    xs={2}
                                    sx={{
                                        width: "13.4vw",
                                        height: "13.4vw",
                                        border: isHaveOption("color", item.value) && '2px solid',
                                        p: "2px",
                                        transition: "all 0.2s",
                                        boxShadow: isHaveOption("color", item.value) && "0 1px 6px 3px rgba(0, 0, 0, 0.3)",
                                    }}
                                    key={index}
                                    onClick={() => handleClickOption("color", item.value)}
                                >
                                    <Box
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            bgcolor: item.color,
                                            border: "1px solid #e1e1e1"
                                        }}
                                    ></Box>
                                </Grid>
                            )}
                        </Grid>
                    </Stack>
                </Stack>
            </Collapse>
            {/* expanded filter options */}
            {showFilterOptions &&
                <Stack
                    direction={"row"}
                    position={"fixed"}
                    bottom={0}
                    width={"100%"}
                    zIndex={1}
                >
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        bgcolor={"secondary.main"}
                        color={"white"}
                        width={"50%"}
                        borderRight={"1px solid"}
                        borderRightColor={"secondary.400"}
                        justifyContent={"center"}
                        onClick={handleResetOptions}
                    >
                        <Typography
                            variant='h4'
                            fontWeight="bold"
                            textTransform={"uppercase"}
                            p={4}
                            textAlign={"center"}

                        >
                            xóa chọn
                        </Typography>
                    </Stack>
                    <Box
                        bgcolor={"secondary.main"}
                        color={"white"}
                        width={"50%"}
                        p={4}
                        onClick={handleFilterOptions}
                    >
                        <Typography
                            fontSize={"1.8rem"}
                            variant='h4'
                            fontWeight="bold"
                            textTransform={"uppercase"}
                            textAlign={"center"}
                        >
                            lọc
                        </Typography>
                    </Box>
                </Stack>
            }
            <Grid container spacing={2} px={1}>
                {products.map((item, index) =>
                    <Grid item xs={6} key={index}>
                        <Box sx={{ position: "relative" }}>
                            <Box component={Link} to={`/product-detail/${item.id}`}>
                                <Box component={"img"} src={item.images[0]} width={"100%"} />
                            </Box>
                            {item.liked ?
                                <FavoriteIcon
                                    onClick={handleAddToWishlist}
                                    sx={{
                                        position: "absolute",
                                        right: 10,
                                        bottom: 20,
                                        fontSize: "35px",
                                        color: "primary.main"
                                    }} /> :
                                <FavoriteBorderIcon
                                    onClick={handleAddToWishlist}
                                    sx={{
                                        position: "absolute",
                                        right: 10,
                                        bottom: 20,
                                        fontSize: "35px",
                                        color: "primary.main"
                                    }} />
                            }
                            {
                                item.saleOff > 0 ?
                                    <Box sx={{
                                        position: "absolute",
                                        left: 0,
                                        top: "8%",
                                        width: "50%",
                                        color: "white",
                                        fontStyle: "italic",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        bgcolor: "secondary.main",
                                        py: "3px",
                                    }}>
                                        Sale Off
                                    </Box>
                                    : item.newArrival
                                    &&
                                    <Box sx={{
                                        position: "absolute",
                                        left: 0,
                                        top: "8%",
                                        width: "50%",
                                        color: "white",
                                        fontStyle: "italic",
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        bgcolor: "secondary.main",
                                        py: "3px",
                                    }}>
                                        New Arrival
                                    </Box>
                            }
                        </Box>
                        <Box textAlign={"center"}>
                            <Box
                                component={Link}
                                to={`/product-detail/${item.id}`}
                                color={"black"}
                                fontWeight={"bold"}
                                sx={{
                                    ":hover": {
                                        color: "primary.main"
                                    }
                                }}
                            >
                                {item.name}
                            </Box>
                            <Typography py={1}>{item.color}</Typography>
                            <Typography fontWeight={"bold"}>
                                {item.saleOff > 0 ? getMoneyFormat(item.price * item.saleOff) : getMoneyFormat(item.price)} VND
                            </Typography>
                            {item.saleOff > 0 &&
                                <Typography
                                    sx={{
                                        textDecoration: "line-through",
                                        color: "secondary.400"
                                    }}>
                                    {getMoneyFormat(item.price)} VND
                                </Typography>
                            }
                        </Box>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}

export default ProductListMobile;