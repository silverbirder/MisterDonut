import {
  Donut,
  useDeleteDonutMutation,
  useDonutsQuery,
} from "@misterdonut/graphql-codegen";
import { ChangeEvent, useState } from "react";

type ListDonutsProps = {
  onDeleteClickHandler: () => void;
  renderLink: (id: number) => React.ReactNode;
};

export const ListDonuts = ({
  onDeleteClickHandler,
  renderLink,
}: ListDonutsProps) => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [result, executeQuery] = useDonutsQuery({
    variables: { name: searchKeyword },
    requestPolicy: "cache-and-network",
  });

  const [, executeMutation] = useDeleteDonutMutation();
  const onDeleteClick = (id: string): void => {
    executeMutation({ id: Number(id) }).catch(() => {});
    onDeleteClickHandler();
  };
  const onChangeKeyword = (e: ChangeEvent) => {
    setKeyword((e.target as HTMLInputElement).value as string);
  };
  const onSearchClick = () => {
    setSearchKeyword(keyword);
  };
  const onRefreshClick = () => {
    executeQuery({ requestPolicy: "network-only" });
  };

  const { data, fetching, error } = result;
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
      <button onClick={onRefreshClick} type="button">
        Refresh
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
