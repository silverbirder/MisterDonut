import { ChangeEvent } from "react";

type PresenterProps = {
  name: string;
  setName: (name: string) => void;
  price: number;
  setPrice: (price: number) => void;
  onAddClickHandler: () => Promise<void>;
};

export const Presenter = ({
  name,
  setName,
  price,
  setPrice,
  onAddClickHandler,
}: PresenterProps) => (
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
