import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { LogoShowcase } from './LogoShowcase';

const meta = {
  component: LogoShowcase,
  tags: ['ai-generated'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof LogoShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
