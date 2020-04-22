export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const SELECT_CATEGORY1 = 'SELECT_CATEGORY1';

export const selectCategory = (id) => {
    return {
        type: SELECT_CATEGORY,
        categoryId: id
    };
};

export const selectCategory1 = (id) => {
    return {
        type: SELECT_CATEGORY1,
        arr: id
    };
};

export const sc1 = (arr) => {
    return {
        type: SC1,
        arr: arr
    };
};