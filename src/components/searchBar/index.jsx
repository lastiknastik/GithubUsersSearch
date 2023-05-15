import * as S from "./styles";
import { useDispatch } from "react-redux";
import { FetchGitHubUserLogin, setUsersSearchCurrentPage } from "../../store/actions/creators/creators";

export default function SearchBar() {
    const dispatch = useDispatch();

    const dispatchUserLogin = (userLogin) => {
        dispatch(FetchGitHubUserLogin(userLogin));
        dispatch(setUsersSearchCurrentPage(1));
    };

    const searchInputOnBlurHandler = (e) => {
        dispatchUserLogin(e.target.value);
    };

    const searchInputOnKeyDownHandler = (e) => {
        if (e.keyCode === 13) {
            dispatchUserLogin(e.target.value);
        }
    };

    return (
        <S.Wrapper>
            <S.SearchInput
                type="text"
                onBlur={searchInputOnBlurHandler}
                onKeyDown={searchInputOnKeyDownHandler}
                placeholder="Поиск по логину"
            />
            <S.SearchButton>Поиск</S.SearchButton>
        </S.Wrapper>
    );
}
