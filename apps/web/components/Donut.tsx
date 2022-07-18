import {
  AddDonutMutation,
  AddDonutMutationMutation,
  Article,
} from "../graphql-client/generated/graphql";
import { useMutation } from "urql";

const Donut = () => {
  const [result, reexecuteQuery] =
    useMutation<AddDonutMutationMutation>(AddDonutMutation);

  const { data, fetching, error } = result;
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log({ data });
  return <ul>{data?.addDonut}</ul>;
};

export default Donut;
