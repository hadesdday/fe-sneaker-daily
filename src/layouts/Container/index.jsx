import React from 'react';
import Header from '../../parts/Header';
import Footer from '../../parts/Footer';
import { Box } from '@mui/material';

function AppContainer({ children }) {
    return (
        <>
            <Header />
            <Box component={"main"} sx={{ minHeight: "100vh" }}>
                {children}
            </Box>
            <Footer />
        </>
    );
}

export default AppContainer;