import * as S from "./styles";

export default function SearchBar() {
  return (
    <S.Wrapper>
      <S.SearchInput type="text" placeholder="Поиск по логину" />
      <S.SearchButton>Поиск</S.SearchButton>
    </S.Wrapper>
  );
}
