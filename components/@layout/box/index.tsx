import styled from 'styled-components'

interface BoxProps {
    bgColor?: string;
    bg?: string;
    w?: string;
    h?: string;
    borderRadius?: string;
    overflow?: string;
    shadow?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;

    p?: string;
    pt?: string;
    pb?: string;
    pl?: string;
    pr?: string;

    minH?: string;
    maxH?: string;

    centerContent?: boolean;
    my?: string;
  }

export const Box = styled.div<BoxProps>`
background-color: ${props => props.bgColor || ''};
background: ${props => props.bg || ''};

width: ${props => props.w || ''};
height: ${props => props.h || ''};
min-height: ${props => props.minH || ''};
max-height: ${props => props.maxH || ''};

border-radius: ${props => props.borderRadius || ''};
overflow: ${props => props.overflow || ''};
box-shadow: ${props => props.shadow || ''};

margin-top: ${props => props.mt || ''};
margin-bottom: ${props => props.mb || ''};
margin-left: ${props => props.ml || ''};
margin-right: ${props => props.mr || ''};

padding: ${props => props.p || ''};
padding-top: ${props => props.pt || ''};
padding-bottom: ${props => props.pb || ''};
padding-left: ${props => props.pl || ''};
padding-right: ${props => props.pr || ''};


  ${props => {
    if (props.centerContent) {
      return `
      display: flex;
      align-items: center;
      justify-content: center;
    `
    }
  }}

${props => {
    if (props.my) {
      return `
        margin-top: ${props.my}
        margin-bottom: ${props.my}
    `
    }
  }}
`
