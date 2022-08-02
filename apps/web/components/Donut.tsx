import {
  AddDonutMutation,
  AddDonutMutationMutation,
  Article,
  DonutSubscribe,
  DonutSubscribeSubscription,
} from "../graphql-client/generated/graphql";
import { useMutation, useSubscription } from "urql";
import { useEffect } from "react";

const handleSubscription = (previousData: any, data: any) => {
  return data;
};
const Donut = () => {
  const [res] = useSubscription<DonutSubscribeSubscription>(
    { query: DonutSubscribe },
    handleSubscription
  );

  useEffect(() => {
    console.log(res.data?.donut);
  }, [res.data?.donut]);

  const [result, executeMutation] =
    useMutation<AddDonutMutationMutation>(AddDonutMutation);

  const { data, fetching, error } = result;
  useEffect(() => {
    executeMutation();
  }, [executeMutation]);
  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return <div>{data?.addDonut}</div>;
};

export default Donut;
