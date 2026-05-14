import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Avatar, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'light', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const WithImage: Story = {
  args: {
    src: 'https://placehold.co/100x100',
    alt: 'User avatar',
  },
};

export const WithInitials: Story = {
  render: () => (
    <Group>
      <Avatar color="deep-ocean">AM</Avatar>
      <Avatar color="copper">BD</Avatar>
      <Avatar color="tidal-blue">CB</Avatar>
      <Avatar color="golden-dune">DP</Avatar>
      <Avatar color="midnight">ER</Avatar>
    </Group>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Group>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Avatar key={size} size={size} color="deep-ocean">
          {size.toUpperCase()}
        </Avatar>
      ))}
    </Group>
  ),
};

export const Colors: Story = {
  render: () => (
    <Group>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Avatar key={color} color={color}>
            ISF
          </Avatar>
        ),
      )}
    </Group>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://placehold.co/100x100" />
      <Avatar color="deep-ocean">AM</Avatar>
      <Avatar color="copper">BD</Avatar>
      <Avatar color="tidal-blue">+5</Avatar>
    </Avatar.Group>
  ),
};
