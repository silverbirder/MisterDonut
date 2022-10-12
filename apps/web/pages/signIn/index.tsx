import dynamic from "next/dynamic";
import { SignInPageSkeleton } from "@misterdonut/ui";

const SignInPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignInPage),
  { ssr: false, loading: () => <SignInPageSkeleton /> }
);

export default SignInPage;
