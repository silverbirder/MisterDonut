import Link from "next/link";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ViewDonut = dynamic(
  () => import("@misterdonut/ui/").then((module) => module.ViewDonut),
  { ssr: false }
);

export default function Donut() {
  const router = useRouter();
  const { id } = router.query;
  const onDeleteClickHandler = () => {
    alert("Deleted");
    router.push("/donuts/");
  };
  const props = {
    id: Number(id),
    onDeleteClickHandler,
  };
  return (
    <>
      <h2>View</h2>
      <ViewDonut {...props}></ViewDonut>
      <Link href={`/donuts/edit/${id}/`}>[Edit]</Link>
    </>
  );
}
