import { useEffect, useState } from "react";
import {
  useDeleteDonutMutation,
  useDonutQuery,
  useEditDonutMutation,
} from "@misterdonut/graphql-codegen";

type EditDonutProps = {
  id: number;
  onSaveClickHandler: () => void;
  onDeleteClickHandler: () => void;
};
export const EditDonut = ({
  id,
  onSaveClickHandler,
  onDeleteClickHandler,
}: EditDonutProps) => {
  const [useDonutResult] = useDonutQuery({ variables: { id } });
  const [, executeMutation] = useEditDonutMutation();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  useEffect(() => {
    setName(useDonutResult.data?.donut?.name || "");
    setPrice(useDonutResult.data?.donut?.price || 0);
  }, [useDonutResult]);
  const [, executeDeleteDonutMutation] = useDeleteDonutMutation();
  const onSaveClick = () => {
    executeMutation({ id, donutInput: { name, price } }).then(() => {
      onSaveClickHandler();
    });
  };
  const onDeleteClick = () => {
    executeDeleteDonutMutation({ id }).then(() => {
      onDeleteClickHandler();
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
      <button onClick={onSaveClick}>Save</button>
      <button onClick={onDeleteClick}>Delete</button>
    </>
  );
};
