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
import { Sun01Icon, Moon02Icon } from 'hugeicons-react';

function ISFLogoMark({ size = 22, color = 'currentColor', strokeWidth = 1.5 }: {
  size?: number; color?: string; strokeWidth?: number;
}) {
  const cx = size / 2, cy = size / 2, r = size * 0.42;
  const points = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <polygon points={points} stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}

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
            <ISFLogoMark size={22} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
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

      {/* Mobile drawer — no hiddenFrom so the story can open it at any viewport */}
      <Drawer
        opened={opened}
        onClose={close}
        size="xs"
        padding="md"
        title={
          <Group gap="xs" align="center">
            <ISFLogoMark size={22} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
            <Text fw={700} size="sm" c="midnight" ff="var(--font-geist-sans)">ISF</Text>
          </Group>
        }
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
