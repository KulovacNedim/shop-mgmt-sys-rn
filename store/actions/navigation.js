export const SET_VIEW = 'SET_VIEW';
export const SET_BACK_TO_MAIN_MENU = 'SET_BACK_TO_MAIN_MENU';
export const SET_BACK_TO_ALL_CATEGORIES = 'SET_BACK_TO_ALL_CATEGORIES';

export const setView = view => {
    return {
        type: SET_VIEW,
        view: view
    };
};

export const setBackToMainMenu = flag => {
    return {
        type: SET_BACK_TO_MAIN_MENU,
        flag: flag
    };
};

export const setBackToAllCategories = flag => {
    return {
        type: SET_BACK_TO_ALL_CATEGORIES,
        flag: flag
    };
};