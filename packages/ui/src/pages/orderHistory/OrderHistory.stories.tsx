/* eslint-disable @typescript-eslint/await-thenable */
import { mockMyProfile } from "@misterdonut/msw";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { OrderHistory } from "./OrderHistory";

type Component = typeof OrderHistory;
type Meta = ComponentMeta<Component>;

const meta: Meta = {
  title: "OrderHistory",
  component: OrderHistory,
  args: {},
  parameters: {
    msw: [mockMyProfile],
  },
};

export default meta;

const Template: ComponentStory<Component> = () => <OrderHistory />;

export const Default = Template.bind({});
