import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Select } from '@mantine/core';

const sampleData = [
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'es', label: 'Spain' },
  { value: 'it', label: 'Italy' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'pt', label: 'Portugal' },
  { value: 'nl', label: 'Netherlands' },
  { value: 'be', label: 'Belgium' },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  args: {
    data: sampleData,
    placeholder: 'Select a country',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: 'Country',
  },
};

export const Searchable: Story = {
  args: {
    label: 'Country',
    searchable: true,
  },
};

export const Clearable: Story = {
  args: {
    label: 'Country',
    clearable: true,
    value: 'fr',
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: 'Please select a country',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Country',
    disabled: true,
    value: 'fr',
  },
};
