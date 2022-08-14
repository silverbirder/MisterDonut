import { useEffect, useState } from "react";
import {
  EditDonutSubSubscription,
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
  useEditDonutSubSubscription,
} from "@misterdonut/graphql-codegen";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  id: number;
  additionalSaveClickHandler?: () => Promise<void>;
  additionalDeleteClickHandler?: () => Promise<void>;
};
export const Container = ({
  id,
  additionalSaveClickHandler,
  additionalDeleteClickHandler,
}: ContainerProps) => {
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

  return (
    <Presenter
      name={name}
      setName={setName}
      price={price}
      setPrice={setPrice}
      fetching={donutResult.fetching}
      error={donutResult.error || null}
      onSaveClickHandler={onSaveClickHandler}
      onDeleteClickHandler={onDeleteClickHandler}
      onRefreshClickHandler={onRefreshClickHandler}
    />
  );
};
