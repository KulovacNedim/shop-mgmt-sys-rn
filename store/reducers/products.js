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
            const productIndex = state.products.findIndex(p => p.id === action.product.id);
            const updatedProducts = [...state.products];
            updatedProducts[productIndex] = action.product;
            console.log(action.product)
            return {
                ...state,
                products: updatedProducts
            };
        case prodActions.CREATE_PRODUCT:
            const newProduct = action.product;
            newProduct.id = new Date();
            return {
                ...state,
                products: state.products.concat(newProduct)
            };
        case prodActions.DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(p => p.id !== action.prodId)
            };
        default:
            return state;
    };
};