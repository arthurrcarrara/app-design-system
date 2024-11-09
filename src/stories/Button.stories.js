// src/stories/Button.stories.js
import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary Button',
  size: 'medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'Secondary Button',
  size: 'medium',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  size: 'medium',
  disabled: true,
};

export const WithCustomBackground = Template.bind({});
WithCustomBackground.args = {
  label: 'Button with Custom Background',
  size: 'medium',
  backgroundColor: '#ff6347',
  primary: true,
};
