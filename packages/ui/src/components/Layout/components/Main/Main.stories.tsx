/* eslint-disable @typescript-eslint/await-thenable */
import { mockMyProfile, mockSignIn } from "@misterdonut/msw";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { User } from "@supabase/supabase-js";
import { SupabaseContext } from "@ui/providers";
import { useState, useContext, useEffect } from "react";
import { Main, MainProps } from "./Main";

type Component = typeof Main;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Main",
  component: Main,
  parameters: {
    msw: [mockMyProfile, mockSignIn],
  },
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: MainProps) => {
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const supabase = useContext(SupabaseContext);
  useEffect(() => {
    supabase?.auth
      .signIn({ email: "email", password: "password" })
      .then(({ user }) => setLoginUser(user))
      .catch(() => {});
  }, [supabase?.auth]);
  return loginUser ? <Main>{children}</Main> : <div>Wait Storybook ...</div>;
};

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
