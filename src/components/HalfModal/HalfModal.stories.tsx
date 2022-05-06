import { useState } from 'react';

import { Story } from '@storybook/react';

import HalfModal, { HalfModalProps } from '.';

const Template: Story<HalfModalProps> = ({ ...args }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <HalfModal
        {...args}
        isOpen={isOpen}
        onCloseModal={() => setIsOpen(false)}
      />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

export default {
  title: 'HalfModal',
  component: Default,
  argTypes: {},
};
