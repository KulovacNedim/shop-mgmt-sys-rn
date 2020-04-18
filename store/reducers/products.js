import { CATEGORIES, PRODUCTS } from '../../data/dummy-data';

const initialState = {
    rootCategories: CATEGORIES.filter(cat => cat.superCategory === null),
    products: []
};

export default (state = initialState, action) => {
    return state;
};