import styled from "styled-components";

interface ButtonProps {

    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;

  }

export const Button = styled.button.attrs((/* props */) => ({ type: "button" }))<ButtonProps>`
  width: 302px;
  height: 36px;
  background: transparent linear-gradient(90deg, #24c92b 0%, #099f0f 100%) 0% 0%
    no-repeat padding-box;
  &:hover {
  background: "#099F0F"; // <Thing> when hovered
  }
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 18px;
  opacity: 1;
  border: 0;

  font-style: normal;
  font-variant: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 36px;
  font-family: ${props => props.theme.fonts[0]};

  letter-spacing: 0.64px;
  text-transform: lowercase;

  margin-top: ${props => props.mt || ''};
  margin-bottom: ${props => props.mb || ''};
  margin-left: ${props => props.ml || ''};
  margin-right: ${props => props.mr || ''};

  color: white;
  cursor: pointer;

`;
