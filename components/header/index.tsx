import Link from 'next/link';
import { Box, Flex, Center } from '../react/index'

import Image from 'next/image'

export function Header() {


    return (
        <>
            <Box h="109px" bg="transparent linear-gradient(95deg, #FF0000 0%, #F91E96 100%) 0% 0% no-repeat padding-box">
                <Center>
                    <Flex w="1024px" h="109px">
                        <Image src="/images/logo.svg" alt="me" width="220" height="38" />
                    </Flex>
                </Center>
            </Box>
        </>
    )

}