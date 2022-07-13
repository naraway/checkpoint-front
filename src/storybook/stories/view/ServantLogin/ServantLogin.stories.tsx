import * as React from 'react';
import { ServantLogin } from '@nara-way/checkpoint';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'ServantLogin',
  component: ServantLogin,
} as ComponentMeta<typeof ServantLogin>;

const Template: ComponentStory<typeof ServantLogin> = (args) => (
  <ServantLogin {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Servant Login',
  description: 'Please login to use service.',
  onSuccess: () => { alert('Login Success'); },
};
