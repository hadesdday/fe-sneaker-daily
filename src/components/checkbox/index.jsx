import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';

function CustomLabelCheckbox({
    name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    ...props
}) {
    const { field: { onChange, onBlur, value, ref } } = useController({ name, control });

    return (
        <FormControlLabel
            control={
                <Checkbox
                    value={value}
                    onChange={(event) => {
                        onChange(event)
                    }}
                    onBlur={onBlur}
                    inputRef={ref}
                    name={name}
                    {...props}
                />
            }
            label={label}
        />
    );
}

export default CustomLabelCheckbox;