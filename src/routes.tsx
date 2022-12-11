import React from 'react';
import {Routes, Route} from 'react-router-dom'

import { Home } from './pages/landing page/Home';
import Users from './pages/Users';
import UsersForm from './pages/Users/Form';
import Register from './pages/Registros';
import View  from './pages/view';
import { Login } from './pages/Login';
// import Cadastro from './pages/Cadastro/Cadastro';
// import { Forgot } from './pages/LoginForgot/Forgot'; 

const rotas: React.FC = () => {
    return(
        <Routes>
            <Route path="/landingPage" element ={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users_cadastro" element={<UsersForm/>} />
            <Route path="/Registros/:id" element={<Register/>} />
            <Route path='/view_users' element={<View/>} />   
            <Route path='/' element={<Login/>} />   
            {/* <Route path='/register' element={<Cadastro/>}/>
            <Route path='/recover' element={<Forgot/>}/> */}
        </Routes>
    );
}

export default rotas;
