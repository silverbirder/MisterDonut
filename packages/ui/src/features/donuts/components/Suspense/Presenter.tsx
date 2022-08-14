type PresenterProps = {
  fetching: boolean;
  error: Error | null;
  children: React.ReactNode;
};

export const Presenter = ({ fetching, error, children }: PresenterProps) => {
  if (fetching) {
    return <>Loading...</>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return <div>{children}</div>;
};
