import React from 'react';
import { Box, Divider, Group, Stack, Text, useMantineTheme } from '@mantine/core';

const SHADOW_TOKENS = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export function ShadowShowcase() {
  const theme = useMantineTheme();

  return (
    <Stack gap={0}>
      {SHADOW_TOKENS.map((token, i) => (
        <React.Fragment key={token}>
          {i > 0 && <Divider />}
          <Group gap="md" align="center" wrap="nowrap" py="sm">
            <Text size="sm" fw={600} ff="monospace" style={{ minWidth: 30, flexShrink: 0 }}>
              {token}
            </Text>
            <Text
              size="xs"
              c="dimmed"
              ff="monospace"
              style={{
                flex: 1,
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {theme.shadows[token]}
            </Text>
            <Box
              style={{
                width: 120,
                height: 40,
                backgroundColor: 'var(--mantine-color-body)',
                boxShadow: theme.shadows[token],
                borderRadius: 'var(--mantine-radius-sm)',
                border: '1px solid var(--mantine-color-default-border)',
                flexShrink: 0,
              }}
            />
          </Group>
        </React.Fragment>
      ))}
    </Stack>
  );
}
