import { Donut } from "@misterdonut/graphql-codegen";

type PresenterProps = {
  donut: Donut | null;
  fetching: boolean;
  error: Error | null;
  onClick: () => Promise<void>;
};
export const Presenter = ({
  donut,
  fetching,
  error,
  onClick,
}: PresenterProps) => {
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <>ERROR</>;
  }
  return (
    <>
      <div>{donut?.name}</div>
      <div>{donut?.price}円</div>
      <button
        onClick={() => {
          onClick().catch(() => {});
        }}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
