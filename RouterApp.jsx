import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import Add from './src/pages/Add/Add'
import MyPc from './src/pages/MyPc/MyPc';

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mypc" element={<MyPc />} />
            <Route path="/add" element={<Add />} />
        </Routes>
    );
}

export default RouterApp;