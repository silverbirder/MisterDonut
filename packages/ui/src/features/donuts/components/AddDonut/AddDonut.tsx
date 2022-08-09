import { ChangeEvent, useState } from "react";
import { useAddDonutMutation } from "@misterdonut/graphql-codegen";

type AddDonutProps = {
  onSaveClickHandler: (id: number) => void;
};
export const AddDonut = ({ onSaveClickHandler }: AddDonutProps) => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [, executeMutation] = useAddDonutMutation();
  const onClick = () => {
    executeMutation({ input: { name, price } }).then((result: any) => {
      onSaveClickHandler(result.data.addDonut.id);
    });
  };
  return (
    <>
      <label>
        name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e: ChangeEvent) => setName(e.target.value)}
        />
      </label>
      <label>
        price
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </label>
      <button onClick={onClick}>Save</button>
    </>
  );
};
