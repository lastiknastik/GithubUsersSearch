import SearchBar from "../../components/searchBar";
import UsersList from "../../components/usersList";
import React from "react";
import * as S from "./styles";

export default function Main() {
    return (
        <React.Fragment>
            <S.Wrapper>
                <SearchBar />
                <UsersList />
            </S.Wrapper>
        </React.Fragment>
    );
}
