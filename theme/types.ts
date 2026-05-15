import type { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ISFCustomColors =
  | 'deep-ocean'
  | 'forest'
  | 'ivory-sand'
  | 'golden-dune'
  | 'copper'
  | 'midnight'
  | 'sky-mist'
  | 'stone'
  | 'surface'
  | 'onSurface'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ISFCustomColors, MantineColorsTuple>;
  }
}
