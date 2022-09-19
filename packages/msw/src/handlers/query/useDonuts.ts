import { mockDonutsQuery } from "@misterdonut/graphql-codegen";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        edges: [
          {
            node: {
              id: 1,
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
        ],
      },
    })
  )
);
