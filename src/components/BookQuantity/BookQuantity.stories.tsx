import React from 'react';
import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import BookQuantity, { BookQuantityProps } from './BookQuantity';

export default {
  title: 'components/BookQuantity',
  component: BookQuantity
} as Meta;

const actionsData = {
  addToCart: action('addToCart'),
  removeFromCart: action('removeFromCart'),
};

const Template: Story<BookQuantityProps> = args => <BookQuantity {...args} />

export const Default = Template.bind({});
Default.args = {
  quantity: 0,
  addToCart: actionsData.addToCart,
  removeFromCart: actionsData.removeFromCart,
};

export const WithQuantity = Template.bind({});
WithQuantity.args = {
  quantity: 2,
  addToCart: actionsData.addToCart,
  removeFromCart: actionsData.removeFromCart
}
