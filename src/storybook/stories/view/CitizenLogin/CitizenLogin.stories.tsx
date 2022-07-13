import * as React from 'react';
import { CitizenLogin } from '@nara-way/checkpoint';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'CitizenLogin',
  component: CitizenLogin,
} as ComponentMeta<typeof CitizenLogin>;

const Template: ComponentStory<typeof CitizenLogin> = (args) => (
  <CitizenLogin {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Login',
  description: 'Please login to use service.',
  pavilionId: '1:1:1',
  onSuccess: () => { alert('Login Success'); },
};
