import {
  AddDonutMutation,
  AddDonutMutationMutation,
  Article,
} from "../graphql-client/generated/graphql";
import { useMutation } from "urql";
import { useEffect } from "react";

const Donut = () => {
  const [result, executeMutation] =
    useMutation<AddDonutMutationMutation>(AddDonutMutation);

  const { data, fetching, error } = result;
  useEffect(() => {
    executeMutation();
  }, []);
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return <div>{data?.addDonut}</div>;
};

export default Donut;
