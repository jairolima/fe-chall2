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
  display: "inline-grid";

  width: ${props => props.w || ''};
  height: ${props => props.h || ''};

  grid-template-columns: ${props => props.templateColumns || ''};
  columns: ${props => props.columns || ''};
  gap: ${props => props.spacing || ''};
  column-gap: ${props => props.spacingX || ''};
  row-gap: ${props => props.spacingY || ''};

`;
