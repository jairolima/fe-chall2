import React, { useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { Heading, Card, Box, Flex, SimpleGrid, Header, Footer, Center, NavBar, Dropdown } from '../../../components/react'
import { useRouter } from 'next/router';
import Arrow from '../'

export interface Category {
    map: any;
    sort: any;
    id: number;
    categoryId: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

export interface CategoryProps {
    category?: Category;
}

export default function Category({ category }: CategoryProps) {

    const router = useRouter()

    console.log(router)


    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }


    return (
        <>
            <Header />
            <NavBar />

            <Box centerContent mt="19px" mb="43px">
                <Center>

                    <Box desktopH="auto" desktopW="100%" w="1024px" h="56px" mt="19px" mb="16px">
                        <Flex desktopH="auto" tabletDirection="column" justify="space-between">
                            <Heading tabletFontSize="18px" weight="bold" fontSize="24px" lineHeight="30px">{router.query.name}</Heading>
                            {/* <Dropdown>
                                <div className="dropdown">
                                    <button className="dropbtn">ordenar por <div className="Arrow"><Arrow /></div></button>
                                    <div className="dropdown-content">
                                        <a href="#TODO">menor preço</a>
                                        <a href="#TODO">a - z</a>
                                        <a href="#TODO">mais recentes</a>
                                    </div>
                                </div>
                            </Dropdown> */}
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


// Generate static categories ->
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

    // Build only top 1 category of my website
    // return {
    //     paths: [
    //         { params: { category: '3' } }
    //     ],
    //     fallback: true,
    // }
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
