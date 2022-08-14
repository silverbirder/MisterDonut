import { useState } from "react";
import { useAddDonutMutation } from "@misterdonut/graphql-codegen";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  additionalAddClickHandler?: (id: number) => Promise<void>;
};
export const Container = ({ additionalAddClickHandler }: ContainerProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [, addDonutMutationExecute] = useAddDonutMutation();
  const onAddClickHandler = async () => {
    const addDonutResult = await addDonutMutationExecute({
      input: { name, price },
    });
    if (addDonutResult && addDonutResult.data && addDonutResult.data.addDonut) {
      if (additionalAddClickHandler) {
        await additionalAddClickHandler(
          Number(addDonutResult.data.addDonut.id)
        );
      }
    }
  };
  return (
    <Presenter
      name={name}
      setName={setName}
      price={price}
      setPrice={setPrice}
      onAddClickHandler={onAddClickHandler}
    />
  );
};
