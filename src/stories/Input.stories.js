// src/stories/Input.stories.js
import React, { useState } from 'react';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'password', 'number'] },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');
  return (
    <Input
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const TextInput = Template.bind({});
TextInput.args = {
  label: 'Text Input',
  placeholder: 'Enter some text...',
  type: 'text',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: 'Password Input',
  type: 'password',
  placeholder: 'Enter your password',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: 'Disabled Input',
  disabled: true,
};
