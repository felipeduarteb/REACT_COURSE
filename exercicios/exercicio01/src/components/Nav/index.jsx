import React from 'react';
import { Container, ContainerLogo, Image, List, ListItem, LinkStyle } from './styled';
import  logotipo  from '../../assets/img/logotipo.png';

console.log(logotipo);
function Nav() {
    return <Container>
        <ContainerLogo>
            <Image
                src= {logotipo}
                alt='logo' />
        </ContainerLogo>

        <List>
            <ListItem><LinkStyle to='/'>Home</LinkStyle></ListItem>
            <ListItem><LinkStyle to='/cursos'>Cursos</LinkStyle></ListItem>
            <ListItem><LinkStyle to='/contato'>Contato</LinkStyle></ListItem>
        </List>
    </Container>
}

export default Nav;