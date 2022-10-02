/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useMyProfileQuery } from "@misterdonut/graphql";
import { Avatar } from "@mui/material";
import { SupabaseContext } from "@ui/providers";
import { useContext } from "react";

export const Account = () => {
  const supabase = useContext(SupabaseContext);
  const user = supabase?.auth.user();
  if (!user) {
    return <>not found</>;
  }
  const { data, loading } = useMyProfileQuery({
    variables: { uid: user.id },
  });
  if (loading) {
    return <>Loading...</>;
  }
  const username = data?.profileCollection?.edges[0].node.username;
  const avatarUrl = data?.profileCollection?.edges[0].node.avatar_url;
  return <Avatar alt={username || ""} src={avatarUrl || ""} />;
};
