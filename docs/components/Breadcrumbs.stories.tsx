import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Breadcrumbs, Anchor } from '@mantine/core';

const items = [
  { title: 'Home', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'Water Access', href: '#' },
];

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  render: () => (
    <Breadcrumbs>
      {items.map((item) => (
        <Anchor href={item.href} key={item.title}>
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  ),
};

export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumbs separator="→">
      {items.map((item) => (
        <Anchor href={item.href} key={item.title}>
          {item.title}
        </Anchor>
      ))}
    </Breadcrumbs>
  ),
};
