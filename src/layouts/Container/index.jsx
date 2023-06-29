import React from 'react';
import Header from '../../parts/Header';
import Footer from '../../parts/Footer';

function AppContainer({ children }) {
    return (
        <>
            <Header />
            <main style={{ minHeight: "100vh" }}>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default AppContainer;