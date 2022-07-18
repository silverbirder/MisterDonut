import { createClient, defaultExchanges, subscriptionExchange } from "urql";

export const client = createClient({
  url: "http://localhost:4000/graphql",
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription(operation) {
        const url = new URL("http://localhost:4000/graphql");
        url.searchParams.append("query", operation.query);
        if (operation.variables) {
          url.searchParams.append(
            "variables",
            JSON.stringify(operation.variables)
          );
        }
        return {
          subscribe: (sink) => {
            const eventsource = new EventSource(url.toString(), {
              withCredentials: true, // This is required for cookies
            });
            eventsource.onmessage = function (event) {
              const data = JSON.parse(event.data);
              sink.next(data);
              if (eventsource.readyState === 2) {
                sink.complete();
              }
            };
            eventsource.onerror = function (error) {
              sink.error(error);
            };
            return {
              unsubscribe: () => eventsource.close(),
            };
          },
        };
      },
    }),
  ],
});
