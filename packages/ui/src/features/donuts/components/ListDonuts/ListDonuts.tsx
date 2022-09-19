import { useDonuts } from "../../hooks/useDonuts";
import { Image } from "../../../../lib";

export const ListDonuts = () => {
  const { donuts, loading, error } = useDonuts();
  if (loading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <ul>
      {donuts.map((donut) => (
        <li key={donut.name}>
          {donut.name}
          <Image src={donut.img} alt={donut.name} width={62} height={62} />
        </li>
      ))}
    </ul>
  );
};
