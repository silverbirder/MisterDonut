/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Orders } from "./Orders";

type Component = typeof Orders;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Orders",
  component: Orders,
};

export default meta;

const Template: ComponentStory<Component> = () => <Orders />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
