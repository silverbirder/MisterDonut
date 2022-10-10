/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Title, TitleProps } from "./Title";

type Component = typeof Title;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Title",
  component: Title,
  args: {
    children: <div>Hello</div>,
  },
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: TitleProps) => (
  <Title>{children}</Title>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
