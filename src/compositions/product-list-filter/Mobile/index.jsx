import ClearIcon from '@mui/icons-material/Clear';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

function ProductListFilterMobile({ title, options, preselected, mapKey, handleClickOption }) {

    function isHaveOption(option) {
        return preselected.includes(option);
    }

    return (
        <Box
            pl={2}
            py={3}
            width={"100%"}
            borderBottom={"1px dashed"}
        >
            <Typography
                fontSize={"4vw"}
                textTransform={"uppercase"}
                color={"primary.main"}
                fontWeight={"bold"}
                pl={2}
            >
                {title}
            </Typography>
            {options.map((item, index) =>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    key={index}
                    py={1}
                    pl={2}
                    mt={1}
                    bgcolor={isHaveOption(item.value) && "secondary.light"}
                    onClick={() => handleClickOption(mapKey, item.value)}
                >
                    <Typography
                        fontSize={"4vw"}
                        fontWeight={isHaveOption(item.value) && "bold"}
                    >
                        {item.label}
                    </Typography>
                    {isHaveOption(item.value) &&
                        <ClearIcon
                            sx={{ fontSize: "4vw", fontWeight: "bold", mr: 2 }} />
                    }
                </Stack>
            )}
        </Box>
    );
}

export default ProductListFilterMobile;