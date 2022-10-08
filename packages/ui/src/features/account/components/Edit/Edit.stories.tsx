/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Edit, EditProps } from "./Edit";

type Component = typeof Edit;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "features/account/Edit",
  component: Edit,
};

export default meta;

const Template: ComponentStory<Component> = ({ children }: EditProps) => (
  <Edit>{children}</Edit>
);

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
