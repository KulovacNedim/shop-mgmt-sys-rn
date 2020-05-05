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
            const updatedTotalAmount = action.flag === '+' ? state.totalAmount + product.price : state.totalAmount - product.price;
            return {
                ...state,
                items: { ...state.items, [product.id]: newCartItem },
                totalAmount: updatedTotalAmount,
                selectedItem: newCartItem
            };
        case cartActions.SELECT_ITEM:
            return {
                ...state,
                selectedItem: action.item
            };
            case cartActions.REMOVE_FROM_CART:
                const productId = action.productId;
                const updatedItems = {...state.items};
                delete updatedItems[productId];

                const updatedAmount = state.totalAmount - (state.items[productId].product.price * state.items[productId].cartQuantity);
                return{
                    ...state,
                    items: updatedItems,
                    totalAmount: updatedAmount
                };
        default:
            return state;
    }
};