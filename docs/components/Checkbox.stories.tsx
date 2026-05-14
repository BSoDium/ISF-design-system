import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Checkbox, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    color: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'I agree to the terms and conditions',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Newsletter',
    description: 'Receive updates about ISF projects and events',
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: 'Select all',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    disabled: true,
  },
};

export const Colors: Story = {
  render: () => (
    <Stack>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Checkbox key={color} color={color} defaultChecked label={color} />
        ),
      )}
    </Stack>
  ),
};
