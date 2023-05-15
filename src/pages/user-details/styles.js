import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: white;
    display: flex;
    flex-direction: row;
    width: 610px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 0 2em 0;
    box-sizing: border-box;
    color: #3a3b3c;
`;

export const Avatar = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;

    margin-right: 30px;
`;

export const ColomnLayout = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: ${(props) => props.textAlign || "inherit"};
    gap: ${(props) => props.gap || "1em"};
    justify-content: space-between;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: "row";
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.a`
    font-size: 1.8em;
    font-weight: 500;
    text-decoration: none;
    color: #0969da;
`;

export const TextRegular = styled.span`
    margin-top: ${(props) => props.marginTop || "auto"};
`;

export const ParagraphRegular = styled.p`
    margin: inherit;
`;

export const TextSecondary = styled.span`
    font-size: 0.85em;
    color: gray;
`;

export const FollowersInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #e0e0e0;
    padding: 15px;
    border-radius: 15px;
    justify-content: space-around;
`;

export const FollowersInfoItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

export const FollowersInfoItemValue = styled.span`
    font-weight: 800;
    font-size: 30px;
`;

export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10em;
`;

export const FieldWithIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.3em;
`;

export const FieldIcon = styled.img`
    width: 1.5em;
`;

export const LinkRegular = styled.a`
    text-decoration: none;
    color: #0969da;
    &:hover {
        text-decoration: underline;
    }
`;

export const TextStrong = styled.span`
    font-weight: 600;
    font-size: 1.2em;
`;
