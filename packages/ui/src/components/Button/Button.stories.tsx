import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { expect } from "@storybook/jest";
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import { mockDonuts } from "@misterdonut/msw";
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
Default.parameters = {
  msw: { handlers: [mockDonuts] },
};
Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
  expect(1).toBe(1);
};
