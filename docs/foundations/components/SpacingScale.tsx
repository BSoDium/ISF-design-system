import React from 'react';
import { Box, Divider, Group, Stack, Text, useMantineTheme } from '@mantine/core';

const SPACING_TOKENS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

const REM_TO_PX: Record<string, number> = {
  '0.5rem': 8,
  '0.75rem': 12,
  '1rem': 16,
  '1.5rem': 24,
  '2.5rem': 40,
};

export function SpacingScale() {
  const theme = useMantineTheme();

  return (
    <Stack gap={0}>
      {SPACING_TOKENS.map((token, i) => {
        const value = theme.spacing[token];
        const px = REM_TO_PX[value] ?? 16;
        const barWidth = px * 4;

        return (
          <React.Fragment key={token}>
            {i > 0 && <Divider />}
            <Group gap="md" align="center" wrap="nowrap" py="sm">
              <Text size="sm" fw={600} ff="monospace" style={{ minWidth: 24 }}>
                {token}
              </Text>
              <Text size="xs" c="dimmed" ff="monospace" style={{ minWidth: 56 }}>
                {value}
              </Text>
              <Text size="xs" c="dimmed" ff="monospace" style={{ minWidth: 32 }}>
                {px}px
              </Text>
              <Text size="xs" c="dimmed" ff="monospace" style={{ minWidth: 200 }}>
                var(--mantine-spacing-{token})
              </Text>
              <Box
                style={{
                  height: 20,
                  width: barWidth,
                  backgroundColor: 'var(--mantine-color-deep-ocean-filled)',
                  borderRadius: 'var(--mantine-radius-xs)',
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
