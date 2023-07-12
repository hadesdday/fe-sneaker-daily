import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Collapse, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HomeCategoriesMobile({ categories }) {
    const [showMenList, setShowMenList] = useState(false);
    function toggleMenList() {
        setShowMenList(!showMenList);
    }

    const [showWomenList, setShowWomenList] = useState(false);
    function toggleWomenList() {
        setShowWomenList(!showWomenList);
    }

    const [showCategoriesPack, setShowCategoriesPack] = useState(false);
    function toggleCategoriesPack() {
        setShowCategoriesPack(!showCategoriesPack);
    }

    return (
        <Stack direction={"column"}
            display={{ xs: "flex", md: "none" }}
            borderTop={"2px solid black"}
            borderBottom={"2px solid black"}
        >
            <Box>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    p={3}
                    alignItems={"center"}
                    borderBottom={"1px dashed black"}
                    onClick={toggleMenList}
                >
                    <Typography
                        variant='h4'
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        color={showMenList ? "primary.main" : "black"}
                    >
                        Giày nam
                    </Typography>
                    {showMenList ?
                        <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showMenList ? "primary.main" : "black" }} /> :
                        <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showMenList ? "primary.main" : "black" }} />
                    }
                </Stack>
                <Collapse
                    in={showMenList}
                    mountOnEnter
                    unmountOnExit
                >
                    <Stack direction={"column"} p={3} bgcolor={"secondary.light"} borderBottom={"1px dashed black"}>
                        {
                            categories[0].map((item, index) =>
                                index > 0 &&
                                <Box
                                    component={Link}
                                    to={item.path}
                                    fontSize={"1.6rem"}
                                    color={"black"}
                                    py={1}
                                    sx={{
                                        ":hover": {
                                            color: "primary.main"
                                        }
                                    }}
                                    key={index}>
                                    {item.title}
                                </Box>
                            )
                        }
                    </Stack>
                </Collapse>

                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    p={3}
                    alignItems={"center"}
                    borderBottom={"1px dashed black"}
                    onClick={toggleWomenList}
                >
                    <Typography
                        variant='h4'
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        color={showWomenList ? "primary.main" : "black"}
                    >
                        Giày nữ
                    </Typography>
                    {showWomenList ?
                        <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showWomenList ? "primary.main" : "black" }} /> :
                        <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showWomenList ? "primary.main" : "black" }} />
                    }
                </Stack>
                <Collapse
                    in={showWomenList}
                    mountOnEnter
                    unmountOnExit
                >
                    <Stack direction={"column"} p={3} bgcolor={"secondary.light"} borderBottom={"1px dashed black"}>
                        {
                            categories[1].map((item, index) =>
                                index > 0 &&
                                <Box
                                    component={Link}
                                    to={item.path}
                                    fontSize={"1.6rem"}
                                    color={"black"}
                                    py={1}
                                    sx={{
                                        ":hover": {
                                            color: "primary.main"
                                        }
                                    }}
                                    key={index}>
                                    {item.title}
                                </Box>
                            )
                        }
                    </Stack>
                </Collapse>

                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    p={3}
                    alignItems={"center"}
                    onClick={toggleCategoriesPack}
                >
                    <Typography
                        variant='h4'
                        textTransform={"uppercase"}
                        fontWeight={"bold"}
                        color={showCategoriesPack ? "primary.main" : "black"}
                    >
                        Dòng sản phẩm
                    </Typography>
                    {showCategoriesPack ?
                        <KeyboardArrowDownIcon sx={{ fontSize: "3rem", color: showCategoriesPack ? "primary.main" : "black" }} /> :
                        <KeyboardArrowUpIcon sx={{ fontSize: "3rem", color: showCategoriesPack ? "primary.main" : "black" }} />
                    }
                </Stack>
                <Collapse
                    in={showCategoriesPack}
                    mountOnEnter
                    unmountOnExit
                >
                    <Stack direction={"column"} p={3} bgcolor={"secondary.light"}>
                        {
                            categories[2].map((item, index) =>
                                index > 0 &&
                                <Box
                                    component={Link}
                                    to={item.path}
                                    fontSize={"1.6rem"}
                                    color={"black"}
                                    py={1}
                                    sx={{
                                        ":hover": {
                                            color: "primary.main"
                                        }
                                    }}
                                    key={index}>
                                    {item.title}
                                </Box>
                            )
                        }
                    </Stack>
                </Collapse>
            </Box>
        </Stack>
    );
}

export default HomeCategoriesMobile;