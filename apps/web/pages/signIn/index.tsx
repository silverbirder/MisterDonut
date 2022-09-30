import dynamic from "next/dynamic";

const SignIn = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignIn),
  { ssr: false, loading: () => <>Loading component...</> }
);

const SignInPage = () => <SignIn />;

export default SignInPage;
