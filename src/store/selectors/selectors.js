const gitHubUsersSelector = (store) => store.gitHubUsersRedux;

export const gitHubUsersFilter = (store) => {
    return gitHubUsersSelector(store)?.userLogin || "";
};

export const usersSearchCurrentPage = (store) => {
    return gitHubUsersSelector(store)?.pageNumber || 0;
};
