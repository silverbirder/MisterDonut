// import { EventEmitter } from "events";
import { createPubSub } from "@graphql-yoga/node";
const pubSub = createPubSub();

const DB = {
  articles: [
    { id: 1, title: "foo", content: "foooooooooooooo" },
    { id: 2, title: "bar", content: "baaaaaaaaaaaaaa" },
  ],
  donuts: [
    {
      id: 1,
      name: "ポン・デ・リング",
      price: 120,
    },
    {
      id: 2,
      name: "ポン・デ・黒糖",
      price: 120,
    },
  ],
};

// const myEmitter = new EventEmitter();

// const asyncIterable = {
//   [Symbol.asyncIterator]() {
//     return {
//       async next() {
//         const input = await new Promise((resolve, reject) => {
//           myEmitter.addListener("myEmit", (input) => {
//             resolve(input);
//           });
//         });
//         return Promise.resolve({ value: input, done: false });
//       },
//     };
//   },
// };

export const resolvers = {
  Query: {
    getArticle: (_: any, { id }: { id: number }) => {
      const articles = DB.articles?.filter((a) => a.id === id);
      return articles ? articles[0] : [];
    },
    getArticles: () => {
      return DB.articles;
    },
    getDonut: (_: any, { id }: { id: number }) => {
      const donuts = DB.donuts.filter((d) => d.id === id);
      if (!donuts) {
        return null;
      }
      const donut = donuts[0];
      return donut;
    },
    donuts: (_: any) => {
      return DB.donuts;
    },
  },
  Mutation: {
    addDonut: (_: any, { input }: { input: any }) => {
      // myEmitter.emit("myEmit", input);
      // pubSub.publish("addDonut", input);
      console.log({ input });
      const donut = {
        id: DB.donuts.length + 1,
        name: input.name,
        price: input.price,
      };
      DB.donuts.push(donut);
      return donut;
    },
  },
  Subscription: {
    countdown: {
      subscribe: async function* (_: any, { from }: { from: any }) {
        for (let i = from; i >= 0; i--) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          yield { countdown: i };
        }
      },
    },
    donut: {
      // subscribe: () => asyncIterable,
      subscribe: () => pubSub.subscribe("addDonut"),
      resolve: (payload: any) => payload,
    },
  },
};
