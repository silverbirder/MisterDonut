import dynamic from "next/dynamic";
import { DonutsPageSkeleton } from "@misterdonut/ui";

const DonutsPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.DonutsPage),
  { ssr: false, loading: () => <DonutsPageSkeleton /> }
);

export default DonutsPage;
