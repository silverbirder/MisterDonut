type PresenterProps = {
  onEditDonutClickHandler: () => Promise<void>;
};
export const Presenter = ({ onEditDonutClickHandler }: PresenterProps) => (
  <button
    onClick={() => {
      onEditDonutClickHandler().catch(() => {});
    }}
    type="button"
  >
    EditDonut
  </button>
);
