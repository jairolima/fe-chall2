
import { Box, Center, Flex } from '../react/index'
import { Facebook, Instagram, Twitter, Youtube } from '../@icons/react'

export function Footer() {


    return (
        <>
            <Box desktopW="100%" h="109px" bg="transparent linear-gradient(180deg, #FF0000 0%, #F91E96 100%) 0% 0% no-repeat padding-box">
                <Center>
                    <Box desktopW="100%" centerContent w="1024px" h="109px">
                        <Flex tabletW="90%" w="40%" justify="space-around">
                            <Facebook />
                            <Instagram />
                            <Twitter />
                            <Youtube />
                        </Flex>
                    </Box>
                </Center>
            </Box>
        </>
    )

}
