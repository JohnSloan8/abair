import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AbClickableCard from '@/components/AbClickableCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AbClickableCard',
  component: AbClickableCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} as ComponentMeta<typeof AbClickableCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AbClickableCard> = (args) => <AbClickableCard {...args} />;

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
