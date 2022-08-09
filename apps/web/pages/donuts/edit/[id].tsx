import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const EditDonutUi = dynamic(
  () => import("@misterdonut/ui/").then((module) => module.EditDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

export default function EditDonut() {
  const router = useRouter();
  const { id } = router.query;
  const onSaveClickHandler = () => {
    alert("Saved");
    router.push(`/donuts/${id}/`);
  };
  const onDeleteClickHandler = () => {
    alert("Deleted");
    router.push("/donuts/");
  };
  const prop = {
    id: Number(id),
    onSaveClickHandler,
    onDeleteClickHandler,
  };
  return (
    <>
      <h2>Edit</h2>
      <EditDonutUi {...prop}></EditDonutUi>
    </>
  );
}
