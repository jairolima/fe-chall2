import styled from 'styled-components'


interface TextProps {
    color?: string;
    weight?: string;

    fontSize?: string;
    lineHeight?: string;

    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;

    pl?: string;
    pr?: string;
  }



export const Text = styled.p<TextProps>`
  margin: 0;
  color: ${props => props.color || props.theme.colors.gray400};
  font-style: normal;
  font-variant: normal;
  font-weight: ${props => props.weight || ''};
  font-size: ${props => props.fontSize || ''};
  line-height: ${props => props.lineHeight || ''};
  font-family: ${props => props.theme.fonts[0]};

  margin-top: ${props => props.mt || ''};
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};

  padding-left: ${props => props.pl || ''};
  padding-right: ${props => props.pr || ''};



`
