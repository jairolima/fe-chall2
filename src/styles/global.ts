import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: ${props => props.theme.colors.gray400};
    font: 400 16px Roboto, sans-serif;
  }

  .img-radius {
    border-radius: 14px 14px 0px 0px;
  }
  .img-radius-pdp {
    border-radius: 14px 14px 14px 14px;
  }
`
