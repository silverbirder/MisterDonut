import { ApolloError } from "@apollo/client";
import { useMyProfileQuery } from "@misterdonut/graphql";
import { Profile } from "../types";

export type UseLayoutArgs = {
    uid: string;
};
export type UseLayoutReturn = {
  profile: Profile | null;
  loading: boolean;
  error: ApolloError | undefined;
};

export const useLayout = ({ uid }: UseLayoutArgs): UseLayoutReturn => {
  const { data, error, loading } = useMyProfileQuery({ variables: { uid } });
  const profiles: Profile[] =
    data?.profileCollection?.edges.map((edge) => ({
      avatarUrl: edge.node.avatar_url || "",
      username: edge.node.username || "",
      id: (edge.node.id as string) || "",
    })) || [];

  return {
    profile: profiles.length === 1 ? profiles[0] : null,
    loading,
    error,
  };
};