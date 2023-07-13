import { Box } from '@mui/material';
import { useWindowScroll } from "@uidotdev/usehooks";
import React from 'react';
import ScrollToTop from '../../components/scroll-to-top';
import Footer from '../../parts/Footer';
import HeaderDesktop from '../../parts/Header/Desktop';
import HeaderMobile from '../../parts/Header/Mobile';

function AppContainer({ children }) {
    const [{ x, y }, scrollTo] = useWindowScroll();

    function scrollToTop() {
        scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <Box component={"main"} sx={{ minHeight: "100vh" }}>
                {children}
            </Box>
            <Footer />
            <ScrollToTop scrollToTop={scrollToTop} visible={y > 100} />
        </>
    );
}

export default AppContainer;