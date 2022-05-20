import styled from 'styled-components';

export const Button = styled.button`
    background: ${ (props) => props.size ? 'red' : 'blue'};
    width: ${ (props) => props.size ? '100px' : '200px'}; 
    padding: 25px;
    color: #fff;
    border: none;
    cursor: pointer;
`;

