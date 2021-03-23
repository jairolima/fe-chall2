import styled from 'styled-components'

interface FlexProps {
    bgColor?: string;
    bg?: string;

    w?: string;
    h?: string;

    tabletW?: string;


    desktopW?: string;
    desktopH?: string;

    desktopMl?: string;
    desktopMr?: string;

    desktopPl?: string;
    desktopPr?: string;

    direction?: string;
    mobileDirection?: string;
    tabletDirection?: string;

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


@media screen and (max-width: 768px) {
    flex-direction: ${props => props.tabletDirection || ''};
    width: ${props => props.tabletW || ''};
}
@media screen and (max-width: 425px) {
    flex-direction: ${props => props.mobileDirection || ''};
}
@media only screen and (max-width: 1024px) {
    width: ${props => props.desktopW || ''};
    height: ${props => props.desktopH || ''};
    margin-left: ${props => props.desktopMl || ''};
    margin-right: ${props => props.desktopMr || ''};
    padding-left: ${props => props.desktopPl || ''};
    padding-right: ${props => props.desktopPr || ''};
}


`;
