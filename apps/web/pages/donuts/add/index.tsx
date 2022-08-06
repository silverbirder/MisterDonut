import { useRouter } from "next/router";
import { AddDonut as AddDonutUi } from "@misterdonut/ui";

export default function AddDonut() {
  const router = useRouter();
  const onSaveClickHandler = (id: number) => {
    alert("Added");
    router.push(`/donuts/${id}/`);
  };
  const props = {
    onSaveClickHandler,
  };
  return (
    <>
      <h2>Add</h2>
      <AddDonutUi {...props}></AddDonutUi>
    </>
  );
}
