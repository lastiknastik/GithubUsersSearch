import Pagination from "./index";
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

describe("<Pagination props />", () => {
    describe("Snapshots test", () => {
        it("should render successfuly and displays correct number of pages", () => {
            const totalResults = 271;
            const pageSize = 30;
            const { container } = render(
                <Provider store={mockStore}>
                    <Pagination
                        paginationInfo={{
                            totalResults: totalResults,
                            currentPage: 1,
                            pageSize: pageSize,
                            onPageChange: () => {
                                console.log("page changed");
                            },
                        }}
                    />
                </Provider>
            );

            expect(screen.getByText("из 10"));
        });
    });
});
