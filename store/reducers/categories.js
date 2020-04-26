import * as actions from '../actions/categories';
import * as utils from './utils';

const initialState = {
    categories: utils.getCategories(null)
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SELECT_CATEGORY:
            return {
                ...state,
                categories: utils.getCategories(action.categoryId)
            };
        default:
            return state;
    }

};