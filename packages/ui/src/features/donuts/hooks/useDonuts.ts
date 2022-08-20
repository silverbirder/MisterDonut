import { useDonutsQuery } from "@misterdonut/graphql-codegen";
import { Donut } from "../types";

export const useDonuts = () => {
  const [{ data, fetching, error }] = useDonutsQuery();
  const donuts: Donut[] | undefined = data?.donuts.map((donut) => {
    const { id, name, price } = donut;
    return {
      id,
      name,
      price,
    };
  });
  return { donuts, fetching, error };
};
