import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Textarea } from '@mantine/core';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: 'Write something…',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Write your message here…',
  },
};

export const AutoSize: Story = {
  args: {
    label: 'Auto-sizing textarea',
    placeholder: 'This textarea will grow as you type…',
    autosize: true,
    minRows: 2,
    maxRows: 6,
  },
};

export const WithError: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Write your message here…',
    error: 'Message is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Write your message here…',
    disabled: true,
  },
};
