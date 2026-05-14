import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Badge, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline', 'dot'],
    },
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
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: 'Active',
  },
};

export const Sizes: Story = {
  render: () => (
    <Group>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Badge key={size} size={size}>
          {size}
        </Badge>
      ))}
    </Group>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Group key={color}>
            <Badge color={color} variant="filled">
              {color}
            </Badge>
            <Badge color={color} variant="light">
              {color}
            </Badge>
            <Badge color={color} variant="outline">
              {color}
            </Badge>
          </Group>
        ),
      )}
    </Stack>
  ),
};
