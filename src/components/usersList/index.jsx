import { useGetUsersByLoginQuery, useGetUserInfoQuery } from "../../services/githubSrvcApi";
import { useState } from "react";
import Pagination from "../pagination";
import * as S from "./styles";
import { useSelector } from "react-redux";
import { gitHubUsersFilter, usersSearchCurrentPage } from "../../store/selectors/selectors";
import Popover from "../popover/index";
import UserDetails from "../../pages/user-details";
import { setUsersSearchCurrentPage } from "../../store/actions/creators/creators";
import { useDispatch } from "react-redux";

export default function UsersList() {
    const PAGE_SIZE = 30;

    const dispatch = useDispatch();

    const [{ isUserInfoVisible, selectedUserLogin }, setUserInfoVisibility] = useState({
        isUserInfoVisible: false,
        selectedUserLogin: null,
    });

    const userLogin = useSelector(gitHubUsersFilter);
    const currentPage = useSelector(usersSearchCurrentPage);

    const onPageChangeHadler = (pageNumber) => {
        dispatch(setUsersSearchCurrentPage(pageNumber));
    };

    const { status, data, isError, error } = useGetUsersByLoginQuery(
        {
            userLogin,
            page: currentPage,
            pageSize: PAGE_SIZE,
            sort: "repositories",
        },
        { skip: false }
    );

    const expandIconOnClickHandler = (eventUserLogin) => {
        return () => {
            setUserInfoVisibility({ isUserInfoVisible: true, selectedUserLogin: eventUserLogin });
        };
    };

    const closeUserDetailsHandler = () => {
        setUserInfoVisibility({ isUserInfoVisible: false, selectedUserLogin: null });
    };

    function FoundUser(props) {
        const { status, data } = useGetUserInfoQuery({
            userLogin: props.userInfo.login,
        });

        return (
            <S.FoundUserWrapper>
                <S.Avatar src={props.userInfo.avatar_url} alt="" />
                <S.FoundUserInfo>
                    <S.FoundUserInfoTitleWrapper>
                        <S.FoundUserLink href={props.userInfo.html_url} target="_blank" rel="noreferrer">
                            {props.userInfo.login}
                        </S.FoundUserLink>
                        <S.ActionIcon
                            src="../expand-full.png"
                            alt="Display full info"
                            onClick={expandIconOnClickHandler(props.userInfo.login)}
                        />
                    </S.FoundUserInfoTitleWrapper>
                    <S.UserInfoText>
                        Repositories <S.Badge>{data?.public_repos || 0}</S.Badge>
                    </S.UserInfoText>
                </S.FoundUserInfo>
            </S.FoundUserWrapper>
        );
    }

    return !data || data?.total_count === 0 ? (
        <S.UsersNotFound>
            <div>{"Результатов не найдено"}</div>
            <div>{"Попробуйте изменить параметры запроса"}</div>
        </S.UsersNotFound>
    ) : (
        <S.Wrapper>
            <S.FoundUsersWrapper>
                {data?.items.map((u) => {
                    return <FoundUser userInfo={u} key={u.id} />;
                })}
            </S.FoundUsersWrapper>
            <Pagination
                paginationInfo={{
                    totalResults: data?.total_count,
                    currentPage: currentPage,
                    pageSize: PAGE_SIZE,
                    onPageChange: onPageChangeHadler,
                }}
            />
            {isUserInfoVisible ? (
                <Popover onClose={closeUserDetailsHandler}>
                    <UserDetails userLogin={selectedUserLogin} />
                </Popover>
            ) : (
                ""
            )}
        </S.Wrapper>
    );
}
