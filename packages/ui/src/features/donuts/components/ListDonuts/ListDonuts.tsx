import {
  useDeleteDonutMutation,
  useDonutsQuery,
} from "@misterdonut/graphql-codegen";
import { ChangeEvent, Suspense, useState } from "react";

type ListDonutsProps = {
  onDeleteClickHandler: () => void;
  renderLink: (id: number) => React.ReactNode;
};

const ListDonutsInner = ({
  onDeleteClickHandler,
  renderLink,
}: ListDonutsProps) => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [result, executeQuery] = useDonutsQuery({
    variables: { name: searchKeyword },
  });
  const [, executeMutation] = useDeleteDonutMutation();
  const onDeleteClick = (id: string) => {
    executeMutation({ id: Number(id) }).then(() => {
      onDeleteClickHandler();
    });
  };
  const onChangeKeyword = (e: ChangeEvent) => {
    setKeyword(e.target.value);
  };
  const onSearchClick = () => {
    setSearchKeyword(keyword);
  };
  const onRefreshClick = () => {
    executeQuery({ requestPolicy: "network-only" });
  };
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
      <button onClick={onSearchClick}>Search</button>
      <button onClick={onRefreshClick}>Refresh</button>
      <ul>
        {result.data?.donuts?.map((d: any) => {
          return (
            d && (
              <li key={d.id}>
                <span>
                  {renderLink(d.id)}
                  <button onClick={() => onDeleteClick(d.id)}>Delete</button>
                </span>
                <span>
                  {d.name} {d.price}円
                </span>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export const ListDonuts = (props: ListDonutsProps) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ListDonutsInner {...props} />
    </Suspense>
  );
};
