import styled from 'styled-components'

interface FlexProps {
    bgColor?: string;
    bg?: string;

    w?: string;
    h?: string;

    direction?: string;
    align?: string;
    justify?: string;
    wrap?: string;
    basis?: string;
    grow?: string;
    shrink?: string;
  }


export const Flex = styled.div<FlexProps>`
  display: flex;

  background-color: ${props => props.bgColor || ''};
  background: ${props => props.bg || ''};

  width: ${props => props.w || ''};
  height: ${props => props.h || ''};

  flex-direction: ${props => props.direction || ''};
  align-items: ${props => props.align || ''};
  justify-content: ${props => props.justify || ''};
  flex-wrap: ${props => props.wrap || ''};
  flex-basis: ${props => props.basis || ''};
  flex-grow: ${props => props.grow || ''};
  flex-shrink: ${props => props.shrink || ''};
`;
