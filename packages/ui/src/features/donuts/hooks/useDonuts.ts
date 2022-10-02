import { useDonutsQuery } from "@misterdonut/graphql";
import { Donut } from "../types";

export const useDonuts = () => {
  const { data, loading, error } = useDonutsQuery();
  const donuts: Donut[] =
    data && data.misterdonutCollection
      ? data.misterdonutCollection.edges.map((edge) => ({
          id: edge.node.id ? (edge.node.id as string) : "",
          name: edge.node.name ? edge.node.name : "",
          img: edge.node.img ? edge.node.img : "",
          category: edge.node.category ? edge.node.category : "",
          price: edge.node.price ? Number(edge.node.price) : 0,
          description: edge.node.description ? edge.node.description : "",
          createdAt: edge.node.created_at
            ? new Date(edge.node.created_at as string)
            : new Date(),
        }))
      : [];
  return { donuts, loading, error };
};
