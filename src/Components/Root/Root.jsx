import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container max-w-screen-xl mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
                       
        </div>
    );
};

export default Root;