//Editar Cliente

import React, { useState, ChangeEvent, useEffect } from 'react';
import { Layout, BodyLayout } from "./style";
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { useNavigate, useParams } from 'react-router-dom';

interface IUser{    
    id: string;
    placa: string;
    name: string;
    status: string;
    data: string;    
    modelo: string;    
    pagamento: string;    
}

const Users: React.FC = () => {
    
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const [model, setModel] = useState<IUser>({
        id: '',
        placa: '',
        name: '',
        status: '',
        data: '',
        modelo: '',
        pagamento: ''
    })
    
    useEffect(() => {
        console.log("Valor de Id"+id)
        if (id != undefined) {
            findUser(id)
        }
    }, [id])

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setModel({
            ...model,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()

        if (id != undefined) {
            const response = await api.put('/users/'+id, model)            
        }
        else{
            const response = await api.post('/users', model)
        }
        back()
    }

    function back(){
        navigate(-1);
    }

    async function findUser(id: string){
        const response = await api.get('/users/'+id)    
        console.log(response)
        setModel({
            id: response.data.id,
            placa: response.data.placa,
            name: response.data.name,
            status: response.data.status,
            data: response.data.data,
            modelo: response.data.modelo,
            pagamento: response.data.pagamento
        })
    }

    return (
    <>
    <BodyLayout>
    <Layout>
      <div className="container">
            <br />
            <div className="user-header">
                <h1>Editar Cliente {id} </h1>
                <Button variant="btn btn-outline-success" size="sm" onClick={back}>Voltar</Button>
            </div>
            <br />
            <div className="container">
                <Form onSubmit={onSubmit}>
                  <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control
                            disabled  
                            type="text"
                            name="id"
                            value={model.id}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                            <Form.Label>Placa</Form.Label>
                            <Form.Control
                                type="text"
                                name="placa"
                                value={model.placa}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={model.name}
                                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                        </Form.Group>

                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                            type="text"
                            name="status"
                            value={model.status}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Data</Form.Label>
                        <Form.Control
                            type="text"
                            name="data"
                            value={model.data}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control
                            type="text"
                            name="modelo"
                            value={model.modelo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Pagamento</Form.Label>
                        <Form.Control
                            type="text"
                            name="pagamento"
                            value={model.pagamento}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}/>
                    </Form.Group>
                    <br/>
                    <Button variant="btn btn-outline-success" type="submit">
                        Salvar
                    </Button>
                </Form>
            </div>
        </div>
        </Layout>
        </BodyLayout>
    </>
    );
}
export default Users;
