/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Layout, LayoutProps } from "./Layout";

type Component = typeof Layout;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout",
  component: Layout,
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: LayoutProps) => (
  <Layout>{children}</Layout>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
