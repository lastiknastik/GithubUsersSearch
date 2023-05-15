import SearchBar from "./index";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, cleanup, screen } from "@testing-library/react";
import gitHubUsers from "../../store/reducers/github-users-search";

afterEach(cleanup);

const mockStore = configureStore({
    reducer: {
        gitHubUsersRedux: gitHubUsers,
    },
});

describe("<SearchBar />", () => {
    describe("Snapshots test", () => {
        it("should render successfully has input placeholder", () => {
            const { container } = render(
                <Provider store={mockStore}>
                    <SearchBar />
                </Provider>
            );

            expect(screen.getByPlaceholderText("Поиск по логину")).toHaveAttribute("type", "text");
        });
    });
});
