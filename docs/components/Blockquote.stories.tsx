import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Blockquote, Stack } from '@mantine/core';
import { QuoteDownIcon } from 'hugeicons-react';

const meta: Meta<typeof Blockquote> = {
  title: 'Components/Blockquote',
  component: Blockquote,
  argTypes: {
    color: {
      control: 'select',
      options: ['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children:
      'Engineering is not just about building things — it is about building a better world for everyone.',
  },
};

export const WithCite: Story = {
  args: {
    cite: '— Ingénieurs sans Frontières',
    children:
      'Sustainable development requires the collaboration of engineers, communities, and local partners working together with shared purpose.',
  },
};

export const Colors: Story = {
  render: () => (
    <Stack>
      {(['deep-ocean', 'copper', 'tidal-blue', 'golden-dune', 'midnight'] as const).map(
        (color) => (
          <Blockquote key={color} color={color} cite={`— ${color} accent`}>
            The strength of a community lies in the diversity and commitment of its members.
          </Blockquote>
        ),
      )}
    </Stack>
  ),
};

export const WithIcon: Story = {
  args: {
    icon: <QuoteDownIcon size={24} strokeWidth={1.5} />,
    color: 'copper',
    cite: '— ISF Annual Report',
    children:
      'In 2025, our volunteers contributed over 50,000 hours to sustainable development projects across 15 countries.',
  },
};
