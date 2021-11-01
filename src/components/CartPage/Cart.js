import React from 'react';
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

export default function Cart() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="your cart items" center/>
            </div>
            <CartColumns/>
            <CartList/>
            <CartTotals/>
        </section>
    )
}
