import React from "react"
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Login/Register'
import NavBar from './componentes/Nav/NavBar'
import Home from './pages/Home/Home'
import Add from './pages/Add/Add'
import Profile from './pages/Profile/Profile'
import { AuthContextProvider } from "./context/AuthContext"
import ProtectedRoute from "./PrivateRoute/PrivateRoute.page"

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/home' element={
          <ProtectedRoute>

            <NavBar />
            <Home />


          </ProtectedRoute>
        } />

        <Route path='/profile' element={
          <ProtectedRoute>
            <NavBar />
            <Profile />
          </ProtectedRoute>
        } />

        <Route path='/add' element={
          <ProtectedRoute>
            <NavBar />
            <Add />
          </ProtectedRoute>
        } />
      </Routes>
    </AuthContextProvider>
  );
}
export default App