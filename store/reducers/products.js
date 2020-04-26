import { PRODUCTS } from '../../data/dummy-data';
import * as prodActions from '../actions/products';

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case prodActions.GET_PRODUCTS_FOR_CATEGORY:
            console.log(state.products)
            return {
                ...state,
                products: [...PRODUCTS.filter(prod => prod.categoryId === action.categoryId)],
            };
        default:
            return state;
    };
};