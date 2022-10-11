import dynamic from "next/dynamic";

const SignInPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignInPage),
  { ssr: false, loading: () => <>Loading component...</> }
);

export default SignInPage;
