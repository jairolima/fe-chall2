import styled from 'styled-components'
import Link from 'next/link'

export const CustomLink = styled(Link)`
  color: red;
  background: blue;
  font-size: 40px;
`

export function StyledLink({children, href}) {

    return(
        <CustomLink href={href}>
            {children}
        </CustomLink>
    )
}