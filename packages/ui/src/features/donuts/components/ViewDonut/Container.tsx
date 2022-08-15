import {
  useDeleteDonutMutation,
  useEditCategoryMutation,
  useDonutQuery,
} from "@misterdonut/graphql-codegen";
import { Suspense } from "../Suspense";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  id: number;
  additionalDeleteClickHandler?: () => Promise<void>;
};
export const Container = ({
  id,
  additionalDeleteClickHandler,
}: ContainerProps) => {
  const [donutResult] = useDonutQuery({ variables: { id } });
  const [, deleteDonutMutationExecute] = useDeleteDonutMutation();

  const onClick = async (): Promise<void> => {
    await deleteDonutMutationExecute({ id });
    if (additionalDeleteClickHandler) {
      await additionalDeleteClickHandler();
    }
  };
  const [, editCategoryMutationExecute] = useEditCategoryMutation();
  const onEditCategoryClickHandler = async () => {
    await editCategoryMutationExecute({
      id: 1,
      categoryInput: { name: "テスト2" },
    });
  };
  return (
    <Suspense fetching={donutResult.fetching} error={donutResult.error || null}>
      <Presenter
        donut={donutResult.data?.donut || null}
        onClick={onClick}
        onEditCategoryClickHandler={onEditCategoryClickHandler}
      />
    </Suspense>
  );
};
