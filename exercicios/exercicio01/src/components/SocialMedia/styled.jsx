import styled from 'styled-components';

export const Container = styled.div`
    width: 30vw;
    height: 5vw;
    display: flex;
    align-items: center;
`;
export const List = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const ListItem = styled.li`
    padding-right: 1vw;
    
`;
export const LinkMedia = styled.a`
    box-sizing: border-box;
    border: solid 1.5px #fff;
    padding: .1vw;
    display: flex; 
    overflow: hidden;
    border-radius: 100%;
    cursor: pointer;
`;
export const Icon = styled.img`
    height: 100%;
    width: 100%;
`;
