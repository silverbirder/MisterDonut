import {
  Donut,
  useDeleteDonutMutation,
  useDonutsQuery,
} from "@misterdonut/graphql-codegen";
import { ChangeEvent, useState } from "react";

export type ListDonutsProps = {
  additionalDeleteClickHandler?: () => void;
  renderLink: (id: number) => React.ReactNode;
};

export const ListDonuts = ({
  additionalDeleteClickHandler,
  renderLink,
}: ListDonutsProps) => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [donutsResult, donutsQueryExecute] = useDonutsQuery({
    variables: { query: { name: searchKeyword } },
    requestPolicy: "cache-and-network",
  });
  const [, deleteDonutMutationExecute] = useDeleteDonutMutation();

  const onDeleteClick = (id: string): void => {
    deleteDonutMutationExecute({ id: Number(id) }).catch(() => {});
    if (additionalDeleteClickHandler) {
      additionalDeleteClickHandler();
    }
  };
  const onChangeKeyword = (e: ChangeEvent) => {
    setKeyword((e.target as HTMLInputElement).value as string);
  };
  const onSearchClick = () => {
    if (keyword !== searchKeyword) {
      setSearchKeyword(keyword);
    } else {
      donutsQueryExecute();
    }
  };

  const { data, fetching, error } = donutsResult;
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }

  return (
    <>
      <br />
      <br />
      <br />
      <input
        type="text"
        placeholder="search keyword"
        value={keyword}
        onChange={onChangeKeyword}
      />
      <button onClick={onSearchClick} type="button">
        Search
      </button>
      <ul>
        {data?.donuts?.map(
          (d: Donut | null) =>
            d && (
              <li key={d.id}>
                <span>
                  {renderLink(Number(d.id))}
                  <button onClick={() => onDeleteClick(d.id)} type="button">
                    Delete
                  </button>
                </span>
                <span>
                  {d.name} {d.price}円
                </span>
              </li>
            )
        )}
      </ul>
    </>
  );
};
