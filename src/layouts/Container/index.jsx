import { Box } from '@mui/material';
import { useWindowScroll } from "@uidotdev/usehooks";
import React from 'react';
import ScrollToTop from '../../components/scroll-to-top';
import Footer from '../../parts/Footer';
import HeaderDesktop from '../../parts/Header/Desktop';
import HeaderMobile from '../../parts/Header/Mobile';
import { HomeTips } from '../../compositions';
import { HOME_CAROUSEL_ITEMS } from '../../constants/dummy-data';

function AppContainer({ children }) {
    const [{ x, y }, scrollTo] = useWindowScroll();

    function scrollToTop() {
        scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <HomeTips carousels={HOME_CAROUSEL_ITEMS} />

            <Box component={"main"} sx={{ minHeight: "100vh" }}>
                {children}
            </Box>
            <Footer />
            <ScrollToTop scrollToTop={scrollToTop} visible={y > 100} />
        </>
    );
}

export default AppContainer;