import dynamic from "next/dynamic";

const ListDonuts = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.ListDonuts),
  { ssr: false, loading: () => <>Loading component...</> }
);

const ListDonutsPage = () => <ListDonuts />;

export default ListDonutsPage;
