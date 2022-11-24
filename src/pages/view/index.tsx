//Paginas de usuários

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Layout, BodyLayout, SpanForgot, H1style } from "./style";
import { useNavigate, Link} from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';


interface IUsers{

    id: number;
    placa: string;
    name: string;
    status: string;
    data: string;   
    modelo: string;
    pagamento: string;

}

const Users: React.FC = () => {

    const [users, setUsers] = useState<IUsers[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        loadUsers()

}, [])

async function loadUsers() {
    const response = await api.get('/users')
    console.log(response);
    setUsers(response.data)

}

function formatDate(date: Date){
    return moment(date).format('DD/MM/YYYY')
}

function viewTask(){
    navigate("/users")
}

function newTask(){
    navigate("/users_cadastro")
}

function editTask(id: number){        
    navigate("/Registros/"+id)
    loadUsers()
}

async function deleteTask(id: number){
    await api.delete("/users/"+id)
    loadUsers()
}

return (
    <>
    <BodyLayout>
        <Layout>
    <div className="container">
        <br />
        <div className="user-header">
        <Link style={{ textDecoration: 'none' }} to="/"><SpanForgot>X</SpanForgot></Link>
        <H1style><h1>Página de Cliente</h1></H1style>
            <Button size="sm" variant="btn btn-outline-success" onClick= { viewTask } >Editar Cliente</Button>
    </div>
        <br />
        <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                <th>id</th>
                <th>Nº DA PLACA</th>
                <th>NOME</th>             
                <th>STATUS</th>
                <th>DATA</th>
                <th>MODELO</th>
                <th>PAGAMENTO</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.placa}</td>
                    <td>{user.name}</td> 
                    <td>{user.status}</td>                
                    <td>{user.data}</td>
                    <td>{user.modelo}</td>
                    <td>{user.pagamento}</td>
                    </tr>
                ))
            }
        </tbody>
        </Table>
    </div>
        </Layout>
    </BodyLayout>
    </>
    );
}

export default Users;