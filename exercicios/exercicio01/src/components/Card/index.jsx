import React from 'react';

import { Container, Image } from './styled';
import foto from '../../assets/img/foto.jpg';

function Card() {
    return (
        <Container>
            <Image
            src={foto}
            alt='profile photo'
            />
        </Container>
    );
}

export default Card;