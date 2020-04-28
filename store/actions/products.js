export const GET_PRODUCTS_FOR_CATEGORY = 'GET_PRODUCTS_FOR_CATEGORY';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const getProductsForCategory = categoryId => {
    return {
        type: GET_PRODUCTS_FOR_CATEGORY,
        categoryId: categoryId
    };
};

export const updateProduct = (product, field, value) => {
    return {
        type: UPDATE_PRODUCT,
        product: product,
        field: field,
        value: value
    }
};