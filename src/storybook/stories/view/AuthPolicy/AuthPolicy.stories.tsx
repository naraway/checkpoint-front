import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AuthPolicyForm } from '../../../../comp';

export default {
  title: 'AuthPolicy',
  component: AuthPolicyForm,
} as ComponentMeta<typeof AuthPolicyForm>;

const Template: ComponentStory<typeof AuthPolicyForm> = (args) => <AuthPolicyForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pavilionId: '1:1:1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  pavilionId: '1:1:1',
}
