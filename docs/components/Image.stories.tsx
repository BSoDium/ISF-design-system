import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Image, Text, Stack } from '@mantine/core';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  argTypes: {
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://placehold.co/600x400',
    alt: 'Placeholder image',
    style: { maxWidth: 400 },
  },
};

export const WithFallback: Story = {
  args: {
    src: null,
    alt: 'Image with fallback',
    fallbackSrc: 'https://placehold.co/600x400?text=Fallback',
    style: { maxWidth: 400 },
  },
};

export const WithRadius: Story = {
  render: () => (
    <Stack>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((radius) => (
        <Image
          key={radius}
          src="https://placehold.co/400x200"
          alt={`Radius ${radius}`}
          radius={radius}
          style={{ maxWidth: 400 }}
        />
      ))}
    </Stack>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <figure style={{ margin: 0, maxWidth: 400 }}>
      <Image src="https://placehold.co/600x400" alt="ISF project site" radius="sm" />
      <figcaption>
        <Text size="xs" c="dimmed" ta="center" mt="xs">
          Solar panel installation in rural Senegal — ISF field project, 2025.
        </Text>
      </figcaption>
    </figure>
  ),
};
