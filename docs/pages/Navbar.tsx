'use client';

import {
  Group,
  Container,
  Anchor,
  ActionIcon,
  Box,
  Drawer,
  Stack,
  Burger,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/core';
import { Sun01Icon, Moon02Icon, GlobeIcon } from 'hugeicons-react';

const links = [
  { label: 'Accueil', href: '#' },
  { label: 'Nos missions', href: '#' },
  { label: 'Projets', href: '#' },
  { label: 'Actualités', href: '#' },
  { label: 'Contact', href: '#' },
];

interface NavbarProps {
  drawerOpened?: boolean;
}

export function Navbar({ drawerOpened: initialDrawerOpened = false }: NavbarProps) {
  const [opened, { close, toggle }] = useDisclosure(initialDrawerOpened);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Box
      component="header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--mantine-color-body)',
        backdropFilter: 'blur(4px)',
        borderBottom: '1px solid var(--mantine-color-default-border)',
      }}
    >
      {/* Copper accent strip */}
      <Box style={{ height: 3, backgroundColor: 'var(--mantine-color-copper-6)' }} />

      <Container size="lg">
        <Group h={64} justify="space-between">
          {/* Logo */}
          <Group gap="xs" align="center">
            <GlobeIcon size={22} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
            <Text
              fw={700}
              size="sm"
              c="midnight"
              ff="var(--font-geist-sans)"
              style={{ letterSpacing: '-0.01em' }}
            >
              Ingénieurs sans Frontières
            </Text>
          </Group>

          {/* Desktop nav links */}
          <Group gap="lg" visibleFrom="sm">
            {links.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                c="dimmed"
                size="sm"
                fw={500}
                underline="hover"
              >
                {link.label}
              </Anchor>
            ))}
          </Group>

          <Group gap="xs">
            <ActionIcon
              variant="subtle"
              color="deep-ocean"
              size="lg"
              onClick={() => toggleColorScheme()}
              aria-label="Toggle color scheme"
            >
              {colorScheme === 'dark' ? <Sun01Icon size={20} strokeWidth={1.5} /> : <Moon02Icon size={20} strokeWidth={1.5} />}
            </ActionIcon>

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color="var(--mantine-color-deep-ocean-7)"
            />
          </Group>
        </Group>
      </Container>

      {/* Mobile drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        title={
          <Group gap="xs" align="center">
            <GlobeIcon size={22} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
            <Text fw={700} size="sm" c="midnight" ff="var(--font-geist-sans)">ISF</Text>
          </Group>
        }
        hiddenFrom="sm"
        zIndex={1000}
      >
        <Stack gap="md" mt="md">
          {links.map((link) => (
            <Anchor
              key={link.label}
              href={link.href}
              c="dimmed"
              size="md"
              fw={500}
              underline="hover"
              onClick={close}
            >
              {link.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </Box>
  );
}
