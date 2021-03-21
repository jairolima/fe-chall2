import {useRouter} from 'next/router'
import React from 'react'
import { Header, Footer, NavBar, Pdp } from '../../components/react'


export default function Product() {
    const router = useRouter();
    return (
        <>
        <Header />
        <NavBar />
        <div>{router.query.product}</div>
        <Pdp />
        <Footer />
        </>
    )
}
