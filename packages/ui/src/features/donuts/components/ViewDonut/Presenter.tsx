import { Donut } from "@misterdonut/graphql-codegen";
import { EditCategoryButton } from "../EditCategoryButton";
import { EditDonutButton } from "../EditDonutButton";

type PresenterProps = {
  donut: Donut | null;
  onClick: () => Promise<void>;
};
export const Presenter = ({ donut, onClick }: PresenterProps) => (
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
    <EditDonutButton id={1} name="テストドーナッツ" price={1000} />
    <EditCategoryButton id={1} name="テストカテゴリ" />
  </>
);
