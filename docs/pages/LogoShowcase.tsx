import {
  Title,
  Text,
  Paper,
  SimpleGrid,
  Stack,
  Group,
  Box,
  Divider,
} from '@mantine/core';

function ISFLogoMark({ size = 48, color = 'currentColor', strokeWidth = 1.5 }: {
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

function LogoMark({ bg, textColor, label, size = 48, strokeWidth = 1.5 }: { bg: string; textColor: string; label: string; size?: number; strokeWidth?: number }) {
  return (
    <Stack gap="xs" align="center">
      <Paper
        p="xl"
        radius="md"
        style={{
          backgroundColor: bg,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 180,
          width: '100%',
          gap: 8,
        }}
      >
        <ISFLogoMark size={size} color={textColor} strokeWidth={strokeWidth} />
        <Text
          fw={600}
          style={{
            fontSize: '1.25rem',
            fontFamily: 'var(--font-serif), Georgia, serif',
            letterSpacing: '0.08em',
            color: textColor,
          }}
        >
          Ingénieurs sans Frontières
        </Text>
      </Paper>
      <Text size="xs" c="dimmed">{label}</Text>
    </Stack>
  );
}

function DoOrDont({ isDo, description }: { isDo: boolean; description: string }) {
  const accent = isDo ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)';
  return (
    <Box
      style={{
        borderLeft: `3px solid ${accent}`,
        paddingLeft: 'var(--mantine-spacing-md)',
        paddingTop: 'var(--mantine-spacing-xs)',
        paddingBottom: 'var(--mantine-spacing-xs)',
      }}
    >
      <Text
        size="xs"
        fw={700}
        tt="uppercase"
        style={{ letterSpacing: '0.08em', color: accent, marginBottom: 4 }}
      >
        {isDo ? '✓ Do' : "✗ Don't"}
      </Text>
      <Text size="sm">{description}</Text>
    </Box>
  );
}

export function LogoShowcase() {
  return (
    <Box py="xl">
      <Stack gap="xl">
        {/* Title */}
        <div>
          <Title order={1} mb="xs">
            Identité visuelle
          </Title>
          <Text c="dimmed" size="lg">
            Guide d&apos;utilisation du logo et de l&apos;identité graphique
            d&apos;Ingénieurs sans Frontières.
          </Text>
        </div>

        <Divider />

        {/* Logo on different backgrounds */}
        <div>
          <Title order={3} mb="md">Le logo</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Le logo ISF doit être présenté de manière claire et lisible sur tous les supports.
            Voici les variantes approuvées selon le fond utilisé.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
            <LogoMark
              bg="var(--mantine-color-deep-ocean-9)"
              textColor="#FFF4E5"
              label="Sur fond deep-ocean (inversé)"
            />
            <LogoMark
              bg="#FFF4E5"
              textColor="var(--mantine-color-deep-ocean-9)"
              label="Sur fond ivory-sand"
            />
            <LogoMark
              bg="#FFFFFF"
              textColor="var(--mantine-color-deep-ocean-9)"
              label="Sur fond blanc"
            />
          </SimpleGrid>
        </div>

        <Divider />

        {/* Clear space */}
        <div>
          <Title order={3} mb="md">Zone de protection</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Une zone de protection minimale doit être respectée autour du logo.
            Cette zone correspond à la hauteur de la marque géométrique.
          </Text>
          <Group justify="center">
            <Box
              style={{
                border: '2px dashed var(--mantine-color-deep-ocean-3)',
                borderRadius: 'var(--mantine-radius-md)',
                padding: '2.5rem',
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
                gap: 8,
              }}
            >
              <Text
                size="xs"
                c="deep-ocean"
                style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)' }}
              >
                ↕ min
              </Text>
              <Text
                size="xs"
                c="deep-ocean"
                style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}
              >
                ↔ min
              </Text>
              <ISFLogoMark size={36} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
              <Text size="xs" fw={500} c="deep-ocean" style={{ opacity: 0.7 }}>
                Ingénieurs sans Frontières
              </Text>
            </Box>
          </Group>
        </div>

        <Divider />

        {/* Minimum size */}
        <div>
          <Title order={3} mb="md">Taille minimale</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Pour garantir la lisibilité, le logo ne doit pas être reproduit en dessous
            des tailles minimales suivantes.
          </Text>
          <Group gap="xl" align="flex-end">
            <Stack align="center" gap="xs">
              <Paper
                withBorder
                p="sm"
                radius="md"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 50,
                }}
              >
                <ISFLogoMark size={24} color="var(--mantine-color-deep-ocean-7)" strokeWidth={1.5} />
              </Paper>
              <Text size="xs" c="dimmed">Print : 20mm</Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Paper
                withBorder
                p="xs"
                radius="md"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 50,
                  height: 35,
                }}
              >
                <ISFLogoMark size={16} color="var(--mantine-color-deep-ocean-7)" strokeWidth={2} />
              </Paper>
              <Text size="xs" c="dimmed">Digital : 32px</Text>
            </Stack>
          </Group>
        </div>

        <Divider />

        {/* Do / Don't */}
        <div>
          <Title order={3} mb="md">Bonnes pratiques</Title>
          <Text size="sm" c="dimmed" mb="lg">
            Respectez ces règles pour maintenir la cohérence de l&apos;identité visuelle.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
            <DoOrDont
              isDo
              description="Utiliser les couleurs officielles (deep-ocean sur fond clair, ivory-sand sur fond sombre)."
            />
            <DoOrDont
              isDo={false}
              description="Modifier les couleurs du logo (ex. : rouge, bleu vif, noir pur)."
            />
            <DoOrDont
              isDo
              description="Respecter les proportions et la zone de protection autour du logo."
            />
            <DoOrDont
              isDo={false}
              description="Déformer, étirer ou compresser le logo."
            />
            <DoOrDont
              isDo
              description="Utiliser le logo sur des fonds unis ou à faible contraste."
            />
            <DoOrDont
              isDo={false}
              description="Placer le logo sur des images complexes ou des motifs chargés sans fond intermédiaire."
            />
            <DoOrDont
              isDo
              description="Utiliser la marque géométrique officielle à l'épaisseur de trait recommandée."
            />
            <DoOrDont
              isDo={false}
              description="Remplacer la marque par un autre symbole ou modifier l'épaisseur du trait sans validation."
            />
          </SimpleGrid>
        </div>
      </Stack>
    </Box>
  );
}
