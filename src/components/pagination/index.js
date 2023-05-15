import { useEffect, useRef } from "react";
import * as S from "./styles";

function PaginationButton(props) {
    return (
        <S.PaginationButton disabled={props.btnInfo.disabled} onClick={props.btnInfo.onClick}>
            {props.btnInfo.value}
        </S.PaginationButton>
    );
}

export default function Pagination(props) {
    const onPageChange = (pageNumber) => {
        props.paginationInfo.onPageChange(pageNumber);
    };

    const totalPages = Math.ceil(props.paginationInfo.totalResults / props.paginationInfo.pageSize);

    //защита от некорректных значений
    const currentPage =
        props.paginationInfo.currentPage > props.paginationInfo.totalPages
            ? props.paginationInfo.totalPages
            : props.paginationInfo.currentPage < 1
            ? 1
            : props.paginationInfo.currentPage;

    const disablePrev = currentPage <= 1;
    const disableNext = currentPage >= totalPages;

    const currPageInputRef = useRef();

    useEffect(() => {
        currPageInputRef.current.value = currentPage;
    }, [currentPage]);

    const currPageInputOnBlurHandler = (e) => {
        const newPageValue = currPageInputRef.current.value || 0;

        if (
            currPageInputRef.current.value !== currentPage &&
            newPageValue > 0 &&
            newPageValue <= totalPages
        ) {
            onPageChange(newPageValue);
        } else {
            e.target.value = currentPage;
        }
    };

    const pageChangeOnClickHandler = (pageNumber) => {
        return () => {
            onPageChange(pageNumber);
        };
    };

    return (
        <S.Wrapper>
            <PaginationButton
                btnInfo={{
                    value: "<",
                    disabled: disablePrev,
                    onClick: pageChangeOnClickHandler(currentPage - 1),
                }}
            />
            <S.PageValueInput
                width={`${("" + totalPages).length}em`}
                min={1}
                type="number"
                step={1}
                ref={currPageInputRef}
                onBlur={currPageInputOnBlurHandler}
            />
            {`из ${totalPages}`}
            <PaginationButton
                btnInfo={{
                    value: ">",
                    disabled: disableNext,
                    onClick: pageChangeOnClickHandler(currentPage + 1),
                }}
            />
        </S.Wrapper>
    );
}
