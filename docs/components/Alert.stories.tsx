import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Alert } from '@mantine/core';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      control: 'select',
      options: ['blue', 'green', 'yellow', 'red', 'deep-ocean', 'copper'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    color: 'blue',
    title: 'Information',
    children: 'Applications for the summer engineering mission are now open.',
  },
};

export const Success: Story = {
  args: {
    color: 'green',
    title: 'Success',
    children: 'Your registration has been confirmed. Welcome to the team!',
  },
};

export const Warning: Story = {
  args: {
    color: 'yellow',
    title: 'Attention',
    children: 'The deadline for project submissions is approaching. Please submit before Friday.',
  },
};

export const Error: Story = {
  args: {
    color: 'red',
    title: 'Error',
    children: 'Unable to process your request. Please try again later.',
  },
};

export const WithTitle: Story = {
  args: {
    color: 'deep-ocean',
    title: 'Project Update',
    children:
      'The water treatment facility in Madagascar has reached 75% completion. On track for delivery in Q3.',
  },
};

export const WithCloseButton: Story = {
  args: {
    color: 'copper',
    title: 'Reminder',
    withCloseButton: true,
    children: "Don't forget to submit your monthly activity report.",
  },
};
