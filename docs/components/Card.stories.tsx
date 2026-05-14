import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    shadow: 'sm',
    padding: 'lg',
    radius: 'md',
    withBorder: true,
    style: { maxWidth: 360 },
    children: (
      <Text>
        Ingénieurs sans Frontières works to make engineering serve sustainable development and
        solidarity.
      </Text>
    ),
  },
};

export const WithImage: Story = {
  render: () => (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{ maxWidth: 360 }}>
      <Card.Section>
        <Image src="https://placehold.co/600x400" height={200} alt="Project photo" />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Water Access Project</Text>
        <Badge color="copper">Active</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        Providing clean water infrastructure to rural communities through sustainable engineering
        solutions.
      </Text>

      <Button color="deep-ocean" fullWidth mt="md" radius="md">
        Learn more
      </Button>
    </Card>
  ),
};

export const WithSections: Story = {
  render: () => (
    <Card withBorder shadow="sm" radius="md" style={{ maxWidth: 360 }}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Project Update</Text>
          <Badge color="tidal-blue" variant="light">
            New
          </Badge>
        </Group>
      </Card.Section>

      <Text mt="sm" size="sm" c="dimmed">
        The solar panel installation in Senegal has been completed. The system is now providing
        electricity to 200 households.
      </Text>

      <Card.Section withBorder inheritPadding mt="sm" py="xs">
        <Text size="xs" c="dimmed">
          Updated 2 hours ago
        </Text>
      </Card.Section>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      component="a"
      href="#"
      style={{ maxWidth: 360 }}
    >
      <Card.Section>
        <Image src="https://placehold.co/600x400" height={160} alt="Event" />
      </Card.Section>

      <Text fw={500} mt="md">
        Annual Conference 2026
      </Text>

      <Text size="sm" c="dimmed" mt="xs">
        Join us for the annual ISF conference featuring talks on sustainable engineering and
        humanitarian projects.
      </Text>
    </Card>
  ),
};
