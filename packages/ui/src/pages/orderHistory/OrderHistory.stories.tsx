/* eslint-disable @typescript-eslint/await-thenable */
import { mockMyProfile, mockSignIn } from "@misterdonut/msw";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { User } from "@supabase/supabase-js";
import { SupabaseContext } from "@ui/providers";
import { useState, useContext, useEffect } from "react";
import { OrderHistory } from "./OrderHistory";

type Component = typeof OrderHistory;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "OrderHistory",
  component: OrderHistory,
  args: {},
  parameters: {
    msw: [mockMyProfile, mockSignIn],
  },
};

export default meta;

const Template: ComponentStory<Component> = () => {
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const supabase = useContext(SupabaseContext);
  useEffect(() => {
    supabase?.auth
      .signIn({ email: "email", password: "password" })
      .then(({ user }) => setLoginUser(user))
      .catch(() => {});
  }, [supabase?.auth]);
  return loginUser ? <OrderHistory /> : <div>Wait Storybook ...</div>;
};

export const Default = Template.bind({});
