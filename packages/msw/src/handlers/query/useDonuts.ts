import { mockDonutsQuery } from "@misterdonut/graphql-codegen";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        edges: [{ node: { id: 1, name: "", img: "" } }],
      },
    })
  )
);
