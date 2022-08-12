import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ViewDonutProps } from "@misterdonut/ui/src/features/donuts";

const ViewDonut = dynamic<ViewDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.ViewDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const Donut = () => {
  const router = useRouter();
  const { id } = router.query;
  const onDeleteClickHandler = async () => {
    alert("Deleted");
    await router.push("/donuts/");
  };

  return (
    <>
      <h2>View</h2>
      <ViewDonut
        id={Number(id)}
        onDeleteClickHandler={async () => {
          await onDeleteClickHandler();
        }}
      />
      <Link href={`/donuts/edit/${id?.toString() || 0}/`}>[Edit]</Link>
    </>
  );
};

export default Donut;
