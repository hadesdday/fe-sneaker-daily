import { yupResolver } from '@hookform/resolvers/yup';
import { Button, CircularProgress, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { OtpField } from '../../components';
import { FORGOT_PASSWORD_FORM_TYPE, MAX_CODE_LENGTH, MAX_COUNTER_TIME } from '../../constants/fixed-data';
import { useClientOtpFormSchema } from '../../hooks';
import { generateArrayByMax } from '../../utils';

function OtpForm({ submittedEmail, type, setValidCode }) {
    const schema = useClientOtpFormSchema();

    const { control, handleSubmit, formState: { isSubmitting, isValid }, setValue, reset, getValues, setFocus } = useForm({
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

                let finalCode = Object.keys(data).reverse().reduce(function (acc, key) {
                    return acc + data[key];
                }, "").split("").join("");

                console.log("code", { finalCode });
                //demo only
                if (type === FORGOT_PASSWORD_FORM_TYPE && finalCode === "123456") {
                    console.log("ok");
                    setValidCode(true);
                }
                resolve(data);
            }, 1000);
        })
    }

    const [counter, setCounter] = useState(MAX_COUNTER_TIME);
    const timer = () => setCounter(counter - 1);

    useEffect(
        () => {
            if (counter <= 0) {
                return;
            }
            const counterInterval = setInterval(timer, 1000);
            return () => clearInterval(counterInterval);
        },
        [counter]
    );

    function resendOtp() {
        console.log("call api check if called send otp over 6 time => block 24 hours + not set counter");
        setCounter(MAX_COUNTER_TIME);
    }

    function handlePasteCode(e) {
        const numberRegex = /^[0-9]+$/;
        const pasteData = e.clipboardData.getData('Text');
        if (numberRegex.test(pasteData) && pasteData.length === MAX_CODE_LENGTH) {
            const pasteDataArray = pasteData.split("");
            for (let i = 1; i < 7; i++) {
                let key = `code${i}`;
                setValue(key, pasteDataArray[i - 1]);
            }
            setFocus(`code${MAX_CODE_LENGTH}`);
        }
    }

    function handleOnKeyDown(e) {
        if (e.key === "Backspace") {
            //prevent default backspace (if not, it will remove the previous input value + the current focused input for case input at the end)
            e.preventDefault();
            const currentValues = getValues();
            const currentKey = e.target.name;

            //delete object by key of current form values
            delete currentValues[currentKey];

            //convert to values array
            let codeArray = Object.values(currentValues);

            //fill empty value for each empty input
            if (codeArray.length < MAX_CODE_LENGTH) {
                for (let i = codeArray.length; i < MAX_CODE_LENGTH; i++) {
                    codeArray.push("");
                }
            }

            //set value for each input
            for (let i = 0; i < codeArray.length; i++) {
                setValue(`code${i + 1}`, codeArray[i]);
            }

            //focus to the previous input when the current was deleted
            if (currentKey !== "code1")
                setFocus(`code${parseInt(currentKey.replace("code", "")) - 1}`);
        } else if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(e.key))) {
            //prevent default backspace (if not, it will remove the previous input value + the current focused input for case input at the end)
            e.preventDefault();
            let key = e.target.name;
            setValue(key, e.key);
            if (key !== `code${MAX_CODE_LENGTH}`) {
                setFocus(`code${parseInt(key.replace("code", "")) + 1}`);
            } else if (key === `code${MAX_CODE_LENGTH}`) {
                setFocus(`code1`);
            }
        }
    }

    function resetFormValue() {
        reset();
    }

    return (
        <>
            <Stack
                direction={"column"}
                spacing={2}
                component={"form"}
                onSubmit={handleSubmit(handleSubmitForm)}
                pt={4}>
                <Stack direction={"row"} spacing={2} textAlign={"center"}>
                    {generateArrayByMax(MAX_CODE_LENGTH).map((item) => (
                        <OtpField
                            name={`code${item}`}
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
                            onPaste={(e) => handlePasteCode(e)}
                            onKeyDown={(e) => handleOnKeyDown(e)}
                            key={item}
                        />
                    ))}
                </Stack>

                <Typography
                    textAlign={"end"}
                    color={"primary.main"}
                    sx={{
                        cursor: "pointer"
                    }}
                    onClick={resetFormValue}
                >
                    Đặt lại
                </Typography>

                {counter > 0 ?
                    <Typography textAlign={"center"} color={"secondary.600"}>Vui lòng chờ {counter} giây để gửi lại.</Typography>
                    :
                    <Typography textAlign={"center"} color={"secondary.600"}>Bạn vẫn chưa nhận được?
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
        </>
    );
}

export default OtpForm;