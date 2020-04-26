export const GET_PRODUCTS_FOR_CATEGORY = 'GET_PRODUCTS_FOR_CATEGORY';

export const getProductsForCategory = categoryId => {
    return {
        type: GET_PRODUCTS_FOR_CATEGORY,
        categoryId: categoryId
    };
};