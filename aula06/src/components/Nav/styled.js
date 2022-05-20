import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ccc;
   padding: 0 .5vw;
   margin: 0;

`;
export const ContainerImage = styled.div`
    width: 120px;
    height: 70px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;

`;

export const NavStyle = styled.nav`
    margin-right: 10px;
`;
export const LinkStyle = styled.a`
    padding: 15px;
`;
