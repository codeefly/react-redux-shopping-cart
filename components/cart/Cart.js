import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const CartComponent = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        });

        setTotalPrice(price);
        setTotalItems(items);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    return (
        <div>
            <div className="container">
                <div className="row">
                    {cart.map((item) => (
                        <div className="col-xl-3">
                            <CartItem key={item.id} itemData={item} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col-xl-12 mt-5">
                        <h5>Total Item: {totalItems} </h5>
                        <h5>Total Price: {totalPrice}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};
export default connect(mapStateToProps)(CartComponent);
