import dynamic from "next/dynamic";

const DonutsPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.DonutsPage),
  { ssr: false, loading: () => <>Loading component...</> }
);
export default DonutsPage;
