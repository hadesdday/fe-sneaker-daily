import { Box } from '@mui/material';
import React from 'react';
import FooterDesktop from './Desktop';
import FooterMobile from './Mobile';

function Footer(props) {
    return (
        <Box mt={10} bgcolor={"secondary.100"}>
            <FooterDesktop />
            <FooterMobile />
        </Box>
    );
}

export default Footer;