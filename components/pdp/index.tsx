import React, { useState, useEffect } from 'react'
import { Box, Center, Text, Heading, Button } from '../../components/react'
import Image from 'next/image'




export function Pdp({ title, price, description, image }) {

    return (
        <>
            <Center mt="20px" mb="300px">
                <Box desktopDirection="column" desktopW="100%" centerContent w="1024px">

                    <Box mr="27px">
                        <Image
                            className="img-radius-pdp"
                            src={image}
                            alt={title}
                            width={500}
                            height={310}
                        />
                    </Box>


                    <Box w="497px" h="310px">
                        <Heading weight="700" fontSize="22px">{title}</Heading>
                        <Heading mt="6px" mb="20px" color="rgba(76, 175, 80, 1)">R${price}</Heading>
                        <Text lineHeight="20px" mb="43px">{description}</Text>
                        <Box desktopJustify="center">
                        <Button>comprar</Button>
                        </Box>
                    </Box>
                </Box>
            </Center>

        </>
    )
}
