import React from 'react';
import { Button, Box, Text, Center } from '../react/index'
import Link from 'next/link';
import Image from 'next/image'

export function Card({ id, title, price, image }) {


    return (
        <>
            <Box w="328px" h="auto" bg="transparent" shadow="0px 6px 12px #0000001F">
                <Image
                    src={image}
                    alt={title}
                    width={328}
                    height={203}
                />

                <Box centerContent borderRadius="0px 0px 14px 14px">
                    <Center>
                        <Text px="14px" mt="12px" fontSize="16px" lineHeight="19px" color="#000000b3">{title}</Text>
                        <Text fontSize="22px" lineHeight="20px" color="#000000b3">R$: {price}</Text>
                        <Link href='/[id]' as={`/${id}`}>
                            <Button mt="17px" mb="27px">
                                ver produto
                    </Button>
                        </Link>
                    </Center>
                </Box>
            </Box >
        </>
    )

}
