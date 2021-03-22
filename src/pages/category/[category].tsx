import { GetStaticProps, GetStaticPaths } from 'next';
import { Heading, Card, Box, Flex, SimpleGrid, Header, Footer, Center, NavBar, Select } from '../../../components/react'
import { useRouter } from 'next/router';

export default function Member({ category }) {
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
