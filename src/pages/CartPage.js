import React from 'react';
import Hero from "../components/Hero";
import cartBcg from "../images/storeBcg.jpeg";
import CarySection from "../components/CartPage";

export default function CartPage() {
    return (
        <>
          <Hero img={cartBcg}/>
          <CarySection/> 
        </>
    )
}
