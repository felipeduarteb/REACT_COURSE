import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ContainerImage, Image, NavStyle, LinkStyle } from './styled.js';

function Nav() {
    return (
        <Container>
            <ContainerImage>
            <Image
                src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'
                alt='logo' />
                </ContainerImage>
            <NavStyle>
                <Link to='/'>Home</Link> |
                <Link to='/filmes'>Filmes</Link> |
                <Link to='/'>Login</Link>
            </NavStyle>
        </Container>
    );
}

export default Nav;