import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/authentication/login'
import RegisterCustomer from '../../pages/authentication/register/customer'
import RegisterSeller from '../../pages/authentication/register/seller'
import ResetPassword from '../../pages/authentication/forgotPassword/resetPassword'
import ConfirmPassword from '../../pages/authentication/forgotPassword/confirmPassword'
import Relogin from '../../pages/authentication/forgotPassword/relogin'
import ProfileCustomer from '../../pages/profile/customer/profile'
import Adress from '../../pages/profile/customer/adress'
import Order from '../../pages/profile/customer/order'
import ProfileSeller from '../../pages/profile/seller/profile'
import MyBag from '../../pages/myBag'

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
                <Route path='/confirmPassword' element={<ConfirmPassword/>} />
                <Route path='/relogin' element={<Relogin/>} />
                <Route path='/profileCustomer' element={<ProfileCustomer/>} />
                <Route path='/profileAddress' element={<Adress/>} />
                <Route path='/profileOrder' element={<Order/>} />
                <Route path='/profileSeller' element={<ProfileSeller/>} />
                <Route path='/myBag' element={<MyBag/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router