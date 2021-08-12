import * as actionTypes from "./shopping-types";

const initial = {
    products: [], // {id, title, desc, price, img}
    cart: [],
    currentItem: null,
};

const shopReducer = (state = initial, action) => {
    switch (action.tpe) {
        case actionTypes.ADD_TO_CART:
            return {};

        case actionTypes.REMOVE_FROM_CART:
            return {};

        case actionTypes.ADJUST_ITEM_QTY:
            return {};
        case actionTypes.LOAD_CURRENT_ITEM:
            return {};

        default:
            return state;
    }
};

export default shopReducer;
