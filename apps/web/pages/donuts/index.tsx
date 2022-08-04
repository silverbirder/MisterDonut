import {
  useDeleteDonutMutation,
  useDonutsQuery,
} from "../../graphql-client/generated/graphql";
import Link from "next/link";

export default function Donuts() {
  const [result] = useDonutsQuery();
  const [, executeMutation] = useDeleteDonutMutation();
  const onClick = (id: string) => {
    executeMutation({ id: Number(id) }).then(() => alert("Deleted"));
  };
  return (
    <>
      <h2>List</h2>
      <Link href="/donuts/add">[Add]</Link>
      <ul>
        {result.data?.donuts?.map((d: any) => {
          return (
            <li key={d.id}>
              <span>
                {d.name} {d.price}円
              </span>
              <span>
                <Link href={`/donuts/edit/${d.id}`}> [Edit]</Link>
                <Link href={`/donuts/${d.id}`}> [View]</Link>
                <button onClick={() => onClick(d.id)}>Delete</button>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
}
