import { client } from "./client";
import {
  MyQueryQuery,
  MyQuery,
  AddDonutMutation,
  AddDonutMutationMutation,
  DonutSubscribe,
  DonutSubscribeSubscription,
} from "./generated/graphql";

export const getArticles = async (): Promise<MyQueryQuery | undefined> => {
  const { data } = await client.query<MyQueryQuery>(MyQuery).toPromise();
  return data;
};

export const myAddDonut = async (): Promise<void> => {
  await client.mutation<AddDonutMutationMutation>(AddDonutMutation).toPromise();
};

export const subs = async (): Promise<void> => {
  const res = await client.subscription<DonutSubscribeSubscription>(
    DonutSubscribe
  );
};
