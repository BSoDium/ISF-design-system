import {
  Container,
  SimpleGrid,
  Stack,
  Text,
  Anchor,
  Group,
  Divider,
  Box,
} from '@mantine/core';

const navLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Nos missions', href: '#' },
  { label: 'Projets', href: '#' },
  { label: 'Actualités', href: '#' },
  { label: 'Contact', href: '#' },
];

const resourceLinks = [
  { label: 'Documentation', href: '#' },
  { label: 'Rapports annuels', href: '#' },
  { label: 'Guides techniques', href: '#' },
  { label: 'Mentions légales', href: '#' },
];

const SECTION_LABEL = {
  letterSpacing: '0.1em',
  color: 'rgba(255,255,255,0.45)',
};

const BODY_COLOR = { color: 'rgba(255,255,255,0.75)' };

export function Footer() {
  return (
    <Box
      component="footer"
      style={{ backgroundColor: 'var(--mantine-color-deep-ocean-9)' }}
    >
      <Container size="lg" py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          <Stack gap="sm">
            <Text size="xs" fw={700} tt="uppercase" style={SECTION_LABEL}>
              À propos
            </Text>
            <Text size="sm" style={BODY_COLOR}>
              Ingénieurs sans Frontières est un réseau d&apos;associations qui promeut
              un développement durable et solidaire à travers des projets d&apos;ingénierie
              partout dans le monde.
            </Text>
          </Stack>

          <Stack gap="sm">
            <Text size="xs" fw={700} tt="uppercase" style={SECTION_LABEL}>
              Navigation
            </Text>
            {navLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                size="sm"
                underline="hover"
                style={BODY_COLOR}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Stack gap="sm">
            <Text size="xs" fw={700} tt="uppercase" style={SECTION_LABEL}>
              Ressources
            </Text>
            {resourceLinks.map((link) => (
              <Anchor
                key={link.label}
                href={link.href}
                size="sm"
                underline="hover"
                style={BODY_COLOR}
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Stack gap="sm">
            <Text size="xs" fw={700} tt="uppercase" style={SECTION_LABEL}>
              Contact
            </Text>
            <Text size="sm" style={BODY_COLOR}>
              146 rue de Crimée
              <br />
              75019 Paris, France
            </Text>
            <Anchor
              href="mailto:contact@isf-france.org"
              size="sm"
              underline="hover"
              style={{ color: 'var(--mantine-color-golden-dune-4)' }}
            >
              contact@isf-france.org
            </Anchor>
          </Stack>
        </SimpleGrid>

        <Divider my="lg" style={{ borderColor: 'rgba(255,255,255,0.12)' }} />

        <Group justify="space-between">
          <Text size="xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
            © 2026 Ingénieurs sans Frontières
          </Text>
          <Group gap="md">
            <Anchor href="#" size="xs" underline="hover" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Politique de confidentialité
            </Anchor>
            <Anchor href="#" size="xs" underline="hover" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Conditions d&apos;utilisation
            </Anchor>
          </Group>
        </Group>
      </Container>
    </Box>
  );
}
