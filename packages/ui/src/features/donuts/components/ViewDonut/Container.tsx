import {
  useDeleteDonutMutation,
  useDonutQuery,
} from "@misterdonut/graphql-codegen";
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
    <Presenter
      donut={donutResult.data?.donut || null}
      fetching={donutResult.fetching}
      error={donutResult.error || null}
      onClick={onClick}
    />
  );
};
