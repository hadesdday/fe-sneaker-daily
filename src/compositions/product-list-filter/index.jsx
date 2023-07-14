import { Stack, Typography } from '@mui/material';
import React from 'react';
import ClearIcon from '@mui/icons-material/Clear';

//options: prefix options, selectedOptions: selected options
function ProductListFilter({ title, options, selectedOptions }) {

    function isHaveOption(option) {
        return selectedOptions.includes(option);
    }

    return (
        <Stack
            direction={"column"}
            spacing={1}
            borderBottom={"2px dashed"}
            py={3}
        >
            <Typography
                variant='h5'
                fontWeight={"bold"}
                textTransform={"uppercase"}
                color={"primary.main"}
            >
                {title}
            </Typography>

            {options.map((item, index) =>
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    sx={{
                        transition: "all 0.2s",
                        px: 2,
                        py: 1,
                        cursor: "pointer",
                        bgcolor: isHaveOption(item.value) && "secondary.light",
                        ":hover": {
                            bgcolor: "secondary.light"
                        }
                    }}
                    key={index}
                >
                    <Typography
                        fontWeight={isHaveOption(item.value) && "bold"}
                    >
                        {item.label}
                    </Typography>
                    {isHaveOption(item.value) && <ClearIcon />}
                </Stack>
            )}
        </Stack>
    );
}

export default ProductListFilter;