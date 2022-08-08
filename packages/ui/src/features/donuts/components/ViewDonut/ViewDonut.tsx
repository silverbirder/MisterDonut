import {
  useDeleteDonutMutation,
  useDonutQuery,
} from "@misterdonut/graphql-codegen";
import { Suspense } from "react";

type ViewDonutProps = {
  id: number;
  onDeleteClickHandler: () => void;
};
const ViewDonutInner = ({ id, onDeleteClickHandler }: ViewDonutProps) => {
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

export const ViewDonut = (props: ViewDonutProps) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ViewDonutInner {...props}></ViewDonutInner>
    </Suspense>
  );
};
