import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Stack, Group, Paper, Text, Container, Title } from '@mantine/core';

const meta: Meta = {
  title: 'Layout/Stack & Group',
};

export default meta;
type Story = StoryObj;

const Block = ({ children, color = 'deep-ocean' }: { children: React.ReactNode; color?: string }) => (
  <Paper
    bg={color}
    c="white"
    p="sm"
    px="md"
    radius="sm"
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', minWidth: 80, minHeight: 40 }}
  >
    <Text size="sm" fw={600}>{children}</Text>
  </Paper>
);

export const VerticalStack: Story = {
  render: () => (
    <Container size="sm" py="xl">
      <Stack gap="xl">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
          <div key={gap}>
            <Text size="sm" c="dimmed" mb="xs">gap=&quot;{gap}&quot;</Text>
            <Stack gap={gap}>
              <Block>Élément 1</Block>
              <Block color="tidal-blue">Élément 2</Block>
              <Block color="copper">Élément 3</Block>
            </Stack>
          </div>
        ))}
      </Stack>
    </Container>
  ),
};

export const HorizontalGroup: Story = {
  render: () => (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((gap) => (
          <div key={gap}>
            <Text size="sm" c="dimmed" mb="xs">gap=&quot;{gap}&quot;</Text>
            <Group gap={gap}>
              <Block>Élément 1</Block>
              <Block color="tidal-blue">Élément 2</Block>
              <Block color="copper">Élément 3</Block>
            </Group>
          </div>
        ))}
      </Stack>
    </Container>
  ),
};

export const GroupPositions: Story = {
  render: () => (
    <Container size="md" py="xl">
      <Stack gap="xl">
        {(['flex-start', 'center', 'flex-end', 'space-between'] as const).map((justify) => (
          <div key={justify}>
            <Text size="sm" c="dimmed" mb="xs">justify=&quot;{justify}&quot;</Text>
            <Paper withBorder p="md" radius="sm">
              <Group justify={justify}>
                <Block>A</Block>
                <Block color="tidal-blue">B</Block>
                <Block color="copper">C</Block>
              </Group>
            </Paper>
          </div>
        ))}
      </Stack>
    </Container>
  ),
};

export const NestedLayout: Story = {
  render: () => (
    <Container size="md" py="xl">
      <Title order={3} mb="md">Mise en page imbriquée</Title>
      <Stack gap="lg">
        <Paper withBorder p="md" radius="sm">
          <Text size="sm" c="dimmed" mb="xs">Header Row</Text>
          <Group justify="space-between">
            <Block color="deep-ocean">Logo</Block>
            <Group gap="sm">
              <Block color="tidal-blue">Nav 1</Block>
              <Block color="tidal-blue">Nav 2</Block>
              <Block color="tidal-blue">Nav 3</Block>
            </Group>
          </Group>
        </Paper>

        <Paper withBorder p="md" radius="sm">
          <Text size="sm" c="dimmed" mb="xs">Content Area</Text>
          <Group align="flex-start" gap="md">
            <Stack gap="sm" style={{ flex: '0 0 120px' }}>
              <Block color="blue-ash">Sidebar 1</Block>
              <Block color="blue-ash">Sidebar 2</Block>
              <Block color="blue-ash">Sidebar 3</Block>
            </Stack>
            <Paper bg="ivory-sand" p="lg" radius="sm" style={{ flex: 1, minHeight: 160 }}>
              <Text size="sm" c="deep-ocean">Contenu principal</Text>
            </Paper>
          </Group>
        </Paper>

        <Paper withBorder p="md" radius="sm">
          <Text size="sm" c="dimmed" mb="xs">Footer Row</Text>
          <Group justify="space-between">
            <Text size="sm">© 2026 ISF</Text>
            <Group gap="sm">
              <Block color="midnight">Lien 1</Block>
              <Block color="midnight">Lien 2</Block>
            </Group>
          </Group>
        </Paper>
      </Stack>
    </Container>
  ),
};
