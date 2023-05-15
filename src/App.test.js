import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import gitHubUsers from "../src/store/reducers/github-users-search";
import { githubApi } from "../src/services/githubSrvcApi";

afterEach(cleanup);

const mockStore = configureStore({
    reducer: {
        gitHubUsersRedux: gitHubUsers,
        [githubApi.reducerPath]: githubApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(githubApi.middleware),
});

test("Renders app successfully", () => {
    render(
        <Provider store={mockStore}>
            <App />
        </Provider>
    );
    const linkElement = screen.getByText(/Результатов не найдено/i);
    expect(linkElement).toBeInTheDocument();
});
