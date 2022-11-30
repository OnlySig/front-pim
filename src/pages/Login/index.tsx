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
  email: yup.string().email('email não é valido').required('Campo obrigatório'),
  password: yup.string().min(6,'No minimo 6 caracteres').required('Campo obrigatório'),
}).required();

const Login = () => {  
  const navigate =  useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  
  const onSubmit = async (formData: IFormData) => {
    const { data } = await apiLogin.get(`users?email=${formData.email}&senha=${formData.password}`)
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
          <Input name='email' errorMessage={errors?.email?.message} control={control}  placeholder="Email" />
          <Input name='password' errorMessage={errors?.password?.message} control={control}  placeholder="Password"/>
          <Button type="submit" title="Entrar" variant="secondary" /> 
      </form>
        <Link style={{ textDecoration: 'none' }} to="/register"><SpanForgot>Cadastrar-se</SpanForgot></Link>
        <Link style={{ textDecoration: 'none' }} to="/recover"><SpanForgot>Esqueci minha senha</SpanForgot></Link>
        </Layout>
      </>
  )
}

export { Login };