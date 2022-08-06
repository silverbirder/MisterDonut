import { useRouter } from "next/router";
import { EditDonut as EditDonutUi } from "@misterdonut/ui";

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
