
import { Box, Flex, Center, Text, StyledLink } from '../react/index'
// import Image from 'next/image'
import Link from 'next/link'


export function Menu() {



    return (
        <>
            <Box h="60px" shadow="0px 3px 6px #00000029">
                <Center>
                    <Box centerContent w="1024px" h="60px">

                        <Flex w="100%" justify="space-between">
                            <StyledLink href="/">Ínicio</StyledLink>
                            <StyledLink href="/">Roupas</StyledLink>
                            <StyledLink href="/">Eletrônicos</StyledLink>
                            <StyledLink href="/">Acessórios</StyledLink>
                        </Flex>

                    </Box>
                </Center>
            </Box>
        </>
    )

}