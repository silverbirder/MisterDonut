import { useEditCategoryMutation } from "@misterdonut/graphql-codegen";
import { Presenter } from "./Presenter";

export type ContainerProps = {
  id: number;
  name: string;
};
export const Container = ({ id, name }: ContainerProps) => {
  const [, editCategoryMutationExecute] = useEditCategoryMutation();
  const onEditCategoryClickHandler = async () => {
    await editCategoryMutationExecute({
      id,
      categoryInput: { name },
    });
  };
  return <Presenter onEditCategoryClickHandler={onEditCategoryClickHandler} />;
};
