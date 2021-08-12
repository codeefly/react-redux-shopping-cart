import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "../../redux/shopping/shopping-actions";

const CartItem = ({ itemData, removeFromCart, adjustQty }) => {
    const [input, setInput] = useState(itemData.qty);

    const onChangeHandaler = (e) => {
        setInput(e.target.value);
        adjustQty(itemData.id, e.target.value)
    };

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{itemData.title}</h4>
                    <img src={itemData.image} alt="" className="img-fluid" />
                    <p>{itemData.description}</p>
                    <h5>${itemData.price}</h5>

                    <label htmlFor="qty">Qty</label>
                    <input
                        type="number"
                        min="1"
                        id="qty"
                        name="qty"
                        value={itemData.qty}
                        onChange={onChangeHandaler}
                    />

                    <button
                        className="btn btn-danger"
                        onClick={() => removeFromCart(itemData.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value)=> dispatch(adjustQty(id, value))
    };
};
export default connect(null, mapDispatchToProps)(CartItem);
