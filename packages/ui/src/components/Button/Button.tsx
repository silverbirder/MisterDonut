import { useDonutsQuery } from "@misterdonut/graphql-codegen";
import type { ReactEventHandler } from "react";

export type ButtonProps = {
  onClick?: ReactEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: ButtonProps) => {
  useDonutsQuery();
  return (
    <button className="bg-white" type="button" onClick={onClick}>
      Boop
    </button>
  );
};
