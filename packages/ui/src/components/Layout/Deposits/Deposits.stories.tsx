/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Deposits } from "./Deposits";

type Component = typeof Deposits;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Deposits",
  component: Deposits,
};

export default meta;

const Template: ComponentStory<Component> = () => <Deposits />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
