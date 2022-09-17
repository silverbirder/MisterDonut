import dynamic from "next/dynamic";
import { ListDonutsProps } from "@misterdonut/ui";

const ListDonuts = dynamic<ListDonutsProps>(
  () => import("@misterdonut/ui/").then((module) => module.ListDonuts),
  { ssr: false, loading: () => <>Loading component...</> }
);

const ListDonutsPage = () => <ListDonuts />;

export default ListDonutsPage;
