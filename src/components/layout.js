import React from 'react';
import Header from "./header";
import Footer from './footer';
import ResponsiveAppBar from './ResponsiveAppBar';

const Layout = props => {
    return(
        <div>
            <ResponsiveAppBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;