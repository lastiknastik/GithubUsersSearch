import * as Types from "../actions/types/types";

export const initialState = {
    userLogin: null,
};

export default function gitHubUsers(state = initialState, action) {
    switch (action.type) {
        case Types.USERS_SEARCH_FILTER:
            return {
                ...state,
                userLogin: action.payload,
            };
        case Types.USERS_SEARCH_CURRENT_PAGE:
            return {
                ...state,
                pageNumber: action.payload,
            };
        default:
            return state;
    }
}
