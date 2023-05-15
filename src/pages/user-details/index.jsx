import * as S from "./styles";
import { useGetUserInfoQuery } from "../../services/githubSrvcApi";
import React from "react";

export default function UserDetails({ userLogin }) {
    const result = useGetUserInfoQuery({ userLogin });

    const {
        data: userInfo,
        isError: isUserInfoError,
        isLoading: isUserInfoLoading,
        isSuccess: isUserInfoSuccess,
    } = result;

    let joinedDateString,
        blogUrlLabel = "--";
    if (!isUserInfoLoading && isUserInfoSuccess && !isUserInfoError) {
        const joinedDate = new Date(userInfo?.created_at);
        joinedDateString = `${joinedDate.getFullYear()}-${(joinedDate.getMonth() + 1)
            .toString()
            .padStart(2, "0")}-${joinedDate.getDate().toString().padStart(2, "0")}`;

        if (userInfo.blog) {
            const blogUrl = new URL(userInfo.blog);
            blogUrlLabel = blogUrl.host;
        }
    }

    return (
        <S.Wrapper>
            {isUserInfoError ? (
                <div>
                    <S.TextStrong>Оой, что-то пошло совсем не так!</S.TextStrong>
                    <p>{result.error?.data?.message}</p>
                </div>
            ) : (
                <React.Fragment>
                    <S.Avatar
                        src={userInfo?.avatar_url ?? "https://avatars.githubusercontent.com/u/4031883?v=4"}
                        alt="GitHub user profile icon"
                    />
                    <S.ColomnLayout textAlign="left" gap={"1.6em"}>
                        <S.TitleWrapper>
                            <S.Title href={userInfo?.html_url} target="_blank">
                                {userInfo?.login}
                            </S.Title>
                            <S.TextSecondary>Joined {joinedDateString}</S.TextSecondary>
                        </S.TitleWrapper>
                        {userInfo?.name ? (
                            <S.TextRegular marginTop={"-1.4em"}>{userInfo?.name}</S.TextRegular>
                        ) : (
                            <S.TextSecondary>{"This profile has no name.."}</S.TextSecondary>
                        )}
                        {userInfo?.bio ? (
                            <S.ParagraphRegular>{userInfo?.bio}</S.ParagraphRegular>
                        ) : (
                            <S.TextSecondary>{"This profile has no bio.."}</S.TextSecondary>
                        )}
                        <S.FollowersInfoWrapper>
                            <S.FollowersInfoItem>
                                <S.TextSecondary>Repos</S.TextSecondary>
                                <S.FollowersInfoItemValue>
                                    {userInfo?.public_repos ? userInfo?.public_repos : "--"}
                                </S.FollowersInfoItemValue>
                            </S.FollowersInfoItem>
                            <S.FollowersInfoItem>
                                <S.TextSecondary>Followers</S.TextSecondary>
                                <S.FollowersInfoItemValue>
                                    {userInfo?.followers ? userInfo?.followers : "--"}
                                </S.FollowersInfoItemValue>
                            </S.FollowersInfoItem>
                            <S.FollowersInfoItem>
                                <S.TextSecondary>Following</S.TextSecondary>
                                <S.FollowersInfoItemValue>
                                    {userInfo?.following ? userInfo?.following : "--"}
                                </S.FollowersInfoItemValue>
                            </S.FollowersInfoItem>
                        </S.FollowersInfoWrapper>
                        <S.Footer>
                            <S.FieldWithIcon>
                                <S.FieldIcon src="../maps-and-flags.png" />
                                {userInfo?.location ? (
                                    userInfo?.location
                                ) : (
                                    <S.TextSecondary>No location..</S.TextSecondary>
                                )}
                            </S.FieldWithIcon>
                            <S.FieldWithIcon>
                                <S.FieldIcon src="../link.png" />
                                {userInfo?.blog ? (
                                    <S.LinkRegular href={userInfo?.blog} target="_blank">
                                        {blogUrlLabel}
                                    </S.LinkRegular>
                                ) : (
                                    <S.TextSecondary>No blog..</S.TextSecondary>
                                )}
                            </S.FieldWithIcon>
                        </S.Footer>
                    </S.ColomnLayout>
                </React.Fragment>
            )}
        </S.Wrapper>
    );
}
