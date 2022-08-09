import { useDonutQuery } from "@misterdonut/graphql-codegen";

export const Button = () => {
  useDonutQuery();
  return <button type="button">Boop</button>;
};
