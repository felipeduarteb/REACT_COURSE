import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 200px;
  background: #4283ab;
  display: flex;
  flex-direction: column;
  gap: 1vw;
  padding: .5vw;
`;
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5vw;
`;
export const ContainerImage = styled.div`
`;

export const Status = styled.p`
  color: ${(props) => (props.status ? 'green' : 'red')};
`;


