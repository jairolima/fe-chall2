import React from 'react'
import Link from 'next/link';
import { Box, Flex, Center } from '../react/index'
import Image from 'next/image'

import styled from 'styled-components'

const PointerLink = styled.a`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        margin-left: 15px;
}
`

export function Header() {


    return (
        <>
            <Box desktopW="100%" h="109px" bg="transparent linear-gradient(95deg, #FF0000 0%, #F91E96 100%) 0% 0% no-repeat padding-box">
                <Center>
                    <Flex desktopW="100%" w="1024px" h="109px">
                        <Link href="/" passHref>
                            <PointerLink>
                                <Image src="/images/logo.svg" alt="me" width="220" height="38" />
                            </PointerLink>
                        </Link>
                    </Flex>
                </Center>
            </Box>
        </>
    )

}
