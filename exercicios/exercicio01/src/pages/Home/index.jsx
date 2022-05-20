import React from 'react';
import SocialMedia from '../../components/SocialMedia';
import Presentation from '../../components/Presentation';
import { Container, ContainerApresentation } from './styled';
import Card from '../../components/Card'

function Home() {
    return (
        <Container>
            <ContainerApresentation>
                <SocialMedia />
                <Presentation />
            </ContainerApresentation>
            <Card />
        </Container>
    );
}

export default Home;