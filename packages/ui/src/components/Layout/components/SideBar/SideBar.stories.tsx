/* eslint-disable @typescript-eslint/await-thenable */
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { useState } from "react";
import { SideBar } from "./SideBar";

type Component = typeof SideBar;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "Layout/SideBar",
  component: SideBar,
};

export default meta;

const Template: ComponentStory<Component> = () => {
  const [open, setOpen] = useState(true);
  return <SideBar open={open} toggleOpen={() => setOpen(!open)} />;
};

export const Default = Template.bind({});

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
};
