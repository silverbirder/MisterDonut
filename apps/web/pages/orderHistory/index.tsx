import dynamic from "next/dynamic";

const OrderHistory = dynamic<unknown>(
  () => import("@misterdonut/ui/").then((module) => module.OrderHistory),
  { ssr: false, loading: () => <>Loading component...</> }
);

const OrderHistoryPage = () => <OrderHistory />;

export default OrderHistoryPage;
