import { useEffect, useState } from "react";
import {
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
  useEditDonutSubSubscription,
} from "@misterdonut/graphql-codegen";

export type EditDonutProps = {
  id: number;
  onSaveClickHandler: () => Promise<void>;
  onDeleteClickHandler: () => Promise<void>;
};
export const EditDonut = ({
  id,
  onSaveClickHandler,
  onDeleteClickHandler,
}: EditDonutProps) => {
  const [useDonutResult, executeDonutQuery] = useDonutQuery({
    variables: { id },
  });
  const [, executeMutation] = useEditDonutMutation();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setName(useDonutResult.data?.donut?.name || "");
    setPrice(useDonutResult.data?.donut?.price || 0);
  }, [useDonutResult]);
  const [, executeDeleteDonutMutation] = useDeleteDonutMutation();
  const onSaveClick = async () => {
    await executeMutation({ id, donutInput: { name, price } });
    await onSaveClickHandler();
  };
  const onDeleteClick = async () => {
    await executeDeleteDonutMutation({ id });
    await onDeleteClickHandler();
  };
  const onRefreshClick = () => {
    executeDonutQuery({ requestPolicy: "network-only" });
  };

  const [result] = useEditDonutSubSubscription({ variables: { id } });
  console.log({ result });

  const { fetching, error } = useDonutResult;
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }
  return (
    <>
      <button onClick={onRefreshClick} type="button">
        Refresh
      </button>
      <label htmlFor="name">
        name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) =>
            setName((e.target as HTMLInputElement).value as string)
          }
        />
      </label>
      <label htmlFor="price">
        price
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) =>
            setPrice(Number((e.target as HTMLInputElement).value as string))
          }
        />
      </label>
      <button
        onClick={() => {
          onSaveClick().catch(() => {});
        }}
        type="button"
      >
        Save
      </button>
      <button
        onClick={() => {
          onDeleteClick().catch(() => {});
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
