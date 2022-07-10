import { ApolloServer, Config, gql } from "apollo-server-micro";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import Cors from "micro-cors";

const cors = Cors();

export const config = {
  api: {
    bodyParser: false,
  },
};

const typeDefs: Config["typeDefs"] = gql`
  type Article {
    id: Int
    title: String
    content: String
  }

  type Query {
    getArticle(id: Int): Article
    getArticles: [Article]
  }
`;

const DB = {
  articles: [
    { id: 1, title: "foo", content: "foooooooooooooo" },
    { id: 2, title: "bar", content: "baaaaaaaaaaaaaa" },
  ],
};

export const resolvers: Config["resolvers"] = {
  Query: {
    getArticle: (_, { id }: { id: number }) => {
      const articles = DB.articles?.filter((a) => a.id === id);
      return articles ? articles[0] : [];
    },
    getArticles: () => DB.articles,
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default cors(async (req: MicroRequest, res: ServerResponse) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});
