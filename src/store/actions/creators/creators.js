import * as Types from "../types/types";

export const FetchGitHubUserLogin = (userLogin) => ({
    type: Types.USERS_SEARCH_FILTER,
    payload: userLogin,
});

export const setUsersSearchCurrentPage = (pageNumber) => ({
    type: Types.USERS_SEARCH_CURRENT_PAGE,
    payload: pageNumber,
});
