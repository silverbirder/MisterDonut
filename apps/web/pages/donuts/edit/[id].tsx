import { EditDonutProps } from "@misterdonut/ui/src/features/donuts";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const EditDonutUi = dynamic<EditDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.EditDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const EditDonut = () => {
  const router = useRouter();
  const { id } = router.query;
  const onSaveClickHandler = async () => {
    alert("Saved");
    await router.push(`/donuts/${id?.toString() || ""}/`);
  };
  const onDeleteClickHandler = async () => {
    alert("Deleted");
    await router.push("/donuts/");
  };

  return (
    <>
      <h2>Edit</h2>
      <EditDonutUi
        id={Number(id)}
        onSaveClickHandler={onSaveClickHandler}
        onDeleteClickHandler={onDeleteClickHandler}
      />
    </>
  );
};

export default EditDonut;
