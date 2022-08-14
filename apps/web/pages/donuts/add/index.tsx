import { AddDonutProps } from "@misterdonut/ui/src/features/donuts";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const AddDonut = dynamic<AddDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.AddDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const AddDonutPage = () => {
  const router = useRouter();
  const additionalAddClickHandler = async (id: number) => {
    alert("Added");
    await router.push(`/donuts/${id}/`);
  };

  return (
    <>
      <h2>Add</h2>
      <AddDonut additionalAddClickHandler={additionalAddClickHandler} />
    </>
  );
};

export default AddDonutPage;
