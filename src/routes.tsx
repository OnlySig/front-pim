import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Users from './pages/Users';
import UsersForm from './pages/Users/Form';
import Register from './pages/Registros';


const rotas: React.FC = () => {
    return(
        <Routes>
            <Route path="/" element ={<Home/>} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users_cadastro" element={<UsersForm/>} />
            <Route path="/Registros/:id" element={<Register/>} />      
        </Routes>
    );
}

export default rotas;
