import { mockDonutsQuery } from "@misterdonut/graphql-codegen";
import { mockDonutsData } from "../../fixtures/donuts";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        edges: mockDonutsData.slice(0, 5),
      },
    })
  )
);
