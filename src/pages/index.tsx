import React, { useState } from 'react'
import { Heading, Card, Box, Flex, SimpleGrid, Header, Footer, Center, Text, NavBar, Select } from '../../components/react'

export interface Products {
    map: any;
    id: number;
    categoryId: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export interface ProductsProps {
    products?: Products;
}

export default function Home({ products }: ProductsProps) {


    const [productList, setProductList] = useState<any>(products);

    const sortByPrice = () => {
        const productListArray = [productList]
        const sorted = [...productListArray].sort(function (a, b) {
            return a.price - b.price;
        });
        alert("sort")
        setProductList(sorted);

    };

    return (
        <>

            <Header />

            <NavBar />

            <Box centerContent mt="19px" mb="43px">
                <Center>

                    <Box w="1024px" h="56px" mt="19px" mb="16px">
                        <Flex justify="space-between">
                            <Heading weight="bold" fontSize="24px" lineHeight="30px" >Sugestões para você</Heading>
                            <Select>
                                <option value="" hidden>ordenar por</option>
                                <option value="1">menor preço</option>
                                <option value="2">a - z</option>
                                <option value="3">mais recentes</option>
                            </Select>
                        </Flex>
                    </Box>

                    <button onClick={sortByPrice}>sort by price</button>

                    <SimpleGrid spacingX="20px" spacingY="28px">
                        {products.map((product, index) => (
                            <Card key={index} id={product.id} title={product.title} price={product.price} image={!product.image ? 'https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png' : product.image} />
                        ))}
                    </SimpleGrid>
                </Center>
            </Box>

            <Footer />

        </>
    )
}

export async function getStaticProps(context) {

    const response = await fetch(
        'https://60520c72fb49dc00175b768c.mockapi.io/store/v1/products'
    )
    const data = await response.json()

    return {
        props: { products: data } // will be passed to the page component as props
    }
}
