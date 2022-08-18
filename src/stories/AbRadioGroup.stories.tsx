import React from 'react';
import { RecoilRoot } from 'recoil';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import AbRadioGroup from '@/components/AbRadioGroup';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AbRadioGroup',
  component: AbRadioGroup,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  decorators: [
    (Story) => (
      <RecoilRoot>
        <Story />
      </RecoilRoot>
    ),
  ],
} as ComponentMeta<typeof AbRadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AbRadioGroup> = (args) => <AbRadioGroup {...args} />;

export const Gender = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Gender.args = {
  name: 'gender',
};

export const Pitch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pitch.args = {
  name: 'pitch',
};

export const Speed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Speed.args = {
  name: 'speed',
};

export const Mode = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Mode.args = {
  name: 'mode',
};
