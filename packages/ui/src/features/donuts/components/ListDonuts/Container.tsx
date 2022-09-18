import { useDonuts } from "../../hooks/useDonuts";
import { Image } from "../../../../lib";

export type ContainerProps = {
  additionalDeleteClickHandler?: () => void;
};

export const Container = ({ additionalDeleteClickHandler }: ContainerProps) => {
  const { donuts, loading, error } = useDonuts();
  if (loading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <ul>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {donuts.map((donut) => (
        <li key={donut.name}>
          {donut.name}
          <Image src={donut.img} alt={donut.name} width={62} height={62} />
        </li>
      ))}
    </ul>
  );
};
