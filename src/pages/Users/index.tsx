//Paginas de usuários

import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Layout, BodyLayout, BodyButton } from "./style";
import { useNavigate } from 'react-router-dom';
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
    navigate("/view_users")
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
        <h1>Página de Cliente</h1>
        <BodyButton>
            <Button size="sm" variant="btn btn-outline-success" onClick= { newTask } >Novo Cliente</Button>
            <Button size="sm" variant="btn btn-outline-success" onClick={() => viewTask()}>Pesquisar</Button>{' '}
        </BodyButton>
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
                <th>AÇÕES</th>
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
                    <td>
                    <Button size="sm" variant="primary" onClick={() => editTask(user.id)}>Editar</Button>{' '}
                    <Button size="sm" variant="danger" onClick={() => deleteTask(user.id)}>Remover</Button>{' '} 
                    </td>
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