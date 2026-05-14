import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Anchor, Group, Stack } from '@mantine/core';

const meta: Meta<typeof Anchor> = {
  title: 'Components/Anchor',
  component: Anchor,
  argTypes: {
    underline: {
      control: 'select',
      options: ['always', 'hover', 'never'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    c: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Anchor>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'Visit ISF website',
  },
};

export const Underline: Story = {
  render: () => (
    <Stack>
      <Anchor href="#" underline="always">
        Always underlined
      </Anchor>
      <Anchor href="#" underline="hover">
        Underlined on hover
      </Anchor>
      <Anchor href="#" underline="never">
        Never underlined
      </Anchor>
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Group>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Anchor key={color} href="#" c={color}>
            {color}
          </Anchor>
        ),
      )}
    </Group>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Anchor key={size} href="#" size={size}>
          Size {size}
        </Anchor>
      ))}
    </Stack>
  ),
};
