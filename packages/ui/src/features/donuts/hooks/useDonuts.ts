import { useDonutsQuery } from "@misterdonut/graphql-codegen";
import { Donut } from "../types";

export const useDonuts = () => {
  const { data, loading, error } = useDonutsQuery();
  const donuts: Donut[] =
    data && data.misterdonutCollection
      ? data.misterdonutCollection.edges.map((edge) => ({
          id: edge.node.id ? (edge.node.id as string) : "",
          name: edge.node.name ? edge.node.name : "",
          img: edge.node.img ? edge.node.img : "",
        }))
      : [];
  return { donuts, loading, error };
};
