import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Page from "./Page";
import * as HeaderStories from "../../components/Header/Header.stories";

export default {
  title: "Example/Page",
  component: Page,
} as Meta;

const Template: Story = () => <Page />;

export const Primary = Template.bind({});
Primary.args = {
  ...HeaderStories.Primary.args,
};
