import * as React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';



const Layout = ({children}) => {
    return(
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;