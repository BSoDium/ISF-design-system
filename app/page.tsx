import { Container, Title, Text, Stack, Anchor } from '@mantine/core';

export default function Home() {
  return (
    <Container size="sm" py="xl">
      <Stack gap="lg">
        <Title order={1}>Ingénieurs sans Frontières</Title>
        <Text size="lg" c="dimmed">
          Bienvenue sur le système de design ISF. Consultez la{' '}
          <Anchor href="http://localhost:6006" target="_blank">
            documentation Storybook
          </Anchor>{' '}
          pour explorer les composants, fondations et pages d&apos;exemple.
        </Text>
      </Stack>
    </Container>
  );
}
