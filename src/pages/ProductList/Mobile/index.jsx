import { Box, Collapse, IconButton, Slide, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import DesktopProductListBanner from "../../../assets/banner/desktop_productlist.jpg";
import { gender, categories, statuses, styles, productLines, prices, collections, materials, fixedColors } from '../fixed-data';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ProductListFilterMobile from '../../../compositions/product-list-filter/Mobile';

function ProductListMobile({ products, options }) {
    //options: selected options
    function isHaveOption(key, option) {
        return options[key].includes(option);
    }

    const [showFilterOptions, setShowFilterOptions] = useState(true);
    function toggleFilterOptions() {
        setShowFilterOptions(!showFilterOptions);
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
                                },
                                ":hover": {
                                    fontWeight: "bold",
                                    ":after": {
                                        transform: "scaleX(1)"
                                    },
                                }
                            }}
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
                    direction={"row"}
                    bgcolor={"white"}
                >
                    <ProductListFilterMobile
                        title={"Trạng thái"}
                        options={statuses}
                        selectedOptions={options["status"]}
                    />
                </Stack>
            </Collapse>
        </Box >
    );
}

export default ProductListMobile;