import Link from "next/link";
import dynamic from "next/dynamic";
const ListDonuts = dynamic(
  () => import("@misterdonut/ui/").then((module) => module.ListDonuts),
  { ssr: false, loading: () => <>Loading component...</> }
);

export default function Donuts() {
  const onDeleteClickHandler = () => {
    alert("Deleted");
  };
  const renderLink = (id: number): React.ReactNode => {
    return (
      <>
        <Link href={`/donuts/edit/${id}/`}> [Edit]</Link>
        <Link href={`/donuts/${id}/`}> [View]</Link>
      </>
    );
  };
  const props = { onDeleteClickHandler, renderLink };
  return (
    <>
      <h2>List</h2>
      <Link href="/donuts/add/">[Add]</Link>
      <ListDonuts {...props}></ListDonuts>
    </>
  );
}
