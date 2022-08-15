import {
  useDeleteDonutMutation,
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
  return (
    <Suspense fetching={donutResult.fetching} error={donutResult.error || null}>
      <Presenter donut={donutResult.data?.donut || null} onClick={onClick} />
    </Suspense>
  );
};
