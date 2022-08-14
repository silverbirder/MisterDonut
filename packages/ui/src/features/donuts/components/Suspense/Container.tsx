import { Presenter } from "./Presenter";

export type ContainerProps = {
  fetching: boolean;
  error: Error | null;
  children: React.ReactNode;
};
export const Container = ({ fetching, error, children }: ContainerProps) => (
  <Presenter fetching={fetching} error={error}>
    {children}
  </Presenter>
);
