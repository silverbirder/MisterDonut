/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { MainListItems } from "./ListItems";

type Component = typeof MainListItems;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/MainListItems",
  component: MainListItems,
};

export default meta;

const Template: ComponentStory<Component> = () => <MainListItems />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
