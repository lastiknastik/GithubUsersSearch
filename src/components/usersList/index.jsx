import { usersSearchResult } from "./constants";
import { useGetUsersByLoginQuery } from "../../services/githubSrvcApi";
import { useState } from "react";
import Pagination from "../pagination";
import * as S from "./styles";

export default function UsersList() {
  const PAGE_SIZE = 30;

  const [page, setPage] = useState(1);

  const users = usersSearchResult.items;
  const userLogin = "blahblah";

  const { status, data } = useGetUsersByLoginQuery({
    userLogin,
    page,
    pageSize: PAGE_SIZE,
  });
  console.log(status, data?.items);

  function FoundUser(props) {
    console.log("userInfo", props.userInfo);
    return (
      <div>
        <S.Avatar src={props.userInfo.avatar_url} alt="" />
        <div>
          <a href={props.userInfo.html_url} target="_blank" rel="noreferrer">
            {props.userInfo.login}
          </a>
        </div>
      </div>
    );
  }
  return (
    <div>
      {data?.items.map((u) => {
        return <FoundUser userInfo={u} key={u.id} />;
      })}
      <Pagination
        paginationInfo={{
          totalResults: data?.total_count,
          currentPage: page,
          pageSize: PAGE_SIZE,
          onPageChange: setPage,
        }}
      />
    </div>
  );
}
