import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GITHUB_API_BASE_URL } from "../constants";

export const githubApi = createApi({
    reducerPath: "gitbubApi",
    baseQuery: fetchBaseQuery({
        baseUrl: GITHUB_API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getUsersByLogin: builder.query({
            query: ({ userLogin, pageSize = 30, page = 1, sort }) => ({
                url: `search/users?q=${userLogin}&per_page=${pageSize}&page=${page}${
                    sort ? "&sort=" + sort : ""
                }`,
                method: "GET",
                headers: { Accept: "application/vnd.github+json" },
            }),
            providesTags: [{ type: "UsersSearch" }],
        }),
        getUserInfo: builder.query({
            query: ({ userLogin }) => ({
                url: `users/${userLogin}`,
                method: "GET",
                headers: { Accept: "application/vnd.github+json" },
            }),
            providesTags: [{ type: "GetUserInfo" }],
        }),
    }),
});

export const { useGetUsersByLoginQuery, useGetUserInfoQuery } = githubApi;
