import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Donuts } from ".";

type Component = typeof Donuts;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Donuts",
  component: Donuts,
};

export default meta;

const Template: ComponentStory<Component> = () => <Donuts />;

export const Default = Template.bind({});
