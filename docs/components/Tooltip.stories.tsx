import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tooltip, Button, Group } from '@mantine/core';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    color: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    label: 'Tooltip text',
    children: <Button>Hover me</Button>,
  },
};

export const WithArrow: Story = {
  args: {
    label: 'Tooltip with arrow',
    withArrow: true,
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <Group justify="center" p="xl">
      {(['top', 'right', 'bottom', 'left'] as const).map((position) => (
        <Tooltip key={position} label={`Tooltip on ${position}`} position={position} withArrow>
          <Button variant="outline">{position}</Button>
        </Tooltip>
      ))}
    </Group>
  ),
};

export const Colors: Story = {
  render: () => (
    <Group>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Tooltip key={color} label={color} color={color} withArrow>
            <Button variant="light" color={color}>
              {color}
            </Button>
          </Tooltip>
        ),
      )}
    </Group>
  ),
};

export const Multiline: Story = {
  args: {
    label:
      'This is a longer tooltip that spans multiple lines to provide additional context and information.',
    multiline: true,
    w: 220,
    withArrow: true,
    children: <Button>Hover for details</Button>,
  },
};
