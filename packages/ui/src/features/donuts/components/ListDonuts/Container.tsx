// import { ChangeEvent, useState } from "react";
// import { Suspense } from "../Suspense";
// import { Presenter } from "./Presenter";

import { useDonuts } from "../../hooks/useDonuts";

export type ContainerProps = {
  additionalDeleteClickHandler?: () => void;
};

export const Container = ({ additionalDeleteClickHandler }: ContainerProps) => {
  const { donuts, loading, error } = useDonuts();
  if (loading) <div>loading</div>;
  if (error) <div>error</div>;
  return (
    <ul>
      {donuts.map((donut) => (
        <li key={donut.name}>
          {donut.name}
          <img src={donut.img} />
        </li>
      ))}
    </ul>
  );
};
