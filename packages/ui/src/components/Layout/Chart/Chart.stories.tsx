/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Chart } from "./Chart";

type Component = typeof Chart;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Chart",
  component: Chart,
};

export default meta;

const Template: ComponentStory<Component> = () => <Chart />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
