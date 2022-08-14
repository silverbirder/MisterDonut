import { EditDonutProps } from "@misterdonut/ui/src/features/donuts";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const EditDonut = dynamic<EditDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.EditDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const EditDonutPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const additionalSaveClickHandler = async () => {
    alert("Saved");
    await router.push(`/donuts/${id?.toString() || ""}/`);
  };
  const additionalDeleteClickHandler = async () => {
    alert("Deleted");
    await router.push("/donuts/");
  };

  return (
    <>
      <h2>Edit</h2>
      <EditDonut
        id={Number(id)}
        additionalSaveClickHandler={additionalSaveClickHandler}
        additionalDeleteClickHandler={additionalDeleteClickHandler}
      />
    </>
  );
};

export default EditDonutPage;
