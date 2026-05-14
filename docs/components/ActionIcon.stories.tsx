import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ActionIcon, Group, Stack } from '@mantine/core';
import { StarIcon, Cancel01Icon } from 'hugeicons-react';

const meta: Meta<typeof ActionIcon> = {
  title: 'Components/ActionIcon',
  component: ActionIcon,
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
type Story = StoryObj<typeof ActionIcon>;

export const Default: Story = {
  args: {
    children: <StarIcon size={18} strokeWidth={1.5} />,
    'aria-label': 'Star',
  },
};

export const Variants: Story = {
  render: () => (
    <Group>
      {(['filled', 'outline', 'light', 'subtle', 'transparent'] as const).map((variant) => (
        <ActionIcon key={variant} variant={variant} aria-label={variant}>
          <StarIcon size={18} strokeWidth={1.5} />
        </ActionIcon>
      ))}
    </Group>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Group>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <ActionIcon key={size} size={size} aria-label={`Size ${size}`}>
          <StarIcon size={18} strokeWidth={1.5} />
        </ActionIcon>
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
            <ActionIcon color={color} variant="filled" aria-label={color}>
              <StarIcon size={18} strokeWidth={1.5} />
            </ActionIcon>
            <ActionIcon color={color} variant="outline" aria-label={color}>
              <StarIcon size={18} strokeWidth={1.5} />
            </ActionIcon>
            <ActionIcon color={color} variant="light" aria-label={color}>
              <StarIcon size={18} strokeWidth={1.5} />
            </ActionIcon>
          </Group>
        ),
      )}
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    children: <Cancel01Icon size={18} strokeWidth={1.5} />,
    disabled: true,
    'aria-label': 'Close (disabled)',
  },
};

export const Loading: Story = {
  args: {
    children: <StarIcon size={18} strokeWidth={1.5} />,
    loading: true,
    'aria-label': 'Loading',
  },
};
