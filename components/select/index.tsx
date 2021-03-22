import styled from 'styled-components'

export const Select = styled.select`
  width: 328px;
  height: 56px;
  background: transparent;
  color: ${props => props.theme.colors.gray400};
  font-size: ${props => props.theme.fontSizes.m};
  line-height: 24px;
  border: 1px solid rgba(246, 41, 150, 1);
  border-radius: 5px;
  padding: 0px 12px;

  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  background-image: none;


       option {
        color: red;
        font-weight: 400;
        padding:0 30px 0 10px;
        min-height:40px;
        display:flex;
        align-items:center;
        background:  #E5E5E5;
        border-top:#222 solid 1px;
        position:absolute;
        top:0;
        width: 100%;
        pointer-events:none;
        order:2;
        z-index:1;
        transition: background .4s ease-in-out;
        box-sizing: border-box;
        overflow: hidden;
        white-space: nowrap;
       }
`;
