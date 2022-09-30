import dynamic from "next/dynamic";

const SignUp = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignUp),
  { ssr: false, loading: () => <>Loading component...</> }
);

const SignUpPage = () => <SignUp />;

export default SignUpPage;
