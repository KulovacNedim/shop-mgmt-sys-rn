export const ADD_TO_CART = 'ADD_TO_CART';
export const SELECT_ITEM = 'SELECT_ITEM';

export const addToCart = (product, quantity) => {
    return {
        type: ADD_TO_CART,
        product: product,
        quantity: quantity
    };
};

export const selectItem = item => {
    return {
        type: SELECT_ITEM,
        item: item
    };
};