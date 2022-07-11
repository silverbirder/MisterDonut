import { createServer } from "@graphql-yoga/node";
import { resolvers } from "../../apollo/resolvers";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";
import { readFileSync } from "fs";

const main = async (req: MicroRequest, res: ServerResponse) => {
  const typeDefs = readFileSync("./apollo/schema.graphql", "utf8");
  const server = createServer({
    schema: {
      typeDefs,
      resolvers,
    },
    endpoint: "/api/graphql2",
  })(req, res);
  return server;
};
export default main;
