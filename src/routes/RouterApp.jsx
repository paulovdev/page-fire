import { Route, Routes } from 'react-router-dom';
import { Fragment } from "react";
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';
import Add from '../pages/Add/Add';
import MyPc from '../pages/MyPc/MyPc';

import PrivateRoutes from './Private'


function RouterApp() {
    return (
        <Fragment >
            <Routes>
                <Route path="/" element={<Login />} />

                <Route path="/Home" element={<PrivateRoutes />}>
                    <Route path="/Home" element={<Home />} />
                </Route>
                <Route path="/mypc" element={<PrivateRoutes />}>
                    <Route path="/mypc" element={<MyPc />} />
                </Route>

                <Route path="/add" element={<PrivateRoutes />}>
                    <Route path="/add" element={<Add />} />
                </Route>
            </Routes>
        </Fragment >
    );
}

export default RouterApp;