import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Container, Grid, Paper, Text, Stack, Title } from '@mantine/core';

const meta: Meta = {
  title: 'Layout/Container & Grid',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const Cell = ({ children, color = 'deep-ocean' }: { children: React.ReactNode; color?: string }) => (
  <Paper
    bg={color}
    c="white"
    p="md"
    radius="sm"
    style={{ textAlign: 'center', minHeight: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <Text size="sm" fw={600}>{children}</Text>
  </Paper>
);

export const ContainerSizes: Story = {
  render: () => (
    <Stack gap="lg" py="xl">
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <div key={size}>
          <Container size={size}>
            <Paper
              bg="deep-ocean"
              c="white"
              p="md"
              radius="sm"
              style={{ textAlign: 'center' }}
            >
              <Text fw={600}>Container size=&quot;{size}&quot;</Text>
            </Paper>
          </Container>
        </div>
      ))}
    </Stack>
  ),
};

export const BasicGrid: Story = {
  render: () => (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={3}>12-Column Grid</Title>
        <Grid>
          {Array.from({ length: 12 }, (_, i) => (
            <Grid.Col key={i} span={1}>
              <Cell color="tidal-blue">{i + 1}</Cell>
            </Grid.Col>
          ))}
        </Grid>

        <Title order={4} mt="md">Equal Columns</Title>
        <Grid>
          <Grid.Col span={6}>
            <Cell>span=6</Cell>
          </Grid.Col>
          <Grid.Col span={6}>
            <Cell color="copper">span=6</Cell>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={4}>
            <Cell color="tidal-blue">span=4</Cell>
          </Grid.Col>
          <Grid.Col span={4}>
            <Cell color="deep-ocean">span=4</Cell>
          </Grid.Col>
          <Grid.Col span={4}>
            <Cell color="copper">span=4</Cell>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={3}>
            <Cell>span=3</Cell>
          </Grid.Col>
          <Grid.Col span={3}>
            <Cell color="tidal-blue">span=3</Cell>
          </Grid.Col>
          <Grid.Col span={3}>
            <Cell color="copper">span=3</Cell>
          </Grid.Col>
          <Grid.Col span={3}>
            <Cell color="midnight">span=3</Cell>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  ),
};

export const ResponsiveGrid: Story = {
  render: () => (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={3}>Responsive Grid</Title>
        <Text c="dimmed" size="sm">Les colonnes s&apos;adaptent selon la taille de l&apos;écran.</Text>
        <Grid>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Cell>Colonne 1</Cell>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Cell color="tidal-blue">Colonne 2</Cell>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <Cell color="copper">Colonne 3</Cell>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 12, lg: 3 }}>
            <Cell color="midnight">Colonne 4</Cell>
          </Grid.Col>
        </Grid>

        <Title order={4} mt="md">Sidebar + Content</Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Cell color="blue-ash">Sidebar</Cell>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 9 }}>
            <Cell color="deep-ocean">Contenu principal</Cell>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  ),
};

export const OffsetGrid: Story = {
  render: () => (
    <Container size="lg" py="xl">
      <Stack gap="md">
        <Title order={3}>Grid avec Offsets</Title>
        <Grid>
          <Grid.Col span={4}>
            <Cell>span=4</Cell>
          </Grid.Col>
          <Grid.Col span={4} offset={4}>
            <Cell color="copper">span=4, offset=4</Cell>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={3} offset={3}>
            <Cell color="tidal-blue">span=3, offset=3</Cell>
          </Grid.Col>
          <Grid.Col span={3}>
            <Cell color="midnight">span=3</Cell>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={6} offset={3}>
            <Cell color="deep-ocean">span=6, offset=3 (centré)</Cell>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  ),
};
