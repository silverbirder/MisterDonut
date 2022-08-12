import { ChangeEvent, useState } from "react";
import { useAddDonutMutation } from "@misterdonut/graphql-codegen";

export type AddDonutProps = {
  onSaveClickHandler: (id: number) => Promise<void>;
};
export const AddDonut = ({ onSaveClickHandler }: AddDonutProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [, executeMutation] = useAddDonutMutation();
  const onClick = async () => {
    const result = await executeMutation({ input: { name, price } });
    if (result && result.data && result.data.addDonut) {
      await onSaveClickHandler(Number(result.data.addDonut.id));
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
      <button onClick={() => onClick} type="button">
        Save
      </button>
    </>
  );
};
