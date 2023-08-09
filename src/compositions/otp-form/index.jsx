import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { OtpField } from '../../components';
import { useClientOtpFormSchema } from '../../hooks';

function OtpForm({ submittedEmail }) {
    const schema = useClientOtpFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isValid } } = useForm({
        defaultValues: {
            code1: "",
            code2: "",
            code3: "",
            code4: "",
            code5: "",
            code6: ""
        },
        resolver: yupResolver(schema)
    });

    async function handleSubmitForm(data) {
        await new Promise((resolve) => {
            setTimeout(() => {
                console.log("check otp here");
                console.log(data);

                let finalCode = Object.keys(data).reduce(function (acc, key) {
                    return acc + data[key];
                }, "").split("").reverse().join("");

                console.log("code", { finalCode });
                resolve(data);
            }, 1000);
        })
    }


    const MAX_COUNTER_TIME = 6;
    const [counter, setCounter] = useState(MAX_COUNTER_TIME);
    const timer = () => setCounter(counter - 1);

    useEffect(
        () => {
            if (counter <= 0) {
                return;
            }
            const counterInterval = setInterval(timer, 1000);
            console.log("call api check if called send otp over 6 time => clearInterval + block 24 hours");
            return () => clearInterval(counterInterval);
        },
        [counter]
    );

    function resendOtp() {
        setCounter(MAX_COUNTER_TIME);
    }

    return (
        <Stack
            direction={"column"}
            spacing={2}
            component={"form"}
            onSubmit={handleSubmit(handleSubmitForm)}
            pt={4}>
            <Stack direction={"row"} spacing={2} textAlign={"center"}>
                <OtpField
                    name='code1'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
                <OtpField
                    name='code2'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
                <OtpField
                    name='code3'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
                <OtpField
                    name='code4'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
                <OtpField
                    name='code5'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
                <OtpField
                    name='code6'
                    placeholder="-"
                    control={control}
                    inputProps={{
                        maxLength: 1
                    }}
                    sx={{
                        "& input": {
                            textAlign: "center"
                        }
                    }}
                />
            </Stack>

            {counter > 0 ?
                <Typography textAlign={"center"} pt={3} color={"secondary.600"}>Vui lòng chờ {counter} giây để gửi lại.</Typography>
                :
                <Typography textAlign={"center"} pt={3} color={"secondary.600"}>Bạn vẫn chưa nhận được?
                    <Typography
                        component={"span"}
                        color={"primary.main"}
                        sx={{ cursor: "pointer" }}
                        onClick={resendOtp}> Gửi lại</Typography>
                </Typography>
            }

            <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting || !isValid}
                startIcon={
                    isSubmitting && (
                        <CircularProgress color="inherit" size={"1em"} />
                    )
                }
                sx={{
                    fontWeight: "bold"
                }}
            >
                xác nhận
            </Button>
        </Stack>
    );
}

export default OtpForm;