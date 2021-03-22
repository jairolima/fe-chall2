import React from "react"
import styled from "styled-components"
import { Box } from '../react/index'
import { Inicio, Roupas, Eletronicos, Acessorios } from '../@icons/react'
import Link from "next/link"

const Nav = styled.nav`
  width: 1024px;
  margin: 0 auto;
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
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

&:hover {
    color: ${props => props.theme.colors.red100 || ''};
    path {
        fill: red;
    }
}



`

export const NavBar = () => (


    <Box centerContent h="60px" shadow="0px 3px 6px #00000029">
        <Nav>
            <Ul>
                <Li>
                    <Link href="/" passHref>
                        <RedLink><Inicio mr="6px" />ínicio</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link href="http://localhost:3000/category/2" passHref>
                        <RedLink><Roupas mr="6px" />roupas</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link href="http://localhost:3000/category/3" passHref>
                        <RedLink><Eletronicos mr="6px" />eletrônicos</RedLink>
                    </Link>
                </Li>
                <Li>
                    <Link href="http://localhost:3000/category/4" passHref>
                        <RedLink><Acessorios mr="6px" />acessórios</RedLink>
                    </Link>
                </Li>
            </Ul>

        </Nav>

    </Box>
)

export default NavBar
