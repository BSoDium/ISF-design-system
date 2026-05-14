import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Divider, Stack, Group, Text, Box } from '@mantine/core';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {};

export const Vertical: Story = {
  render: () => (
    <Group>
      <Text>Left</Text>
      <Divider orientation="vertical" />
      <Text>Right</Text>
    </Group>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Stack>
      <Divider label="Section Title" />
      <Divider label="Left aligned" labelPosition="left" />
      <Divider label="Right aligned" labelPosition="right" />
    </Stack>
  ),
};

export const Dashed: Story = {
  args: {
    variant: 'dashed',
  },
};
