import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { expect } from "@storybook/jest"; // eslint-disable-line import/no-extraneous-dependencies
import { action } from "@storybook/addon-actions";
import { within, userEvent } from "@storybook/testing-library";
import { graphql } from "msw"; // eslint-disable-line import/no-extraneous-dependencies
import { DonutQuery, DonutQueryVariables } from "@misterdonut/graphql-codegen"; // eslint-disable-line import/no-extraneous-dependencies
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
  msw: {
    handlers: [
      graphql.query<DonutQuery, DonutQueryVariables>(
        "donut",
        (req, res, ctx) => {
          const { id } = req.variables;
          return res(
            ctx.data({
              donut: {
                id: id ? id.toString() : "",
                name: "ドーナッツ",
                price: 100,
              },
            })
          );
        }
      ),
    ],
  },
};

Default.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
  expect(1).toBe(1);
};
