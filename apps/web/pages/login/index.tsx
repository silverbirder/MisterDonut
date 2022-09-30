import dynamic from "next/dynamic";

const Login = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.Login),
  { ssr: false, loading: () => <>Loading component...</> }
);

const LoginPage = () => <Login />;

export default LoginPage;
