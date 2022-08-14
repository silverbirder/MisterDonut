import { Donut } from "@misterdonut/graphql-codegen";

type PresenterProps = {
  donut: Donut | null;
  onClick: () => Promise<void>;
};
export const Presenter = ({ donut, onClick }: PresenterProps) => (
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
