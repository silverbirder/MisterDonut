import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
} from "@misterdonut/graphql-codegen";

export default function EditDonut() {
  const router = useRouter();
  const { id } = router.query;
  const [useDonutResult] = useDonutQuery({ variables: { id: Number(id) } });
  const [, executeMutation] = useEditDonutMutation();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setName(useDonutResult.data?.donut?.name || "");
    setPrice(useDonutResult.data?.donut?.price || 0);
  }, [useDonutResult]);
  const [, executeDeleteDonutMutation] = useDeleteDonutMutation();
  const onClick = () => {
    executeMutation({ id: Number(id), donutInput: { name, price } }).then(
      () => {
        alert("Saved");
        router.push(`/donuts/${id}/`);
      }
    );
  };
  const onDeleteClick = () => {
    executeDeleteDonutMutation({ id: Number(id) }).then(() => {
      alert("Deleted");
      router.push("/donuts/");
    });
  };
  return (
    <>
      <h2>Edit</h2>
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
      <button onClick={onDeleteClick}>Delete</button>
    </>
  );
}
