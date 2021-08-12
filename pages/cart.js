import React from "react";
import Header from "../components/layout/Header";
import CartComponent from './../components/cart/Cart';

const Cart = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
    };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <Header />
                        <CartComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
