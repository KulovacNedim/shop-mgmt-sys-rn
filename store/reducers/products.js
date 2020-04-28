import { PRODUCTS } from '../../data/dummy-data';
import * as prodActions from '../actions/products';

const initialState = {
    products: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case prodActions.GET_PRODUCTS_FOR_CATEGORY:
            return {
                ...state,
                products: [...PRODUCTS.filter(prod => prod.categoryId === action.categoryId)],
            };
        case prodActions.UPDATE_PRODUCT:
            // it suppose to be saved in db, since after category change products with default state is loaded again
            const product = action.product;
            const updatedProduct = {
                ...product,
                [action.field]: action.value
            };
            const index = state.products.findIndex(prod => prod.id === product.id);
            const updatedProducts = [...state.products];
            updatedProducts[index] = updatedProduct;
            return {
                ...state,
                products: updatedProducts
            };
        default:
            return state;
    };
};