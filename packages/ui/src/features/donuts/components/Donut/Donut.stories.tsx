import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Donut } from ".";

type Component = typeof Donut;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Donut",
  component: Donut,
};

export default meta;

const Template: ComponentStory<Component> = () => <Donut />;

export const Default = Template.bind({});
