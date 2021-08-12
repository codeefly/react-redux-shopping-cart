import React from "react";

import { connect } from "react-redux";
import { addToCart } from "../../../redux/shopping/shopping-actions";

const Product = ({ productData, addToCart }) => {
    // console.log(productData);
    return (
        <div className="col-xl-4">
            <div className="card">
                <div className="card-body">
                    <img
                        src={productData.image}
                        alt=""
                        className="img-fluid card-image"
                    />
                    <h4 className="pt-3">{productData.title}</h4>
                    <p className="card-text">{productData.description}</p>
                    <h5 className="text-primary">$ {productData.price}</h5>

                    <div className="mt-5 d-flex justify-content-between">
                        <div>View more</div>
                        <button
                            className="btn btn-primary"
                            onClick={() => addToCart(productData.id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(null, mapDispatchToProps)(Product);
