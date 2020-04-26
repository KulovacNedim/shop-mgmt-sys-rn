import * as actions from '../actions/navigation';

const initialState = {
    selectedView: '',
    showBackToMainMenu: false,
    showBackToAllCategories: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_VIEW:
            return {
                ...state,
                selectedView: action.view
            };
        case actions.SET_BACK_TO_MAIN_MENU:
            return {
                ...state,
                showBackToMainMenu: action.flag
            };
        case actions.SET_BACK_TO_ALL_CATEGORIES:
            return {
                ...state,
                showBackToAllCategories: action.flag
            };
        default:
            return state;
    }
};