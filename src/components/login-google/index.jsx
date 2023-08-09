import { Box, Button } from '@mui/material';
import React from 'react';
import GoogleIcon from "../../assets/icon/google.png";

function LoginGoogleButton() {

    return (
        <>
            <Button
                variant="outlined"
                sx={{
                    borderColor: "secondary.700",
                    color: "black",
                    width: "100%",
                    ":hover": {
                        borderColor: "secondary.700",
                    }
                }}
            >
                <Box component={"img"} src={GoogleIcon} alt='Google' width={20} mr={1} />
                Google
            </Button>
        </>
    );
}

export default LoginGoogleButton;