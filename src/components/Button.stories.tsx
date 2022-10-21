import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Create account',
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Update: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: (
      <Button className='py-3 px-4 rounded bg-gold-900 hover:bg-gold-100 font-semibold text-white hover:text-black text-sm w-full transition-colors focus:ring-2 ring-brown-700'>
        Update
      </Button>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    }
  },
};