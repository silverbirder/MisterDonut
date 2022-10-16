/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { useState } from "react";
import { Header } from "./Header";

type Component = typeof Header;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/Header",
  component: Header,
};

export default meta;

const Template: ComponentStory<Component> = () => {
  const [open, setOpen] = useState(true);
  return <Header open={open} toggleOpen={() => setOpen(!open)} />;
};

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
