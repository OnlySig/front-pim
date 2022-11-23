import styled from "styled-components";

export const BodyLayout = styled.body`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Layout = styled.div`
    font-family: Poppins, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
    background: white;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    -webkit-backdrop-filter: blur(8.5px);
    border-radius: 10px;
    width: 1150px;
    height: 500px;
    overflow-y: scroll;
    h1 {
        margin-bottom: 0px;
        font-weight: bold;
        color: #72CCAA;
        font-size: 30px;
    }
  `

export const BodyButton = styled.div`
    display: flex;
    gap: 20px;
`
  
export const StyledInput = styled.input`
    display: block;
    margin: 40px 0px 100px 0px;
    text-align: center;
    width: 350px;
    height: 45px;
    border: none;
    outline: none;
    background-color: #F5F5F5;
    transition: 0.5s;

    &:focus {
        display: inline-block;
        box-shadow: 0 0 0 0.2rem #72CCAA;
        backdrop-filter: blur(12rem);
        border-radius: 1rem;
    }
    &::placeholder {
        color: #72CCAA;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
    }
`