import type { ReactEventHandler } from "react";

export type ButtonProps = {
  onClick?: ReactEventHandler<HTMLButtonElement>;
};

export const Button = ({ onClick }: ButtonProps) => (
  <button type="button" onClick={onClick}>
    Boop
  </button>
);
