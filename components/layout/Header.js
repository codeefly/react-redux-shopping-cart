import Link from "next/link";
import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

const Header = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });

        setCartCount(count);
    }, [cart, cartCount]);

    return (
        <div className="p-3 d-flex justify-content-between">
            <div className="logo">
                <img src="/images/logo.png" alt="" width="100" />
            </div>
            <div>
                <div className="cart-count">{cartCount}</div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Header);
