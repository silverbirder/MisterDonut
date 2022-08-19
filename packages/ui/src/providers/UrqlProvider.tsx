import { Provider, RequestPolicy } from "urql";
import { createUrqlClient } from "../lib";

type Props = {
  children: React.ReactNode;
  requestPolicy?: RequestPolicy;
};

export const UrqlProvider = ({ children, requestPolicy }: Props) => (
  <Provider value={createUrqlClient(requestPolicy)}>{children}</Provider>
);
