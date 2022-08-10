import {
  useDeleteDonutMutation,
  useDonutQuery,
} from "@misterdonut/graphql-codegen";

type ViewDonutProps = {
  id: number;
  onDeleteClickHandler: () => void;
};
export const ViewDonut = ({ id, onDeleteClickHandler }: ViewDonutProps) => {
  const [useDonutResult] = useDonutQuery({ variables: { id } });
  const [, executeMutation] = useDeleteDonutMutation();
  const onClick = async (): Promise<void> => {
    await executeMutation({ id });
    onDeleteClickHandler();
  };
  const { data, fetching, error } = useDonutResult;
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
