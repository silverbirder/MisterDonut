import { useDonutQuery } from "@misterdonut/graphql-codegen";
import type { ReactEventHandler } from "react";

export type ButtonProps = {
  onClick?: ReactEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: ButtonProps) => {
  useDonutQuery({ variables: { id: 1 } });
  return (
    <button type="button" onClick={onClick}>
      Boop
    </button>
  );
};
