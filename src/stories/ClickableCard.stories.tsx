import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ClickableCard from '@/components/ClickableCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ClickableCard',
  component: ClickableCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof ClickableCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ClickableCard> = (args) => <ClickableCard {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  path: '/speech-synthesis',
  title: 'Speech Synthesis',
  description: 'Listen to our voices in the 3 main Irish dialects',
  variation: 'core',
};

export const Secondary = Template.bind({});
Secondary.args = {
  path: '/speech-recognition',
  title: 'Speech Recognition',
  description: 'Speak in Irish and see your words as text',
  variation: 'app',
};
