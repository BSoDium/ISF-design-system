import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['filled', 'outline', 'light', 'subtle', 'transparent'],
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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Light',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Transparent',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftSection: '⬇',
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next',
    rightSection: '→',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Sizes: Story = {
  render: () => (
    <Group>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
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
            <Button color={color} variant="filled">
              {color}
            </Button>
            <Button color={color} variant="outline">
              {color}
            </Button>
            <Button color={color} variant="light">
              {color}
            </Button>
          </Group>
        ),
      )}
    </Stack>
  ),
};
