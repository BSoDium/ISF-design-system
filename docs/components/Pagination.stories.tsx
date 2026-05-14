import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Pagination, Stack, Group } from '@mantine/core';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
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
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    total: 10,
  },
};

export const WithSiblings: Story = {
  args: {
    total: 20,
    siblings: 2,
    defaultValue: 10,
  },
};

export const Colors: Story = {
  render: () => (
    <Stack>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Pagination key={color} total={10} color={color} defaultValue={3} />
        ),
      )}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Pagination key={size} total={10} size={size} />
      ))}
    </Stack>
  ),
};

export const Disabled: Story = {
  args: {
    total: 10,
    disabled: true,
    defaultValue: 3,
  },
};
