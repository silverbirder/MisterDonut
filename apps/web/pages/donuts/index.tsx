import {
  useAddDonutMutationMutation,
  useMyDonutsQueryQuery,
} from "../../graphql-client/generated/graphql";

export default function Home() {
  const [result1] = useMyDonutsQueryQuery();
  const { data } = result1;
  const [, executeMutation] = useAddDonutMutationMutation();
  const onClick = () => {
    const name = (document.querySelector("#name") as HTMLInputElement)?.value;
    const price = Number(
      (document.querySelector("#price") as HTMLInputElement)?.value
    );
    executeMutation({ input: { name, price } });
  };
  return (
    <>
      <label>name</label>
      <input type="text" id="name"></input>
      <label>price</label>
      <input type="number" id="price"></input>
      <button onClick={onClick}>mutation</button>
      <ul>
        {data?.donuts?.map((d) => {
          return (
            <li key={d?.id}>
              {d?.name} {d?.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}
