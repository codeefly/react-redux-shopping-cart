import React from "react";
import { connect } from "react-redux";
import Product from "./product/Product";

const Products = ({ products }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {products.map((prod) => (
                        <>
                            <Product key={prod.id} productData={prod} />
                        </>
                    ))}
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    };
};

export default connect(mapStateToProps)(Products);
