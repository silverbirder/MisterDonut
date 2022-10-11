import dynamic from "next/dynamic";
import { SignUpPageSkeleton } from "@misterdonut/ui";

const SignUpPage = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.SignUpPage),
  { ssr: false, loading: () => <SignUpPageSkeleton /> }
);

export default SignUpPage;
