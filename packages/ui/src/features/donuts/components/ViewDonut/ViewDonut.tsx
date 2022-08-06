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
  const onClick = () => {
    executeMutation({ id }).then(() => {
      onDeleteClickHandler();
    });
  };
  return (
    <>
      <div>{useDonutResult.data?.donut?.name}</div>
      <div>{useDonutResult.data?.donut?.price}円</div>
      <button onClick={onClick}>Delete</button>
    </>
  );
};
