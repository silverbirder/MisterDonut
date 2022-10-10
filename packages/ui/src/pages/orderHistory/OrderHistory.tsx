/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  useInsertOrderHistoryMutation,
  useMyProfileQuery,
} from "@misterdonut/graphql";
import { Avatar } from "@mui/material";
import { SupabaseContext } from "@ui/providers";
import { useContext } from "react";

export const OrderHistory = () => {
  const supabase = useContext(SupabaseContext);
  const user = supabase?.auth.user();
  if (!user) {
    return <>not found</>;
  }
  const { data: profileData } = useMyProfileQuery({
    variables: { uid: user.id },
  });
  // if (profileLoading) {
  //   return <>profileLoading...</>;
  // }
  const username = profileData?.profileCollection?.edges[0].node.username;
  const userId = profileData?.profileCollection?.edges[0].node.id;
  const avatarUrl = profileData?.profileCollection?.edges[0].node.avatar_url;
  const [mutateFunction] = useInsertOrderHistoryMutation();
  const onClick = () => {
    mutateFunction({
      variables: {
        objects: [
          {
            profile_id: userId,
            order_date: "2022-09-01 10:00:00+09:00",
          },
        ],
      },
    }).catch(() => {});
  };
  return (
    <>
      <Avatar alt={username || ""} src={avatarUrl || ""} />
      <button onClick={onClick} type="button">
        Save
      </button>
    </>
  );
};
