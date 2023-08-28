import { FormControl, FormHelperText, InputLabel, Select } from '@mui/material';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';

function CustomSelect({
    name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    children,
    handleCityChange,
    handleDistrictChange,
    ...props
}) {
    const { field: { onChange, onBlur, value, ref }, fieldState: { error } } = useController({ name, control });

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    function handleOnChange(event) {
        onChange(event.target.value)
        if (handleCityChange) {
            handleCityChange();
        } else if (handleDistrictChange) {
            handleDistrictChange();
        }
    }

    return (
        <>
            <FormControl error={!!error}>
                <InputLabel id={name}>{label}</InputLabel>
                <Select
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={value}
                    label={label}
                    control={control}
                    onChange={(event) => {
                        handleOnChange(event);
                    }}
                    onBlur={onBlur}
                    inputRef={ref}
                    labelId={name}
                    fullWidth
                    name={name}
                    {...props}
                >
                    {children}
                </Select>
                {error && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </>
    );
}

export default CustomSelect;