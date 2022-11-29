import styled from "styled-components";
//import * as Image from "../../Assets/fundo.jpg";

export const SpanForgot = styled.div`
  margin-top: 5px;
  display: flex;
  color:#72CCAA;
  font-size: 12px;
`

export const SpanCar = styled.span`
  color: #72CCAA;
  font-size: 25px;
`

export const Layout = styled.div`
  font-family: Poppins, sans-serif;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px auto 0px auto;
  width: 500px;
  padding: 2%;
  background: white;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  h1 {
    font-weight: 100;
    font-size: 25px;
    color: #72CCAA;
  }
  span {
    display: flex;
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #72CCAA;
  }
`;

export const StyledInput = styled.input`
  border-radius: 5px;
  width: 308px;
  height: 43px;
  padding: 1vh;
  border: none;
  outline: none;
  color: black;
  font-size: 1rem;
  font-weight: normal;
  margin-bottom: 20px;
  transition: 0.5s;
  text-align: center;

  &:focus {
    display: inline-block;
    backdrop-filter: blur(12rem);
  }
  &:hover {
    box-shadow: 0 0 0 0.2rem #72CCAA;
    border-radius: 1rem;
    &::placeholder {
      color: #72CCAA;
      font-size: 1rem;
      text-align:center;
      font-weight: bold;
  }
  }
  
`;
 
