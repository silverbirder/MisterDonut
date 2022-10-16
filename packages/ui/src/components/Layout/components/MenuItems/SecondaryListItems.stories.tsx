/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { SecondaryListItems } from "./MenuItems";

type Component = typeof SecondaryListItems;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/SideMenu/SecondaryListItems",
  component: SecondaryListItems,
};

export default meta;

const Template: ComponentStory<Component> = () => <SecondaryListItems />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
