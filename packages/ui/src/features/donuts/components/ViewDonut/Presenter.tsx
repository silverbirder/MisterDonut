import { Donut } from "@misterdonut/graphql-codegen";

type PresenterProps = {
  donut: Donut | null;
  onClick: () => Promise<void>;
  onEditCategoryClickHandler: () => Promise<void>;
};
export const Presenter = ({
  donut,
  onClick,
  onEditCategoryClickHandler,
}: PresenterProps) => (
  <>
    <div>{donut?.name}</div>
    <div>{donut?.price}円</div>
    <div>Category: {donut?.category?.name}</div>
    <button
      onClick={() => {
        onClick().catch(() => {});
      }}
      type="button"
    >
      Delete
    </button>
    <button
      onClick={() => {
        onEditCategoryClickHandler().catch(() => {});
      }}
      type="button"
    >
      EditCategory
    </button>
  </>
);
