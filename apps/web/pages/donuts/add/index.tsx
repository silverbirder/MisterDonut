import { AddDonutProps } from "@misterdonut/ui/src/features/donuts";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const AddDonutUi = dynamic<AddDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.AddDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const AddDonut = () => {
  const router = useRouter();
  const onSaveClickHandler = async (id: number) => {
    alert("Added");
    await router.push(`/donuts/${id}/`);
  };

  return (
    <>
      <h2>Add</h2>
      <AddDonutUi onSaveClickHandler={onSaveClickHandler} />
    </>
  );
};

export default AddDonut;
