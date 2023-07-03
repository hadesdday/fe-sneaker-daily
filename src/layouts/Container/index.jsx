import React from 'react';
import Footer from '../../parts/Footer';
import { Box } from '@mui/material';
import HeaderMobile from '../../parts/Header/Mobile';
import HeaderDesktop from '../../parts/Header/Desktop';

function AppContainer({ children }) {
    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <Box component={"main"} sx={{ minHeight: "100vh" }}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default AppContainer;