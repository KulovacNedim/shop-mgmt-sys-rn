export const ADD_TO_CART = 'ADD_TO_CART';
export const SELECT_ITEM = 'SELECT_ITEM';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product, quantity, flag) => {
    return {
        type: ADD_TO_CART,
        product: product,
        quantity: quantity,
        flag: flag
    };
};

export const selectItem = item => {
    return {
        type: SELECT_ITEM,
        item: item
    };
};

export const removeFromCart = productId => {
    return {
        type: REMOVE_FROM_CART,
        productId: productId
    };
};