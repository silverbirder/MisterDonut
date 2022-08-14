import Link from "next/link";
import dynamic from "next/dynamic";
import { ListDonutsProps } from "@misterdonut/ui";

const ListDonuts = dynamic<ListDonutsProps>(
  () => import("@misterdonut/ui/").then((module) => module.ListDonuts),
  { ssr: false, loading: () => <>Loading component...</> }
);

const ListDonutsPage = () => {
  const additionalDeleteClickHandler = () => {
    alert("Deleted");
  };
  const renderLink = (id: number): React.ReactNode => (
    <>
      <Link href={`/donuts/edit/${id}/`}> [Edit]</Link>
      <Link href={`/donuts/${id}/`}> [View]</Link>
    </>
  );

  return (
    <>
      <h2>List</h2>
      <Link href="/donuts/add/">[Add]</Link>
      <ListDonuts
        additionalDeleteClickHandler={additionalDeleteClickHandler}
        renderLink={renderLink}
      />
    </>
  );
};

export default ListDonutsPage;
