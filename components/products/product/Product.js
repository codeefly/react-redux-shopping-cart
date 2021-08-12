import React from "react";

import { connect } from "react-redux";
import {
    addToCart,
    loadCurrentItem,
} from "../../../redux/shopping/shopping-actions";
import  Link  from "next/link";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
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
                        <Link href={`/product/${productData.id}`}>
                            <a onClick={()=> loadCurrentItem()}>View more</a>
                        </Link>
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
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Product);
