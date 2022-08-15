import { useEditDonutMutation } from "@misterdonut/graphql-codegen";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  id: number;
  name: string;
  price: number;
};
export const Container = ({ id, name, price }: ContainerProps) => {
  const [, editDonutMutationExecute] = useEditDonutMutation();
  const onEditDonutClickHandler = async () => {
    await editDonutMutationExecute({
      id,
      donutInput: { name, price },
    });
  };
  return <Presenter onEditDonutClickHandler={onEditDonutClickHandler} />;
};
