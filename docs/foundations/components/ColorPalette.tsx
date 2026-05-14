"use client";

import { Box, Group, Stack, Text, useMantineTheme } from "@mantine/core";

const COLOR_NAMES = [
  "deep-ocean",
  "tidal-blue",
  "ivory-sand",
  "golden-dune",
  "copper",
  "midnight",
  "sky-mist",
  "blue-ash",
] as const;

function contrastColor(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? "#1F2D33" : "#FFFFFF";
}

function SwatchRow({ name, shades }: { name: string; shades: string[] }) {
  return (
    <Stack gap={6}>
      <Text size="sm" fw={600}>
        {name}
      </Text>
      <Group gap={2} wrap="nowrap" align="flex-end">
        {shades.map((hex, index) => {
          const isPrimary = index === 7;
          const height = isPrimary ? 112 : 80;
          const textColor = contrastColor(hex);
          const isFirst = index === 0;
          const isLast = index === shades.length - 1;

          return (
            <Box
              key={index}
              style={{
                backgroundColor: hex,
                flex: 1,
                height,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8px 4px",
                borderTopLeftRadius: isFirst
                  ? "var(--mantine-radius-sm)"
                  : 0,
                borderBottomLeftRadius: isFirst
                  ? "var(--mantine-radius-sm)"
                  : 0,
                borderTopRightRadius: isLast
                  ? "var(--mantine-radius-sm)"
                  : 0,
                borderBottomRightRadius: isLast
                  ? "var(--mantine-radius-sm)"
                  : 0,
              }}
            >
              <Text
                size="xs"
                fw={700}
                ta="center"
                style={{ color: textColor, lineHeight: 1 }}
              >
                {index}
              </Text>
              {isPrimary && (
                <Text
                  ta="center"
                  style={{
                    color: textColor,
                    fontSize: "0.55rem",
                    opacity: 0.8,
                    letterSpacing: "0.02em",
                    lineHeight: 1,
                  }}
                >
                  {hex.toUpperCase()}
                </Text>
              )}
            </Box>
          );
        })}
      </Group>
    </Stack>
  );
}

export function ColorPalette() {
  const theme = useMantineTheme();

  return (
    <Stack gap="xl">
      {COLOR_NAMES.map((name) => {
        const shades = theme.colors[name];
        if (!shades) return null;
        return (
          <SwatchRow
            key={name}
            name={name}
            shades={shades as unknown as string[]}
          />
        );
      })}
    </Stack>
  );
}

export function ColorUsageTable() {
  return (
    <Stack
      gap="md"
      style={{
        borderTop: "2px solid var(--mantine-color-default-border)",
        paddingTop: "var(--mantine-spacing-md)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th
              style={{
                textAlign: "left",
                padding: "8px 12px",
                borderBottom: "1px solid var(--mantine-color-default-border)",
              }}
            >
              <Text fw={600} size="sm" ff="monospace" c="dimmed">
                Rôle
              </Text>
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "8px 12px",
                borderBottom: "1px solid var(--mantine-color-default-border)",
              }}
            >
              <Text fw={600} size="sm" ff="monospace" c="dimmed">
                Token
              </Text>
            </th>
            <th
              style={{
                textAlign: "left",
                padding: "8px 12px",
                borderBottom: "1px solid var(--mantine-color-default-border)",
              }}
            >
              <Text fw={600} size="sm" ff="monospace" c="dimmed">
                Usage
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            [
              "Actions principales",
              "deep-ocean",
              "Boutons, liens, états actifs, anneaux de focus",
            ],
            [
              "Actions secondaires",
              "tidal-blue",
              "Boutons secondaires, états hover, accents informatifs",
            ],
            [
              "Fond (clair)",
              "ivory-sand",
              "Fonds de page, surfaces de cartes en mode clair",
            ],
            [
              "Accents chauds",
              "golden-dune",
              "Bordures décoratives, mises en évidence subtiles, badges",
            ],
            [
              "Appel à l'action",
              "copper",
              "CTA principaux, alertes, notifications importantes",
            ],
            [
              "Texte & surfaces sombres",
              "midnight",
              "Texte courant (clair), fonds en mode sombre",
            ],
            [
              "Éléments atténués",
              "sky-mist",
              "États désactivés, texte de remplacement, séparateurs",
            ],
            [
              "Texte secondaire",
              "blue-ash",
              "Légendes, métadonnées, texte d'aide, icônes subtiles",
            ],
            [
              "Surface (virtuel)",
              "surface",
              "S'adapte automatiquement — ivory-sand / midnight",
            ],
            [
              "Sur surface (virtuel)",
              "onSurface",
              "S'adapte automatiquement — midnight / ivory-sand",
            ],
          ].map(([role, token, usage]) => (
            <tr key={token}>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid var(--mantine-color-default-border)",
                }}
              >
                <Text size="sm">{role}</Text>
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid var(--mantine-color-default-border)",
                }}
              >
                <Text size="sm" ff="monospace" c="dimmed">
                  {token}
                </Text>
              </td>
              <td
                style={{
                  padding: "8px 12px",
                  borderBottom: "1px solid var(--mantine-color-default-border)",
                }}
              >
                <Text size="sm">{usage}</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Stack>
  );
}
