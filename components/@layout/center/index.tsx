import styled from 'styled-components'

export const Center = styled.div`
  background-color: ${props => props.bgColor ? props.bgColor : ''};
  color: ${props => props.color ? props.color : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction ? props.direction : 'column'};
`;