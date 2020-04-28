import * as cartActions from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0,
    selectedItem: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            const product = action.product;
            const newCartItem = new CartItem(product, action.quantity);
            return {
                ...state,
                items: { ...state.items, [product.id]: newCartItem },
                totalAmount: state.totalAmount + (product.price * action.quantity),
                selectedItem: product
            };
        default:
            return state;
    }
};