import { TextField } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';

function OtpField({
    name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    ...props
}) {
    const { field: { onChange, onBlur, value, ref }, fieldState: { error } } = useController({ name, control });

    return (
        <TextField
            value={value}
            onChange={(event) => {
                onChange(event)
            }}
            onBlur={onBlur}
            inputRef={ref}
            name={name}
            label={label}
            fullWidth
            error={!!error}
            {...props}
        />
    );
}

export default OtpField;