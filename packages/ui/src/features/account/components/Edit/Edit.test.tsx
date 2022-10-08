import { render } from "@testing-library/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "./Edit.stories";

const { Default } = composeStories(stories);
test("renders", () => {
  render(<Default />);
  expect(1).toBe(1);
});
