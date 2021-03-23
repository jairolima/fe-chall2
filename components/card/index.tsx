import React from 'react'
import { Button, Box, Text, Center } from '../react/index'
import Link from 'next/link';
import Image from 'next/image'
import styled from 'styled-components'


const A = styled.a`
&:hover {
    button {
        background: #099F0F;
    }
}
`




export function Card({ id, title, price, image }) {


    return (
        <>
            <Box w="328px" h="348px" bgColor="transparent" borderRadius="14px 14px 14px 14px" shadow="0px 6px 12px rgba(0, 0, 0, 0.12)">

                {/* <Box h="203px" w="100%" bgColor="red">

                </Box> */}



                        <Image
                            className="img-radius"
                            src={image}
                            alt={title}
                            width={328}
                            height={203}
                        />


                <Box h="145px" centerContent borderRadius="0px 0px 14px 14px">
                    <Box h="145px">

                        <Center w="328px" h="82px">

                            <Text pr="14px" pl="14px" weight="500" fontSize="16px" lineHeight="19px" color="#000000b3">{title}</Text>
                            <Text fontSize="22px" mt="5px" weight="700" lineHeight="25px">R${price}</Text>
                        </Center>

                        <Center mb="27px">
                            <Link href='product/[id]' as={`product/${id}`}>
                                <A>
                                    <Button>
                                        ver produto
                            </Button>
                                </A>
                            </Link>
                        </Center>
                    </Box>
                </Box>
            </Box>
        </>
    )

}
