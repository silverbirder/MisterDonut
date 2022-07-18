import { EventEmitter } from "events";
// import { createPubSub } from "@graphql-yoga/node";
// const pubSub = createPubSub();

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
      description: "大人気のもちもち食感！",
      category_id: 1,
    },
    {
      id: 2,
      name: "ポン・デ・黒糖",
      price: 120,
      description: "黒米や黒豆入りの黒五黒糖シュガーで、あっさり仕上げ。",
      category_id: 1,
    },
  ],
  categories: [{ id: 1, name: "ポン・デ・リング" }],
};

const myEmitter = new EventEmitter();

const asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      async next() {
        const input = await new Promise((resolve, reject) => {
          myEmitter.addListener("myEmit", (input) => {
            resolve(input);
          });
        });
        return Promise.resolve({ value: input, done: false });
      },
    };
  },
};

export const resolvers = {
  Query: {
    getArticle: (_: any, { id }: { id: number }) => {
      const articles = DB.articles?.filter((a) => a.id === id);
      return articles ? articles[0] : [];
    },
    getArticles: () => DB.articles,
    getDonut: (_: any, { id }: { id: number }) => {
      const donuts = DB.donuts.filter((d) => d.id === id);
      if (!donuts) {
        return null;
      }
      const donut = donuts[0];
      const categories = DB.categories.filter(
        (c) => c.id === donut.category_id
      );
      const category = categories ? categories[0] : null;
      //@ts-ignore
      donut["category"] = category;
      return donut;
    },
  },
  Mutation: {
    addDonut: (_: any, { input }: { input: any }) => {
      myEmitter.emit("myEmit", input);
      // pubSub.publish("donuts", input);
      return "aaa";
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
      subscribe: () => asyncIterable,
      // subscribe: () => pubSub.subscribe("donuts"),
      resolve: (payload: any) => payload,
    },
  },
};
