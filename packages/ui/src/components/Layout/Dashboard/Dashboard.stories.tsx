/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Dashboard } from "./Dashboard";

type Component = typeof Dashboard;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Dashboard",
  component: Dashboard,
};

export default meta;

const Template: ComponentStory<Component> = () => <Dashboard />;

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
