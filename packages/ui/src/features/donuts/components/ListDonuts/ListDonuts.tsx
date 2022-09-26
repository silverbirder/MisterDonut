import Button from "@mui/material/Button";
import { Image } from "@ui/lib";
import { useDonuts } from "../../hooks/useDonuts";

export const ListDonuts = () => {
  const { donuts, loading, error } = useDonuts();
  if (loading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <div>
      {donuts.map((donut) => (
        <div key={donut.id}>
          <Button variant="text">Text</Button>
          <Image src={donut.img} alt={donut.name} width={62} height={62} />
        </div>
      ))}
    </div>
  );
};
