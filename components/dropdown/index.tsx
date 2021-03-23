import React, {useState} from 'react'
import styled from 'styled-components'


export const Drop = styled.div`

.dropbtn {
  border: 1px solid #F62996;
  border-radius: 4px;
  background-color: #FFF;
  color: ${props => props.theme.colors.gray400};
  padding: 16px;
  font-size: 16px;
  cursor: pointer;
  width: 328px;
  display: flex;
  justify-content: flex-start
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 328px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  border-bottom: 1px solid rgba(249, 30, 150, 0.2);
}

.dropdown-content a:hover {
    background-color: #f1f1f1;

}

.dropdown:hover .dropdown-content {
  display: block;
  a {
    cursor: pointer;
  }
}

.dropdown:hover .dropbtn {
  color: #F62996;
  font-weight: 700;
}

.arrow {
    div {
        position:absolute;
   right: 10px;
    }
}

`

export function Dropdown({children}) {

const [currentOption, setCurrentOption] = useState("ordenar por");

    return (
        <Drop>
            {children}
        </Drop>
    )
}
