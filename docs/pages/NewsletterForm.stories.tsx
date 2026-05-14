import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { NewsletterForm } from './NewsletterForm';

const meta: Meta<typeof NewsletterForm> = {
  title: 'Pages/Newsletter Form',
  component: NewsletterForm,
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof NewsletterForm>;

export const Default: Story = {};

export const Filled: Story = {
  args: {
    initialValues: {
      firstName: 'Marie',
      email: 'marie.dupont@exemple.fr',
    },
  },
};
