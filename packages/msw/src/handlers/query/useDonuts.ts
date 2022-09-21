import { mockDonutsQuery } from "@misterdonut/graphql-codegen";

export const mockDonuts = mockDonutsQuery((_, res, ctx) =>
  res(
    ctx.delay(300),
    ctx.data({
      misterdonutCollection: {
        __typename: "misterdonutConnection",
        edges: [
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "3",
              category: "ドリンク",
              name: "ミルクシェイク　チョコレート",
              price: "0",
              description: "",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00078.jpg",
              created_at: "1978-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "4",
              category: "ドーナツ",
              name: "スミジン　ババリアンクリーム",
              price: "150",
              description:
                "サクッとした食感の生地にカスタード風味のクリームを詰めた、ひと口サイズのドーナツ。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00095.jpg",
              created_at: "1980-03-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "5",
              category: "ドーナツ",
              name: "スミジン　ストロベリー",
              price: "150",
              description:
                "サクッとした食感の生地にストロベリークリームを詰めた、ひと口サイズのドーナツ。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00096.jpg",
              created_at: "1980-03-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "6",
              category: "ドーナツ",
              name: "ドーナツホール",
              price: "150",
              description: "ひと口サイズのケーキタイプのドーナツ。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00097.jpg",
              created_at: "1980-07-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "7",
              category: "ドーナツ",
              name: "スミジン　チョコレート",
              price: "320",
              description:
                "サクッとした食感の生地にチョコレートクリームを詰めた、ひと口サイズのドーナツ。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00098.jpg",
              created_at: "1980-10-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "8",
              category: "ドーナツ",
              name: "ホールシング",
              price: "80",
              description:
                "小型のリングドーナツをスティックに刺し、カラフルなデコレーションで仕上げました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00099.jpg",
              created_at: "1980-12-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "9",
              category: "ドーナツ",
              name: "チョコレートスティック",
              price: "0",
              description:
                "スティックドーナツに、チョコレートクリームを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00101",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "10",
              category: "ドーナツ",
              name: "ストロベリースティック",
              price: "0",
              description:
                "スティックドーナツに、ストロベリーフィリングを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00102",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "11",
              category: "ドーナツ",
              name: "チョコレートフレンチ",
              price: "0",
              description: "フレンチクルーラーにチョコをコーティング。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00103.jpg",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "12",
              category: "ドーナツ",
              name: "バニラフレンチ",
              price: "0",
              description: "フレンチクルーラーにバニラディップをコーティング。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00104",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "13",
              category: "パイ・マフィン",
              name: "レモンパイ",
              price: "0",
              description:
                "練りパイタイプの生地にレモンクリームを挟んで揚げました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00106",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "14",
              category: "パイ・マフィン",
              name: "マロンパイ",
              price: "0",
              description:
                "練りパイタイプの生地にマロンクリームを挟んで揚げました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00107",
              created_at: "1980-01-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "15",
              category: "ドーナツ",
              name: "レモン",
              price: "40",
              description:
                "口どけのよいイースト生地に、レモン果汁入りのレモンクリームを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00010.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "16",
              category: "ドーナツ",
              name: "ブルーベリー",
              price: "40",
              description:
                "口どけのよいイースト生地に、果肉入りのブルーベリークリームを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00011",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "17",
              category: "ドーナツ",
              name: "ブラックラズベリー",
              price: "40",
              description:
                "口どけのよいイースト生地に、果肉入りのブラックラズベリークリームを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00015",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "18",
              category: "ドーナツ",
              name: "パイナップル",
              price: "40",
              description:
                "口どけのよいイースト生地に、パイナップルクリームを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00013",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "19",
              category: "ドーナツ",
              name: "オレンジマーマレード",
              price: "40",
              description:
                "口どけのよいイースト生地に、オレンジマーマレードジャムを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00005.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "20",
              category: "ドーナツ",
              name: "アップルラズベリー",
              price: "40",
              description:
                "口どけのよいイースト生地に、木いちごとりんごをミックスしたジャムを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00012.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "21",
              category: "ドーナツ",
              name: "グレープ",
              price: "40",
              description:
                "口どけのよいイースト生地に、グレープ果汁を使用したグレープゼリージャムを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00049.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "22",
              category: "ドーナツ",
              name: "アプリコット",
              price: "40",
              description:
                "口どけのよいイースト生地に、アプリコットジャムを詰めました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/no_image.jpg?00055",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "23",
              category: "ドーナツ",
              name: "ツイスト",
              price: "50",
              description:
                "ハニーディップより少し歯ごたえのあるイースト生地をグレーズでコーティング。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00051.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "24",
              category: "ドーナツ",
              name: "コーヒーロール",
              price: "50",
              description:
                "歯ごたえのあるイースト生地に、香りのよいシナモンを巻き込みました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00052.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "25",
              category: "ドーナツ",
              name: "ホームカット",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地をフライしただけのプレーンなドーナツです。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00019.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "26",
              category: "ドーナツ",
              name: "ハニードゥ",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、ハチミツが香るグレーズをコーティング。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00020.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "27",
              category: "ドーナツ",
              name: "パウダード",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、パウダーシュガーをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00021.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "28",
              category: "ドーナツ",
              name: "シナモン",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、シナモンをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00022.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "29",
              category: "ドーナツ",
              name: "ピーナツ",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、香ばしく焙煎したピーナツをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00023.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "30",
              category: "ドーナツ",
              name: "ココナツ",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、歯ざわりのよいホワイトココナツをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00024.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "31",
              category: "ドーナツ",
              name: "トーステッドココナツ",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、焙煎したココナツをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00025.jpg",
              created_at: "1971-04-01",
            },
          },
          {
            __typename: "misterdonutEdge",
            node: {
              __typename: "misterdonut",
              id: "32",
              category: "ドーナツ",
              name: "バタークランチ",
              price: "40",
              description:
                "ベーシックなケーキタイプの生地に、バタークランチをまぶしました。",
              img: "https://www.misterdonut.jp/enjoy/zukan/donut/img/00028.jpg",
              created_at: "1971-04-01",
            },
          },
        ],
      },
    })
  )
);
