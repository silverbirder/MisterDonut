import dynamic from "next/dynamic";

const Account = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.Account),
  { ssr: false, loading: () => <>Loading component...</> }
);

const AccountPage = () => <Account />;

export default AccountPage;
