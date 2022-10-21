import { TextInput, TextInputRootProps } from "./TextInput";
import { Meta, StoryObj } from '@storybook/react';
import { Envelope, LockKey } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address"/>
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const LockIncon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <LockKey />
      </TextInput.Icon>,
      <TextInput.Input type="password" placeholder="********"/>
    ],
  },
};

export const WithouIncon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder="Type your e-mail address"/>
  }
};
