export const ADD_ORDER = 'ADD_ORDER';
export const SELECT_ORDER = 'SELECT_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';

export const addOrder = (cartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        orderData: {
            items: cartItems,
            amount: totalAmount
        }
    };
}

export const selectOrder = order => {
    return {
        type: SELECT_ORDER,
        order: order
    };
};

export const removeOrder = order => {
    return {
        type: REMOVE_ORDER,
        order: order
    };
};