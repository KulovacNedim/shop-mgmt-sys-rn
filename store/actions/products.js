export const GET_PRODUCTS_FOR_CATEGORY = 'GET_PRODUCTS_FOR_CATEGORY';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

export const getProductsForCategory = categoryId => {
    return {
        type: GET_PRODUCTS_FOR_CATEGORY,
        categoryId: categoryId
    };
};

export const updateProduct = product => {
    return {
        type: UPDATE_PRODUCT,
        product: product
    }
};

export const deleteProduct = prodId => {
    return {
        type: DELETE_PRODUCT,
        prodId: prodId
    };
};

export const createProduct = product => {
    return {
        type: CREATE_PRODUCT,
        product: product
    };
};