import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { apiLogin } from '../../services/api';
import { Link, useNavigate } from "react-router-dom";

import {Layout, SpanForgot, SpanCar } from "./style";


import { Button } from "../../components/Button/index";
import { Input } from "../../components/Input/index";
import { IFormData } from "./types.js";

const schema = yup.object({
  id: yup.number().required('Campo obrigatório'),
  placa: yup.string().min(3,'No minimo 3 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {  
  const navigate =  useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  
  const onSubmit = async (formData: IFormData) => {
    const { data } = await apiLogin.get(`users?id=${formData.id}&placa=${formData.placa}`)
    try {
      if(data.length === 1) {
        navigate('/landingPage')
      } else {
        alert('Email ou senha invalidos')
      }
    } catch {
      alert('Houve um erro, tente novamente!')
    }
  };
  
  return (
    <>
      <Layout>
      <span>Entrar no Safe<h1>Car</h1></span>
      <form onSubmit={handleSubmit(onSubmit)}>
          <Input name='id' errorMessage={errors?.id?.message} control={control}  placeholder="Id" />
          <Input name='placa' errorMessage={errors?.placa?.message} control={control}  placeholder="Placa"/>
          <Button type="submit" title="Entrar" variant="secondary" /> 
      </form>
        <Link style={{ textDecoration: 'none' }} to="/register"><SpanForgot>Cadastrar-se</SpanForgot></Link>
        <Link style={{ textDecoration: 'none' }} to="/recover"><SpanForgot>Esqueci minha senha</SpanForgot></Link>
        </Layout>
      </>
  )
}

export { Login };