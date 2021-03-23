import React from "react"
import styled from "styled-components"
import { Box } from '../react/index'
import { Inicio, Roupas, Eletronicos, Acessorios } from '../@icons/react'
import Link from "next/link"

const Nav = styled.nav`
  width: 1024px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
  width: 100%;
}

`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  @media only screen and (max-width: 1024px) {
    justify-content: space-around;
}
`

const Li = styled.li`
  display: block;
`

const RedLink = styled.a`
display: flex;
text-decoration: none;
margin-left: 6px;
font: normal normal 500 16px/21px Roboto;
color: ${props => props.theme.colors.gray400 || ''};
cursor: pointer;

&:hover {
    color: ${props => props.theme.colors.red100 || ''};
    path {
        fill: red;
    }
}

@media only screen and (max-width: 768px) {
display: flex;
flex-direction: column;
}

`

export const NavBar = () => (




    <Box zIndex="1" bgColor="#FFFFFF" desktopW="100%" tabletBottom="0px" tabletPosition="fixed" centerContent h="60px" shadow="0px 3px 6px #00000029">

        <Nav>
            <Ul>
                <Li>
                    <Link href="/">
                        <RedLink><Inicio mr="6px" />ínicio</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link as="/category/1?name=Roupas" href="/category/[category]?name=Roupas">
                        <RedLink><Roupas mr="6px" />roupas</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link as="/category/2?name=Eletrônicos" href="/category/[category]?name=Eletrônicos">
                        <RedLink><Eletronicos mr="6px" />eletrônicos</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link as="/category/3?name=Acessórios" href="/category/[category]?name=Acessórios">
                        <RedLink><Acessorios mr="6px" />acessórios</RedLink>
                    </Link>
                </Li>
            </Ul>

        </Nav>

    </Box>
)

export default NavBar
