import React from "react";
import styled from "styled-components";
import logobeta from '../assets/img/logo-beta.svg'

export default function Header(){
   return(
    <Container>
        <img src={logobeta} alt="" className="logo-beta"/>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
    </Container>
   )
}

const Container = styled.div`{
    display: flex;
    width: 100%;
    position: fixed;
    height: 50px;
    top: 0;
    z-index: 1;
    background-color: #89B1D6;
    align-items: center;
    padding-left:10px;
    box-shadow: 5px 5px 8px -3px #000000;
}

p{
    color: white;
    font-size: 20px;
    font-weight: 400;
    padding-inline-end: 10px;
}
`