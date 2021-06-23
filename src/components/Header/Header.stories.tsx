import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Story, Meta } from '@storybook/react';

import Header, { HeaderProps } from './Header';

export default {
  title: 'components/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <BrowserRouter><Header {...args} /></BrowserRouter>;

export const EmptyCart = Template.bind({});
EmptyCart.args = {
  itemsCount: 0
};

export const FilledCart = Template.bind({});
FilledCart.args = {
  itemsCount: 1
};
