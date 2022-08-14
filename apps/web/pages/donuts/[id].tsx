import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { ViewDonutProps } from "@misterdonut/ui";

const ViewDonut = dynamic<ViewDonutProps>(
  () => import("@misterdonut/ui/").then((module) => module.ViewDonut),
  { ssr: false, loading: () => <>Loading component...</> }
);

const ViewDonutPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const additionalDeleteClickHandler = async () => {
    alert("Deleted");
    await router.push("/donuts/");
  };
  return (
    <>
      <h2>View</h2>
      <ViewDonut
        id={Number(id)}
        additionalDeleteClickHandler={additionalDeleteClickHandler}
      />
      <Link href={`/donuts/edit/${id?.toString() || 0}/`}>[Edit]</Link>
    </>
  );
};

export default ViewDonutPage;
