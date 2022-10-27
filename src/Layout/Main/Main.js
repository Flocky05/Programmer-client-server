import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../Component/Footer';
import Header from '../../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;