/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { SignUp } from "./SignUp";

type Component = typeof SignUp;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "features/account/SignUp",
  component: SignUp,
};

export default meta;

const Template: ComponentStory<Component> = () => <SignUp />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
