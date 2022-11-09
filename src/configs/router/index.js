import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/authentication/login'
import RegisterCustomer from '../../pages/authentication/register/customer'
import RegisterSeller from '../../pages/authentication/register/seller'
import ResetPassword from '../../pages/authentication/forgot password/resetPassword'

const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to="Home" replace="true"/>} />
                <Route path="/home" element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registerCustomer' element={<RegisterCustomer/>} />
                <Route path='/registerSeller' element={<RegisterSeller/>} />
                <Route path='/resetPassword' element={<ResetPassword/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router