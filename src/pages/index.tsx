import React, { useState } from 'react'
import { Heading, Card, Box, Flex, SimpleGrid, Header, Footer, Center, Dropdown, NavBar } from '../../components/react'
import { Arrow } from '../../components/@icons/arrow'
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
    products?: Products;
}

export default function Home({ products }: ProductsProps) {


    const [productList, setProductList] = useState<any>(products);

    const sortByPrice = () => {
        const productListArray = [productList]
        console.log(productList)
        const sorted = [...productListArray].sort(function (a, b) {
            return a.price - b.price;
        });
        setProductList(sorted);
    };



    const [currentOrder, setCurrentOrder] = useState("ordenar por");

    function handleOrder() {

        switch (currentOrder) {
            case "menor preço":
                return function (a, b) {
                    return a.price - b.price;
                }
                case "a - z":
                return function (a, b) {
                    return a.length - b.length;
                }
                case "mais recentes":
                return function (a, b) {
                    return a.length - b.length;
                }
                default:
                break;
        }

    }

    return (
        <>

            <Header />

            <NavBar />

            <Box centerContent mt="19px" mb="43px">
                <Center>

                    <Box desktopH="auto" desktopW="100%" w="1024px" h="56px" mt="19px" mb="16px">
                        <Flex desktopH="auto" tabletDirection="column" justify="space-between">
                            <Heading tabletFontSize="18px" weight="bold" fontSize="24px" lineHeight="30px" >Sugestões para você</Heading>

                            <Dropdown>
                                <div className="dropdown">
                                    <button className="dropbtn">{currentOrder} <div className="Arrow"><Arrow /></div></button>
                                    <div className="dropdown-content">
                                        <a onClick={() => setCurrentOrder("menor preço")}>menor preço</a>
                                        <a onClick={() => setCurrentOrder("a - z")}>a - z</a>
                                        <a onClick={() => setCurrentOrder("mais recentes")}>mais recentes</a>
                                    </div>
                                </div>
                            </Dropdown>

                        </Flex>
                    </Box>

                    <SimpleGrid spacingX="20px" spacingY="28px">
                        {products.sort(handleOrder()).map((product, index) => (
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
