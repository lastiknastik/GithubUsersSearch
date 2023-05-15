import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: 2.5em;
    justify-content: space-between;
    gap: 5px;
    font-size: 20px;
    width: 100%;
    border-radius: 6px;
    background-color: white;
`;

export const SearchInput = styled.input`
    width: 100%;
    border-radius: 6px;
    border: none;
    padding: 0 1em;
    font-size: inherit;
    :focus {
        border-color: white;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
    :focus-visible {
        border-color: white;
        outline: 0;
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
`;

export const SearchButton = styled.button`
    height: 88%;
    margin-top: auto;
    margin-bottom: auto;
    user-select: none;
    margin-right: 3px;
    width: 25%;
    border-radius: 6px;
    border: none;
    font-size: inherit;
    background-color: #337ab7;
    color: white;
    :active {
        background-color: #286090;
        box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    }
    :hover {
        background-color: #286090;
    }
`;
