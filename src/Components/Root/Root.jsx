import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import data from '../../../public/Json/SiteData';

const Root = () => {
    return (
        <div className=''>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer SiteData={data}></Footer>
                       
        </div>
    );
};

export default Root;