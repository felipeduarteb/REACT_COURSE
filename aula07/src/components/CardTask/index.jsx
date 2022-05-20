import React from 'react';


import { Container, ContainerText, ContainerImage, Status } from './styled';

function CardTask({ fazer, status, onClick, onDone, data }) {

    return (
        <Container>
            <ContainerText>
                <p>Tarefa que devo fazer: {fazer}</p>
                <Status status={data.done}>Status da tarefa: {status}</Status>
            </ContainerText>

            <ContainerImage>
               <button onClick={onClick}>Deletar</button>
               <button onClick={onDone}>Concluir</button>
            </ContainerImage>
        </Container>
    );
}

export default CardTask;