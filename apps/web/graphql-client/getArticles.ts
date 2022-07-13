import { client } from "./client";
import { MyQueryQuery } from "./generated/graphql";
import { readFileSync } from "fs";
const documents = readFileSync("./graphql-client/documents/documents.graphql", "utf8");

export const getArticles = async (): Promise<MyQueryQuery | undefined> => {
  const { data } = await client.query<MyQueryQuery>(documents).toPromise();
  return data;
};
