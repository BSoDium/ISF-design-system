import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';
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

export const ValidationErrors: Story = {
  tags: ['ai-generated'],
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: /s.inscrire/i }));
    await expect(await canvas.findByText(/le prénom est requis/i)).toBeVisible();
    await expect(await canvas.findByText(/adresse e-mail invalide/i)).toBeVisible();
  },
};

// Verifies that MantineProvider CSS variables resolve: the copper filled button
// background (#c8591d) only appears when Mantine's CSS and the ISF theme are loaded.
export const CssCheck: Story = {
  tags: ['ai-generated'],
  play: async ({ canvas }) => {
    const btn = canvas.getByRole('button', { name: /s.inscrire/i });
    // copper[7] = #c8591d = rgb(200, 89, 29)
    await expect(getComputedStyle(btn).backgroundColor).toBe('rgb(200, 89, 29)');
  },
};
