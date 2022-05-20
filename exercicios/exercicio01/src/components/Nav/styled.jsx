import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const flex = {
    'display': 'flex',
    'flex-direction': 'row',
    'align-items': 'center',
    'justify-content': 'space-between'
}

export const Container = styled.div`
    ${flex};
    width: 100%;
    height: 4.5vw;
    padding: .3vw .5vw;
    background: #1F2235;
`;
export const ContainerLogo = styled.div`
width: 7vw;
height: 100%;
${flex};
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const List = styled.ul`
  display: flex;
`;
export const ListItem = styled.li`
  padding-left: 1vw;
`;
export const LinkStyle = styled(NavLink)`
  cursor: pointer;
  padding: .8vw;
  text-decoration: none;
  color: #fff;
  &.active {
    background: tomato;
  }
`;

