type PresenterProps = {
  name: string;
  setName: (name: string) => void;
  price: number;
  setPrice: (price: number) => void;
  fetching: boolean;
  error: Error | null;
  onSaveClickHandler: () => Promise<void>;
  onDeleteClickHandler: () => Promise<void>;
  onRefreshClickHandler: () => void;
};

export const Presenter = ({
  name,
  setName,
  price,
  setPrice,
  fetching,
  error,
  onSaveClickHandler,
  onDeleteClickHandler,
  onRefreshClickHandler,
}: PresenterProps) => {
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }
  return (
    <>
      <button onClick={onRefreshClickHandler} type="button">
        Refresh
      </button>
      <label htmlFor="name">
        name
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) =>
            setName((e.target as HTMLInputElement).value as string)
          }
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
      <button
        onClick={() => {
          onSaveClickHandler().catch(() => {});
        }}
        type="button"
      >
        Save
      </button>
      <button
        onClick={() => {
          onDeleteClickHandler().catch(() => {});
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
