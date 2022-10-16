/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { useState } from "react";
import { Header, HeaderProps } from "./Header";

type Component = typeof Header;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Header",
  component: Header,
  args: {
    profile: {
      id: "id",
      username: "username",
      avatarUrl:
        "https://www.gravatar.com/avatar/3ff690942a6e16e08d2fc2ecb9e0af6c?d=mp",
    },
    logoutHandler: () => {},
  },
};

export default meta;

const Template: ComponentStory<Component> = (props: HeaderProps) => {
  const [open, setOpen] = useState(true);
  return <Header {...props} open={open} toggleOpen={() => setOpen(!open)} />;
};

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};

export const NotLogin = Template.bind({});
NotLogin.args = {
  profile: null,
};

NotLogin.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
