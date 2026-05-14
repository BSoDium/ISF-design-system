import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ArticlePage } from './ArticlePage';

const meta: Meta<typeof ArticlePage> = {
  title: 'Pages/Article',
  component: ArticlePage,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof ArticlePage>;

export const Default: Story = {};

export const DarkMode: Story = {
  globals: { scheme: 'dark' },
};
