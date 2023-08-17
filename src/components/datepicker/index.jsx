import { DatePicker } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import React from 'react';
import { useController } from 'react-hook-form';

function CustomDatePicker({
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
        <DatePicker
            value={value}
            format='DD/MM/YYYY'
            onChange={(event) => {
                const formattedDate = format(event.$d, 'dd/MM/yyyy');
                onChange(formattedDate)
            }}
            onBlur={onBlur}
            inputRef={ref}
            name={name}
            label={label}
            fullWidth
            error={!!error}
            helperText={error ? error.message : null}
            {...props}
        />
    );
}

export default CustomDatePicker;