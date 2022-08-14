import { ChangeEvent, useState } from "react";
import { useAddDonutMutation } from "@misterdonut/graphql-codegen";

export type AddDonutProps = {
  additionalAddClickHandler?: (id: number) => Promise<void>;
};
export const AddDonut = ({ additionalAddClickHandler }: AddDonutProps) => {
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
    <>
      <label htmlFor="name">
        name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e: ChangeEvent) => {
            setName((e.target as HTMLInputElement).value as string);
          }}
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
      <button onClick={() => onAddClickHandler} type="button">
        Save
      </button>
    </>
  );
};
