import dynamic from "next/dynamic";

const SignUpPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignUpPage),
  { ssr: false, loading: () => <>Loading component...</> }
);

export default SignUpPage;
