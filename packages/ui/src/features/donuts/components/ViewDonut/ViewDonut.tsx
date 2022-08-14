import {
  useDeleteDonutMutation,
  useDonutQuery,
} from "@misterdonut/graphql-codegen";

export type ViewDonutProps = {
  id: number;
  additionalDeleteClickHandler?: () => Promise<void>;
};
export const ViewDonut = ({
  id,
  additionalDeleteClickHandler,
}: ViewDonutProps) => {
  const [donutResult] = useDonutQuery({ variables: { id } });
  const [, deleteDonutMutationExecute] = useDeleteDonutMutation();

  const onClick = async (): Promise<void> => {
    await deleteDonutMutationExecute({ id });
    if (additionalDeleteClickHandler) {
      await additionalDeleteClickHandler();
    }
  };

  const { data, fetching, error } = donutResult;
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }
  return (
    <>
      <div>{data?.donut?.name}</div>
      <div>{data?.donut?.price}円</div>
      <button
        onClick={() => {
          onClick().catch(() => {});
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
