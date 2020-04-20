import { CATEGORIES } from '../../data/dummy-data';
import * as actions from '../actions/categories';

const initialState = {
    superCategoryId: null, 
    cs: [],
    subcategories: CATEGORIES.filter(cat => cat.superCategory === null)
};

export default (state = initialState, action) => { 
    switch (action.type) {
        case actions.SELECT_CATEGORY:
            return {
                ...state,
                superCategoryId: action.categoryId,
                subcategories: CATEGORIES.filter(cat => cat.superCategory === action.categoryId),
                cs: [...state.cs ,action.categoryId]
            };
            case actions.SELECT_CATEGORY1:
               const arr = [...action.arr];
                console.log(action.arr)
                arr.pop();

                const id5 = arr[arr.length - 1]
                return {
                    ...state,
                    cs: arr,
                    subcategories: arr.length === 0 ? CATEGORIES.filter(cat => cat.superCategory === null) : CATEGORIES.filter(cat => cat.superCategory === id5),
                };
        default:
            return state;
    }

};