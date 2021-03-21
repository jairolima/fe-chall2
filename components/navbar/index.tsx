import React from "react"
import styled from "styled-components"
import { Box } from '../react/index'
import { Inicio, Roupas, Eletronicos, Acessorios } from '../@icons/react'
import Link from "next/link"

const Nav = styled.nav`
  width: 1024px;
  margin: 0 auto;
  padding: 0.4em;
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

const A = styled.a`
  text-decoration: none;
  font: normal normal medium 16px/21px Roboto;
  color: ${props => props.theme.colors.gray400 || ''};
  &:hover {
    color: ${props => props.theme.colors.red100 || ''};
    fill: #DA4567;
  }
`

export const NavBar = () => (


<Box centerContent h="60px" shadow="0px 3px 6px #00000029">
  <Nav>
    <Ul>
      <Li>
        <Link href="/" passHref>
          <A><Inicio />ínicio</A>
        </Link>
      </Li>
      <Li>
        <Link href="/" passHref>
          <A><Roupas />roupas</A>
        </Link>
      </Li>
      <Li>
        <Link href="/" passHref>
          <A><Eletronicos />eletrônicos</A>
        </Link>
      </Li>
      <Li>
        <Link href="/" passHref>
          <A><Acessorios />acessórios</A>
        </Link>
      </Li>
    </Ul>

  </Nav>

  </Box>
)

export default NavBar
