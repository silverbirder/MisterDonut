import { mockDonutsQuery } from "@misterdonut/graphql-codegen";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        edges: [
          {
            node: {
              id: "1",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "2",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "3",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "4",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "5",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "4",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "6",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "7",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "8",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "9",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
          {
            node: {
              id: "10",
              name: "スミジン　ババリアンクリーム",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
            },
          },
        ],
      },
    })
  )
);
