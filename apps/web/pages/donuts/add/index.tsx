import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useAddDonutMutation,
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
} from "../../../graphql-client/generated/graphql";

export default function AddDonut() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [, executeMutation] = useAddDonutMutation();
  const onClick = () => {
    executeMutation({ input: { name, price } }).then(() => alert("Added"));
  };
  return (
    <>
      <h2>Add</h2>
      <label>
        name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
}
