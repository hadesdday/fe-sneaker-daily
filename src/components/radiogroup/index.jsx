import { FormControl, FormHelperText, RadioGroup } from '@mui/material';
import React from 'react';
import { useController } from 'react-hook-form';

function CustomRadioGroup({
    name,
    label,
    control,
    onChange: externalOnChange,
    onBlur: externalOnBlur,
    ref: externalRef,
    value: externalValue,
    children,
    handleDeliveryMethodChange,
    handlePaymentMethodChange,
    ...props
}) {
    const { field: { onChange, onBlur, value, ref }, fieldState: { error } } = useController({ name, control });

    function handleOnChange(event) {
        if (handleDeliveryMethodChange) {
            onChange(Number(event.target.value));
            handleDeliveryMethodChange(Number(event.target.value))
        } else if (handlePaymentMethodChange) {
            onChange(Number(event.target.value));
            handlePaymentMethodChange(Number(event.target.value))
        }
    }

    return (
        <>
            <FormControl error={!!error}>
                <RadioGroup
                    value={value}
                    control={control}
                    onChange={(event) => {
                        handleOnChange(event);
                    }}
                    onBlur={onBlur}
                    name={name}
                    {...props}
                >
                    {children}
                </RadioGroup>
                {error && <FormHelperText>{error.message}</FormHelperText>}
            </FormControl>
        </>
    );
}

export default CustomRadioGroup;