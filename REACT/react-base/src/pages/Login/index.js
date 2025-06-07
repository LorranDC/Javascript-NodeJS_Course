import React from 'react'

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {

    return (
        <Container>
            <Title>
                Login
                <small>Olá</small>
            </Title>
            <Paragrafo>
            <p>Lorem ipsum, dolor sit amet.</p>
            </Paragrafo>

            <button type='button' >Enviar</button>
        </Container>

    )



}