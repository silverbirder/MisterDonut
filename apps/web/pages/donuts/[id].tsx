import Link from "next/link";
import { useRouter } from "next/router";
import {
  useDeleteDonutMutation,
  useDonutQuery,
} from "../../graphql-client/generated/graphql";

export default function Donut() {
  const router = useRouter();
  const { id } = router.query;
  const [useDonutResult] = useDonutQuery({ variables: { id: Number(id) } });
  const [, executeMutation] = useDeleteDonutMutation();
  const onClick = () => {
    executeMutation({ id: Number(id) }).then(() => {
      alert("Deleted");
      router.push("/donuts/");
    });
  };
  return (
    <>
      <h2>View</h2>
      <div>{useDonutResult.data?.donut?.name}</div>
      <div>{useDonutResult.data?.donut?.price}円</div>
      <br></br>
      <div>
        <Link href={`/donuts/edit/${useDonutResult.data?.donut?.id || 0}/`}>
          [Edit]
        </Link>
        <button onClick={onClick}>Delete</button>
      </div>
    </>
  );
}
