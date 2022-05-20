import React from 'react';

import { Container, ContainerImage, Image, Title, SubTitle } from './styled.js';

function Card({ filme }) {
    return (
        <Container>
            <ContainerImage>
                <Image src={filme.Poster} alt='Poster'></Image>
            </ContainerImage>


            <Title> {filme.Title} </Title>
            <SubTitle>Tipo: {filme.Type} </SubTitle>
            <SubTitle>Tipo: {filme.Year} </SubTitle>
        </Container>
    );
}

export default Card;