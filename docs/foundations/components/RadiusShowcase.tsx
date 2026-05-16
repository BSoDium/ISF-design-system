import React from 'react';
import { Box, Divider, Group, Stack, Text, useMantineTheme } from '@mantine/core';

const RADIUS_TOKENS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const RADIUS_PX: Record<string, string> = {
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '16px',
  xl: '24px',
};

export function RadiusShowcase() {
  const theme = useMantineTheme();

  return (
    <Stack gap={0}>
      {RADIUS_TOKENS.map((token, i) => {
        const value = theme.radius[token];
        return (
          <React.Fragment key={token}>
            {i > 0 && <Divider />}
            <Group gap="md" align="center" wrap="nowrap" py="sm">
              <Text size="xs" ff="monospace" c="dimmed" style={{ minWidth: 200, flexShrink: 0 }}>
                --mantine-radius-{token}
              </Text>
              <Text size="xs" ff="monospace" c="dimmed" style={{ minWidth: 40, flexShrink: 0 }}>
                {RADIUS_PX[token]}
              </Text>
              <Text size="xs" ff="monospace" c="dimmed" style={{ minWidth: 64, flexShrink: 0 }}>
                {value}
              </Text>
              <Box
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: value,
                  backgroundColor: 'var(--mantine-color-deep-ocean-filled)',
                  flexShrink: 0,
                }}
              />
            </Group>
          </React.Fragment>
        );
      })}
    </Stack>
  );
}

export function RadiusComparison() {
  const theme = useMantineTheme();

  return (
    <Stack gap={0}>
      {RADIUS_TOKENS.map((token, i) => {
        const value = theme.radius[token];
        return (
          <React.Fragment key={token}>
            {i > 0 && <Divider />}
            <Group gap="md" align="center" wrap="nowrap" py="sm">
              <Text size="sm" fw={600} ff="monospace" style={{ minWidth: 30, flexShrink: 0 }}>
                {token}
              </Text>
              <Text size="xs" c="dimmed" ff="monospace" style={{ minWidth: 60, flexShrink: 0 }}>
                {value}
              </Text>
              <Box
                style={{
                  width: 240,
                  height: 40,
                  borderRadius: value,
                  backgroundColor: 'var(--mantine-color-tidal-blue-filled)',
                  flexShrink: 0,
                }}
              />
            </Group>
          </React.Fragment>
        );
      })}
    </Stack>
  );
}
