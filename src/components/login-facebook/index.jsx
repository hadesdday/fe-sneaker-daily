import { Box, Button } from '@mui/material';
import React from 'react';
import FacebookIcon from "../../assets/icon/facebook.png";

function LoginFacebookButton(props) {
    return (
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
            <Box component={"img"} src={FacebookIcon} alt='Facebook' width={20} mr={1} />
            Facebook
        </Button>
    );
}

export default LoginFacebookButton;