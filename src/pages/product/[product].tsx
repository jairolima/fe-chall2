import { GetStaticProps, GetStaticPaths } from 'next';
import { Header, Footer, NavBar, Pdp } from '../../../components/react'
import { useRouter } from 'next/router';

export default function Product({ product }) {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <p>Carregando...</p>;
    }

    return (
        <>
            <Header />
            <NavBar />
            <Pdp
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
            />
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://60520c72fb49dc00175b768c.mockapi.io/store/v1/products`);
    const data = await response.json();

    const paths = data.map(product => {
        return { params: { product: product.id } }
    });

    return {
        paths,
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const { product } = context.params;

    const response = await fetch(`https://60520c72fb49dc00175b768c.mockapi.io/store/v1/products/${product}`);
    const data = await response.json();

    return {
        props: {
            product: data,
        },
        revalidate: 10,
    }
}
