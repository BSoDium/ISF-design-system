import type { DefaultMantineColor, MantineColorsTuple } from '@mantine/core';

type ISFCustomColors =
  | 'deep-ocean'
  | 'tidal-blue'
  | 'ivory-sand'
  | 'golden-dune'
  | 'copper'
  | 'midnight'
  | 'sky-mist'
  | 'blue-ash'
  | 'surface'
  | 'onSurface'
  | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ISFCustomColors, MantineColorsTuple>;
  }
}
