import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "../services/githubSrvcApi";
import gitHubUsers from "./reducers/github-users-search";

export const store = configureStore({
    reducer: {
        gitHubUsersRedux: gitHubUsers,
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});
