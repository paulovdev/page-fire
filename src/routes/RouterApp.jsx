import { Route, Routes } from 'react-router-dom';
import { Fragment } from "react";
import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home';
import Add from '../pages/Add/Add';
import MyPc from '../pages/MyPc/MyPc';
import Private from './Private'

function RouterApp() {
    return (
        <Fragment >
            <Routes>
                <Route path="/" element={<Login />} />

                <Route  element={<Private />}>
                    <Route path="/home" element={<Home />} />

                    <Route path="/mypc" element={<MyPc />} />

                    <Route path="/add" element={<Add />} />
                </Route>
            </Routes>
        </Fragment >
    );
}

export default RouterApp;