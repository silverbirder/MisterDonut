import { client } from "./client";
import { MyQueryQuery, MyQuery } from "./generated/graphql";
import { readFileSync } from "fs";
const documents = readFileSync(
  "./graphql-client/documents/documents.graphql",
  "utf8"
);

export const getArticles = async (): Promise<MyQueryQuery | undefined> => {
  const { data } = await client.query<MyQueryQuery>(MyQuery).toPromise();
  return data;
};

// export const myAddDonut = async (): Promise<any> => {
//   const {} = await client.mutation<AddDonutMutationMutation>()
// }
