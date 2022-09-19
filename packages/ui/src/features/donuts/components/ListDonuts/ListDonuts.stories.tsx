import { mockDonuts } from "@misterdonut/msw";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ListDonuts } from ".";

type Component = typeof ListDonuts;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "ListDonuts",
  component: ListDonuts,
};

export default meta;

const Template: ComponentStory<Component> = () => <ListDonuts />;

export const Default = Template.bind({});

Default.parameters = {
  msw: { handlers: [mockDonuts] },
};
