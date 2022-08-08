import {
  useDeleteDonutMutation,
  useDonutsQuery,
} from "@misterdonut/graphql-codegen";
import { Suspense } from "react";

type ListDonutsProps = {
  onDeleteClickHandler: () => void;
  renderLink: (id: number) => React.ReactNode;
};

const ListDonutsInner = ({
  onDeleteClickHandler,
  renderLink,
}: ListDonutsProps) => {
  const [result] = useDonutsQuery();
  const [, executeMutation] = useDeleteDonutMutation();
  const onDeleteClick = (id: string) => {
    executeMutation({ id: Number(id) }).then(() => {
      onDeleteClickHandler();
    });
  };
  return (
    <>
      <ul>
        {result.data?.donuts?.map((d: any) => {
          return (
            d && (
              <li key={d.id}>
                <span>
                  {renderLink(d.id)}
                  <button onClick={() => onDeleteClick(d.id)}>Delete</button>
                </span>
                <span>
                  {d.name} {d.price}円
                </span>
              </li>
            )
          );
        })}
      </ul>
    </>
  );
};

export const ListDonuts = (props: ListDonutsProps) => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <ListDonutsInner {...props} />
    </Suspense>
  );
};
