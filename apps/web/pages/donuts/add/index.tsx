import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const AddDonutUi = dynamic(
  () => import("@misterdonut/ui/").then((module) => module.AddDonut),
  { ssr: false }
);

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
