/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { SignIn, SignInProps } from "./SignIn";

type Component = typeof SignIn;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "features/account/SignIn",
  component: SignIn,
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: SignInProps) => (
  <SignIn>{children}</SignIn>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
