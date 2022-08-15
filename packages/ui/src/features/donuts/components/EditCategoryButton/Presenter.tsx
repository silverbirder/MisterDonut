type PresenterProps = {
  onEditCategoryClickHandler: () => Promise<void>;
};
export const Presenter = ({ onEditCategoryClickHandler }: PresenterProps) => (
  <button
    onClick={() => {
      onEditCategoryClickHandler().catch(() => {});
    }}
    type="button"
  >
    EditCategory
  </button>
);
