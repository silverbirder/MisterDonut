/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { List, ListProps } from "./List";

type Component = typeof List;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "features/orderHistory/List",
  component: List,
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: ListProps) => (
  <List>{children}</List>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
