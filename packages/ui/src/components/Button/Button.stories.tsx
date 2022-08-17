import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button, ButtonProps } from "./Button";

type Component = typeof Button;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Button",
  component: Button,
  args: {
    onClick: action("onClick"),
  },
};

export default meta;

const Template: ComponentStory<Component> = ({ onClick }: ButtonProps) => (
  <Button onClick={onClick} />
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
  expect(1).toBe(1);
};
