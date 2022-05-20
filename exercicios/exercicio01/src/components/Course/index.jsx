import React from 'react';

import { Container, ContainerImage, Image, Title  } from './styled';

function Course({ imagem, curso }) {
  return (
    <Container>
      <ContainerImage>
        <Image
          src={imagem}
          alt={curso}
        />
      </ContainerImage>

      <Title>{curso}</Title>
    </Container>
  );
}

export default Course;