import {
  useDeleteDonutMutation,
  useDonutsQuery,
} from "@misterdonut/graphql-codegen";
import { ChangeEvent, useState } from "react";
import { Suspense } from "../Suspense";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  additionalDeleteClickHandler?: () => void;
  renderLink: (id: number) => React.ReactNode;
};

export const Container = ({
  additionalDeleteClickHandler,
  renderLink,
}: ContainerProps) => {
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [donutsResult, donutsQueryExecute] = useDonutsQuery({
    variables: { query: { name: searchKeyword } },
  });
  const [, deleteDonutMutationExecute] = useDeleteDonutMutation();

  const onDeleteClickHandler = (id: number): void => {
    deleteDonutMutationExecute({ id }).catch(() => {});
    if (additionalDeleteClickHandler) {
      additionalDeleteClickHandler();
    }
  };
  const onChangeKeywordHandler = (e: ChangeEvent) => {
    setKeyword((e.target as HTMLInputElement).value as string);
  };
  const onSearchClickHandler = () => {
    if (keyword !== searchKeyword) {
      setSearchKeyword(keyword);
    } else {
      donutsQueryExecute();
    }
  };

  return (
    <Suspense
      fetching={donutsResult.fetching}
      error={donutsResult.error || null}
    >
      <Presenter
        donuts={donutsResult.data ? donutsResult.data.donuts : []}
        keyword={keyword}
        onChangeKeywordHandler={onChangeKeywordHandler}
        onSearchClickHandler={onSearchClickHandler}
        onDeleteClickHandler={onDeleteClickHandler}
        renderLink={renderLink}
      />
    </Suspense>
  );
};
