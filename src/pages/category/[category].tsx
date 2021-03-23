import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { Heading, Card, Box, Flex, SimpleGrid, Header, Footer, Center, NavBar, Dropdown } from '../../../components/react'
import { useRouter } from 'next/router';
import Arrow from '../'

export interface Products {
    map: any;
    sort: any;
    id: number;
    categoryId: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export interface ProductsProps {
    category?: Products;
}

export default function Category({ category }: ProductsProps) {

    const router = useRouter()

    console.log(router)

    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }


    // TODO create a component to order dropdown
    // const [currentOrder, setCurrentOrder] = useState("ordenar por");

    // function handleOrder() {

    //     switch (currentOrder) {
    //         case "menor preço":
    //             return function (a, b) {
    //                 return a.price - b.price;
    //             }
    //             case "a - z":
    //             return function (a, b) {
    //                 return a.length - b.length;
    //             }
    //             case "mais recentes":
    //             return function (a, b) {
    //                 return a.length - b.length;
    //             }
    //             default:
    //             break;
    //     }

    // }


    return (
        <>
            <Header />
            <NavBar />

            <Box centerContent mt="19px" mb="43px">
                <Center>

                    <Box w="1024px" h="56px" mt="19px" mb="16px">
                        <Flex justify="space-between">
                            <Heading weight="bold" fontSize="24px" lineHeight="30px">{router.query.name}</Heading>
                            <Dropdown>
                            <div className="dropdown">
                                    <button className="dropbtn">ordenar por <div className="Arrow"><Arrow /></div></button>
                                    <div className="dropdown-content">
                                        <a href="#">menor preço</a>
                                        <a href="#">a - z</a>
                                        <a href="#">mais recentes</a>
                                    </div>
                                </div>
                            </Dropdown>
                        </Flex>
                    </Box>

                    <SimpleGrid spacingX="20px" spacingY="28px">
                        {category.map((category, index) => (
                            <Card key={index} id={category.id} title={category.title} price={category.price} image={!category.image ? 'https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/open_box4-512.png' : category.image} />
                        ))}
                    </SimpleGrid>
                </Center>
            </Box>



            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://60520c72fb49dc00175b768c.mockapi.io/store/v1/category`);
    const data = await response.json();

    const paths = data.map(category => {
        return { params: { category: category.id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { category } = context.params;

    const response = await fetch(`https://60520c72fb49dc00175b768c.mockapi.io/store/v1/category/${category}/products`);
    const data = await response.json();

    return {
        props: {
            category: data,
        },
        revalidate: 10,
    }
}
