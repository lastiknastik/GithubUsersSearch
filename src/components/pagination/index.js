function PaginationButton(props) {
  return <button onClick={props.btnInfo.onClick}>{props.btnInfo.value}</button>;
}

export default function Pagination(props) {
  const totalPages = Math.ceil(
    props.paginationInfo.totalResults / props.paginationInfo.pageSize
  );

  //защита от некорректных значений
  const currentPage =
    props.paginationInfo.currentPage > props.paginationInfo.totalPages
      ? props.paginationInfo.totalPages
      : props.paginationInfo.currentPage < 1
      ? 1
      : props.paginationInfo.currentPage;

  const disablePrev = currentPage <= 1;
  const disableNext = currentPage >= totalPages;

  return (
    <div>
      <PaginationButton
        btnInfo={{
          value: "<",
          disabled: disablePrev,
          onClick: () => {
            props.paginationInfo.onPageChange(currentPage - 1);
          },
        }}
      />
      <input type="text" value={currentPage} onChange={}/>
      {`of ${totalPages}`}
      <PaginationButton
        btnInfo={{
          value: ">",
          disabled: disableNext,
          onClick: () => {
            props.paginationInfo.onPageChange(currentPage + 1);
          },
        }}
      />
    </div>
  );
}
