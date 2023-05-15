import styled, { css } from "styled-components";

export const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FoundUserWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    border-bottom: 1px solid #d3d3d3;
    padding: 10px 0;
    gap: 2em;
`;

export const FoundUserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5em;
    width: 100%;
`;

export const Badge = styled.span`
    background-color: #f5f5f5;
    padding: 3px;
    min-width: 1.5em;
    display: inline-block;
    border-radius: 8px;
`;

export const FoundUserLink = styled.a`
    text-underline-offset: 0.2em;
    color: #0969da;
    text-decoration: none;
    font-size: 1.2em;
    text-decoration-color: rgba(9, 105, 218, 0.4);
    &:hover {
        text-decoration: underline;
    }
`;

const wrapperCommons = css`
    margin-top: 10px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    background-color: white;
`;

export const FoundUsersWrapper = styled.div`
    ${wrapperCommons}
    padding: 10px 20px;
    ${FoundUserWrapper}:last-child {
        border-bottom: none;
    }
`;

export const UsersNotFound = styled.div`
    padding-top: 3em;
    padding-bottom: 3em;
    font-size: 20px;
    ${wrapperCommons}
    gap: 10px;
`;

export const FoundUserInfoTitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ActionIcon = styled.img`
    width: 1em;
    position: relative;
    opacity: 0.7;
    cursor: pointer;
`;

export const UserInfoText = styled.div`
    font-size: 0.9em;
`;
