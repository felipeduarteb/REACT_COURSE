import styled, { createGlobalStyle } from 'styled-components';

// Cria e exporta a const GlobalStyle. 
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }
`;
export const Button = styled.button`
   color: #000;
   border: none;
   width: 200px;
   height: 20px;

`;
