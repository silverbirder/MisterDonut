import * as React from "react";
import { useDonutQuery } from "@misterdonut/graphql-codegen";
export const Button = () => {
  useDonutQuery();
  return <button>Boop</button>;
};
