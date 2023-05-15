import styled from "styled-components";

export const PageValueInput = styled.input`
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    font-size: inherit;
    text-align: center;
    width: ${(props) => props.width};
`;

export const Wrapper = styled.div`
    padding-top: 20px;
    color: white;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    gap: 0.2em;
`;

export const PaginationButton = styled.button`
    font-size: inherit;
    user-select: none;
`;
