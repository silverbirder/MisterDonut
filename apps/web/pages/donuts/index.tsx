import {
  useAddDonutMutationMutation,
  useMyDonutsQueryQuery,
} from "../../graphql-client/generated/graphql";

export default function Home() {
  const [result1] = useMyDonutsQueryQuery();
  const { data, fetching } = result1;
  const [result2, executeMutation] = useAddDonutMutationMutation();
  const onClick = () => {
    executeMutation();
  };
  console.log({ result2 });
  return (
    <>
      <button onClick={onClick}>mutation</button>
      <li>
        {data?.donuts?.map((d) => {
          return (
            <ul key={d?.id}>
              {d?.name} {d?.price}
            </ul>
          );
        })}
      </li>
    </>
  );
}
