'use client';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AppShell, Text, Paper, Group, Title, Stack, Anchor, Button, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Menu01Icon, Cancel01Icon, GlobeIcon } from 'hugeicons-react';

const meta: Meta = {
  title: 'Layout/AppShell',
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj;

const navLinks = ['Accueil', 'Nos missions', 'Projets', 'Actualités', 'Contact'];

export const BasicShell: Story = {
  render: () => (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm' }}
      footer={{ height: 50 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Title order={4} c="deep-ocean">ISF</Title>
          <Group gap="md">
            {navLinks.map((link) => (
              <Anchor key={link} size="sm" c="deep-ocean" underline="hover">
                {link}
              </Anchor>
            ))}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Title order={5} mb="md">Navigation</Title>
        <Stack gap="xs">
          {navLinks.map((link) => (
            <Anchor key={link} size="sm" c="deep-ocean" underline="hover">
              {link}
            </Anchor>
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Paper p="xl" radius="sm" withBorder>
          <Title order={2} mb="md">Contenu principal</Title>
          <Text c="dimmed">
            Ceci est la zone de contenu principal de l&apos;application. L&apos;AppShell fournit
            une mise en page structurée avec un en-tête, une barre de navigation latérale,
            un contenu principal et un pied de page.
          </Text>
          <Text mt="md" c="dimmed">
            Ingénieurs sans Frontières œuvre pour un développement durable et solidaire
            à travers des projets d&apos;ingénierie dans le monde entier.
          </Text>
        </Paper>
      </AppShell.Main>

      <AppShell.Footer>
        <Group h="100%" px="md" justify="space-between">
          <Text size="xs" c="dimmed">© 2026 Ingénieurs sans Frontières</Text>
          <Text size="xs" c="dimmed">Tous droits réservés</Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  ),
};

export const CollapsedNavbar: Story = {
  render: () => {
    const [opened, { toggle }] = useDisclosure(true);
    return (
      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 250, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md" justify="space-between">
            <Group gap="sm">
              <Button variant="subtle" size="compact-sm" onClick={toggle}>
                {opened ? <Cancel01Icon size={18} strokeWidth={1.5} /> : <Menu01Icon size={18} strokeWidth={1.5} />}
              </Button>
              <Group gap="xs" align="center">
                <GlobeIcon size={22} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
                <Title order={4} c="deep-ocean">ISF</Title>
              </Group>
            </Group>
            <Text size="sm" c="dimmed">
              Navbar {opened ? 'ouverte' : 'fermée'}
            </Text>
          </Group>
        </AppShell.Header>

        <AppShell.Navbar p="md">
          <Title order={5} mb="md">Navigation</Title>
          <Stack gap="xs">
            {navLinks.map((link) => (
              <Anchor key={link} size="sm" c="deep-ocean" underline="hover">
                {link}
              </Anchor>
            ))}
          </Stack>
        </AppShell.Navbar>

        <AppShell.Main>
          <Paper p="xl" radius="sm" withBorder>
            <Title order={2} mb="md">Contenu principal</Title>
            <Text c="dimmed">
              Utilisez le bouton dans l&apos;en-tête pour afficher ou masquer la barre
              de navigation latérale. Cela démontre le comportement de repli de l&apos;AppShell.
            </Text>
          </Paper>
        </AppShell.Main>
      </AppShell>
    );
  },
};
