import { useRouter } from "next/router";
import { useState } from "react";
import { useAddDonutMutation } from "@misterdonut/graphql-codegen";

export default function AddDonut() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [, executeMutation] = useAddDonutMutation();
  const onClick = () => {
    executeMutation({ input: { name, price } }).then((result: any) => {
      alert("Added");
      router.push(`/donuts/${result.data.addDonut.id}/`);
    });
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
