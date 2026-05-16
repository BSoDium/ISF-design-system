"use client";

import React from "react";
import { Box, Divider, Group, Paper, Stack, Text, Title } from "@mantine/core";

const HEADING_LEVELS = [
  {
    order: 1 as const,
    fontSize: "3.5rem",
    lineHeight: "1.1",
    fontWeight: "700",
  },
  {
    order: 2 as const,
    fontSize: "2.5rem",
    lineHeight: "1.15",
    fontWeight: "700",
  },
  {
    order: 3 as const,
    fontSize: "1.875rem",
    lineHeight: "1.25",
    fontWeight: "600",
  },
  {
    order: 4 as const,
    fontSize: "1.375rem",
    lineHeight: "1.3",
    fontWeight: "600",
  },
  {
    order: 5 as const,
    fontSize: "1.125rem",
    lineHeight: "1.4",
    fontWeight: "600",
  },
  {
    order: 6 as const,
    fontSize: "1rem",
    lineHeight: "1.45",
    fontWeight: "600",
  },
];

const BODY_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

const TYPE_RAMP_SIZES = [12, 14, 16, 20, 24, 32, 48] as const;

const FONT_FAMILIES = {
  serif: "var(--font-serif), Georgia, serif",
  sans: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
  mono: "var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace",
};

const SAMPLE_TEXT = "The quick brown fox jumps over the lazy dog";

export function TypeRamp({
  font = "sans",
}: {
  font?: "serif" | "sans" | "mono";
}) {
  return (
    <Paper withBorder style={{ overflow: "hidden" }}>
      {TYPE_RAMP_SIZES.map((size, i) => (
        <React.Fragment key={size}>
          {i > 0 && <Divider />}
          <Group
            gap={0}
            wrap="nowrap"
            align="center"
            style={{ padding: "6px 16px", minHeight: Math.min(size + 20, 72) }}
          >
            <Text
              size="xs"
              c="dimmed"
              ff="monospace"
              style={{ minWidth: 36, flexShrink: 0 }}
            >
              {size}
            </Text>
            <Text
              style={{
                fontFamily: FONT_FAMILIES[font],
                fontSize: size,
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                flex: 1,
              }}
            >
              {SAMPLE_TEXT}
            </Text>
          </Group>
        </React.Fragment>
      ))}
    </Paper>
  );
}

export function HeadingScale() {
  return (
    <Stack gap={0}>
      {HEADING_LEVELS.map(({ order, fontSize, lineHeight, fontWeight }, i) => (
        <React.Fragment key={order}>
          <Group justify="space-between" align="center" wrap="nowrap" py={6}>
            <Box style={{ flex: 1, minWidth: 0 }}>
              <Title order={order}>Titre {order}</Title>
            </Box>
            <Text size="xs" c="dimmed" ff="monospace" style={{ flexShrink: 0 }}>
              {fontSize} · {lineHeight} · {fontWeight} · Playfair Display
            </Text>
          </Group>
          {i < HEADING_LEVELS.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </Stack>
  );
}

export function BodyScale() {
  return (
    <Stack gap={0}>
      {BODY_SIZES.map((size, i) => (
        <React.Fragment key={size}>
          {i > 0 && <Divider />}
          <Group justify="space-between" align="center" wrap="nowrap" py="sm">
            <Text
              style={{ fontSize: `var(--mantine-font-size-${size})`, flex: 1 }}
            >
              Texte courant — taille &ldquo;{size}&rdquo;. The quick brown fox
              jumps over the lazy dog.
            </Text>
            <Text
              size="xs"
              c="dimmed"
              ff="monospace"
              style={{ minWidth: 40, textAlign: "right", flexShrink: 0 }}
            >
              {size}
            </Text>
          </Group>
        </React.Fragment>
      ))}
    </Stack>
  );
}

export function EditorialSample() {
  return (
    <Paper withBorder radius="md" style={{ overflow: "hidden" }}>
      <Box
        px="md"
        py={6}
        style={{
          borderBottom: "1px solid var(--mantine-color-default-border)",
          backgroundColor: "var(--mantine-color-default)",
        }}
      >
        <Text
          size="xs"
          c="dimmed"
          ff="monospace"
          tt="uppercase"
          style={{ letterSpacing: "0.08em" }}
        >
          Aperçu
        </Text>
      </Box>
      <Box p="xl">
        <Stack gap={8} style={{ maxWidth: 640 }}>
          <Title order={1} style={{ margin: 0 }}>
            Water for All: Engineering Solutions in the Sahel
          </Title>
          <Group gap="sm">
            <Text size="sm" c="dimmed">By Marie Dupont</Text>
            <Text size="sm" c="dimmed">·</Text>
            <Text size="sm" c="dimmed">15 April 2026</Text>
          </Group>
          <Title order={2} style={{ margin: 0, marginTop: 8 }}>
            A new approach to community-led infrastructure
          </Title>
          <Text size="md" style={{ lineHeight: 1.7, margin: 0 }}>
            In the arid expanse of Burkina Faso&apos;s northern provinces, a
            quiet revolution is taking shape. Teams of volunteer engineers,
            working alongside local communities, are designing gravity-fed water
            systems that require no electricity and minimal maintenance — a
            departure from the diesel-powered pumps that have long defined rural
            water access in West Africa.
          </Text>
          <Title order={3} style={{ margin: 0, marginTop: 4 }}>The technical challenge</Title>
          <Text size="md" style={{ lineHeight: 1.7, margin: 0 }}>
            The geology of the Sahel presents unique constraints. Shallow
            aquifers are seasonal and unreliable, while deeper boreholes require
            equipment that few communities can maintain independently. The ISF
            approach combines hydrogeological surveys with low-cost filtration
            technologies adapted to local conditions.
          </Text>
          <Text size="sm" c="dimmed" fs="italic" style={{ margin: 0 }}>
            &ldquo;Engineering is not just about building structures — it&apos;s
            about building capacity.&rdquo; — ISF founding principle
          </Text>
        </Stack>
      </Box>
    </Paper>
  );
}
