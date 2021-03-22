import styled from 'styled-components'

interface CenterProps {
    bgColor?: string;
    color?: string;
    direction?: string;
    w?: string;
    h?: string;

    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
}


export const Center = styled.div<CenterProps>`
  background-color: ${props => props.bgColor ? props.bgColor : ''};
  color: ${props => props.color ? props.color : ''};
  width: ${props => props.w || ''};
  height: ${props => props.h || ''};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${props => props.direction ? props.direction : 'column'};

  margin-top: ${props => props.mt || ''};
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};
`;
