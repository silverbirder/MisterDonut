/* eslint-disable @typescript-eslint/await-thenable */
import { mockMyProfile, mockSignIn } from "@misterdonut/msw";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { User } from "@supabase/supabase-js";
import { SupabaseContext } from "@ui/providers";
import { useState, useContext, useEffect } from "react";
import { Layout, LayoutProps } from "./Layout";

type Component = typeof Layout;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout",
  component: Layout,
  parameters: {
    msw: [mockMyProfile, mockSignIn],
  },
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: LayoutProps) => {
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const supabase = useContext(SupabaseContext);
  useEffect(() => {
    supabase?.auth
      .signIn({ email: "email", password: "password" })
      .then(({ user }) => setLoginUser(user))
      .catch(() => {});
  }, [supabase?.auth]);
  return loginUser ? (
    <Layout>{children}</Layout>
  ) : (
    <div>Wait Storybook ...</div>
  );
}

  

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
