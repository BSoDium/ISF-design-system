import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Switch, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Dark mode',
  },
};

export const WithDescription: Story = {
  args: {
    label: 'Email notifications',
    description: 'Receive emails about project updates',
  },
};

export const Sizes: Story = {
  render: () => (
    <Group>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Switch key={size} size={size} label={size} defaultChecked />
      ))}
    </Group>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const Colors: Story = {
  render: () => (
    <Stack>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Switch key={color} color={color} defaultChecked label={color} />
        ),
      )}
    </Stack>
  ),
};
