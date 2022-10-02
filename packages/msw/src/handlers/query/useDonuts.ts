import { mockDonutsQuery } from "@misterdonut/graphql";
import { mockDonutsData } from "../../fixtures/donuts";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        edges: mockDonutsData,
      },
    })
  )
);
