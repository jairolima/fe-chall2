import styled from 'styled-components'

interface SimpleProps {
    w?: string;
    h?: string;

    templateColumns?: string;
    columns?: string;
    spacing?: string;
    spacingX?: string;
    spacingY?: string;
  }


export const SimpleGrid = styled.div<SimpleProps>`
  display: grid;

  width: ${props => props.w || ''};
  height: ${props => props.h || ''};

  grid-template-columns: repeat(3, minmax(0px, 1fr));
  columns: ${props => props.columns || ''};
  gap: ${props => props.spacing || ''};
  column-gap: ${props => props.spacingX || ''};
  row-gap: ${props => props.spacingY || ''};


@media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0px, 1fr));
}
@media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
}
@media screen and (max-width: 425px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
}



`;
