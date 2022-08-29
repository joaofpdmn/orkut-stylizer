import React from "react";
import logo from '../assets/img/logo.png'
import styled from "styled-components";
import Container from "../common/Container";
import Padding from "../common/Padding";
import Input from "../common/Input";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

export default function StartScreen({ setName, setStatus }) {
    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        alert("Tela principal gerada com sucesso!");
        navigate('/main');
    }
    
    return (
        <Container>
            <Padding value={100} />
            <Logo src={logo} alt="logo" />
            <Padding value={100} />
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" type="text" onChange={e => setName(e.target.value)}/>
                <Input placeholder="Status" type="text" onChange={e => setStatus(e.target.value)}/>
                <Button type="submit">Gerar</Button>
            </form>
        </Container>
    )
}

const Logo = styled.img`
{
    width:500px;
}
`


