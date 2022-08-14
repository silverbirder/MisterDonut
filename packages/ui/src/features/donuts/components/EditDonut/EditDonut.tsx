import { useEffect, useState } from "react";
import {
  EditDonutSubSubscription,
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
  useEditDonutSubSubscription,
} from "@misterdonut/graphql-codegen";

export type EditDonutProps = {
  id: number;
  additionalSaveClickHandler?: () => Promise<void>;
  additionalDeleteClickHandler?: () => Promise<void>;
};
export const EditDonut = ({
  id,
  additionalSaveClickHandler,
  additionalDeleteClickHandler,
}: EditDonutProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const [donutResult, donutQueryExecute] = useDonutQuery({
    variables: { id },
  });
  const [, editDonutMutationExecute] = useEditDonutMutation();
  const [, deleteDonutMutationExecute] = useDeleteDonutMutation();
  const [editDonutSubscriptionResult] = useEditDonutSubSubscription(
    { variables: { id } },
    (
      prev: EditDonutSubSubscription | undefined,
      data: EditDonutSubSubscription
    ): EditDonutSubSubscription => data
  );

  useEffect(() => {
    setName(donutResult.data?.donut?.name || "");
    setPrice(donutResult.data?.donut?.price || 0);
  }, [donutResult]);

  const onSaveClickHandler = async () => {
    await editDonutMutationExecute({ id, donutInput: { name, price } });
    if (additionalSaveClickHandler) {
      await additionalSaveClickHandler();
    }
  };
  const onDeleteClickHandler = async () => {
    await deleteDonutMutationExecute({ id });
    if (additionalDeleteClickHandler) {
      await additionalDeleteClickHandler();
    }
  };
  const onRefreshClickHandler = () => {
    donutQueryExecute({ requestPolicy: "network-only" });
  };

  const { fetching, error } = donutResult;
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }
  return (
    <>
      <button onClick={onRefreshClickHandler} type="button">
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
          onSaveClickHandler().catch(() => {});
        }}
        type="button"
      >
        Save
      </button>
      <button
        onClick={() => {
          onDeleteClickHandler().catch(() => {});
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
