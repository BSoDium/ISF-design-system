import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Paper, Text, Stack } from '@mantine/core';

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
  argTypes: {
    shadow: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

export const Default: Story = {
  args: {
    p: 'md',
    children: (
      <Text>
        Paper is the most basic UI component. Use it to create cards, dropdowns, modals, and other
        surfaces.
      </Text>
    ),
  },
};

export const WithShadow: Story = {
  render: () => (
    <Stack>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((shadow) => (
        <Paper key={shadow} shadow={shadow} p="md">
          <Text size="sm" fw={500}>
            Shadow: {shadow}
          </Text>
          <Text size="xs" c="dimmed">
            Elevation level for editorial card surfaces.
          </Text>
        </Paper>
      ))}
    </Stack>
  ),
};

export const WithRadius: Story = {
  render: () => (
    <Stack>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
        <Paper key={radius} radius={radius} p="md" withBorder>
          <Text size="sm">Radius: {radius}</Text>
        </Paper>
      ))}
    </Stack>
  ),
};

export const WithBorder: Story = {
  args: {
    withBorder: true,
    p: 'md',
    children: <Text>Paper with a border, useful for subtle content separation.</Text>,
  },
};

export const Nested: Story = {
  render: () => (
    <Paper shadow="md" p="lg" radius="md">
      <Text fw={500} mb="sm">
        Outer Paper
      </Text>
      <Paper withBorder p="md" radius="sm">
        <Text size="sm" fw={500} mb="xs">
          Inner Paper
        </Text>
        <Paper bg="var(--mantine-color-gray-light)" p="sm" radius="xs">
          <Text size="xs">Deeply nested content surface.</Text>
        </Paper>
      </Paper>
    </Paper>
  ),
};
