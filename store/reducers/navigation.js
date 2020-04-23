import * as actions from '../actions/navigation';

const initialState = {
    selectedView: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_VIEW:
            return {
                ...state,
                selectedView: action.view
            };
        default:
            return state;
    }
};