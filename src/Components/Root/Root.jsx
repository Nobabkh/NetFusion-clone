import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import data from '../../../public/Json/SiteData';
import Home from '../Home/Home';

const Root = () => {
    const [homeSelector,setHomeSelector] = useState(0);
    
    return (
        <div className=''>
            <Nav selector={(data) => {
                console.log(data);
                setHomeSelector(data);}}></Nav>
            <Home selector={homeSelector} setSelector={setHomeSelector} />
            <Footer SiteData={data}></Footer>
                       
        </div>
    );
};

export default Root;