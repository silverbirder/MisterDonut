import { mockDonutsQuery } from "@misterdonut/graphql-codegen";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      donuts: [],
    })
  )
);
