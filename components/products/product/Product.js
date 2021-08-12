import React from "react";

const Product = ({ productData }) => {
    console.log(productData);
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
                        <button className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
