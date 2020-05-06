import * as orderActions from '../actions/order';
import Order from '../../models/order';

const initialState = {
    orders: [],
    selectedOrder: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case orderActions.ADD_ORDER:
            const newOrder = new Order(new Date(), action.orderData.items, action.orderData.amount, new Date());
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
        case orderActions.SELECT_ORDER:
            return {
                ...state,
                selectedOrder: action.order
            };
        case orderActions.REMOVE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(order => order.id !== action.order.id)
            };
        default:
            return state;
    }
}