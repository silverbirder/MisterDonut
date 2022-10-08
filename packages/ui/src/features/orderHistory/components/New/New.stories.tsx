/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { New, NewProps } from "./New";

type Component = typeof New;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "features/orderHistory/New",
  component: New,
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: NewProps) => (
  <New>{children}</New>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
