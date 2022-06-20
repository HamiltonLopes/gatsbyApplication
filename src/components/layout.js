import React from 'react';
import Footer from './footer';
import ResponsiveAppBar from './ResponsiveAppBar';
import './layout.css';

const Layout = props => {
    return (
        <div className={'dad'}>
                    <ResponsiveAppBar />
                <div className={'children'}>
                    {props.children}
                </div>
                    <Footer />
        </div>
    );
}

export default Layout;