import React from 'react';
import Products from '../components/ProductsPage/Products';
import Hero from "../components/Hero";
import productBcg from "../images/productsBcg.jpeg";

export default function ProductsPage() {
    return (
        <>
        <Hero img={productBcg}/>
        <Products/>
        </>
    )
}
