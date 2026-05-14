import { createTheme, virtualColor, type MantineColorsTuple, type MantineTheme } from '@mantine/core';

/* ── ISF Color Palettes (pre-computed from generateColors) ──────────── */

const deepOcean: MantineColorsTuple = ["#eff9fb","#e0f0f3","#bbe0e7","#93d0db","#75c2d1","#62bacb","#56b6c9","#47a0b2","#398e9f","#154c56"];
const tidalBlue: MantineColorsTuple = ["#eef9fb","#dff0f3","#b9e0e9","#90d0de","#71c2d5","#5fb9cf","#53b5ce","#449fb6","#378ea3","#1b6d7f"];
const ivorySand: MantineColorsTuple = ["#fff4e5","#fcebd5","#fbd6a4","#fbbf6e","#fbab43","#fb9f2b","#fc9920","#e08416","#c8750e","#ad6400"];
const goldenDune: MantineColorsTuple = ["#fff5e6","#f6e9d7","#e9d1b1","#d9b382","#cfa166","#c9934f","#c68c42","#af7934","#9c6b2b","#885b1f"];
const copper: MantineColorsTuple = ["#fff1e8","#fae2d5","#f2c3a9","#eba179","#e58551","#e27337","#e16a29","#c8591d","#b95118","#9c410e"];
const midnight: MantineColorsTuple = ["#f2f6f7","#e7e8e9","#cad0d3","#aab7bd","#8fa2ab","#7d95a0","#728e9b","#607b87","#536e79","#1f2d33"];
const skyMist: MantineColorsTuple = ["#e8f7ff","#ddeaf1","#bed1dc","#9cb7c7","#80a1b5","#6d93aa","#628da6","#507a92","#436c84","#315e76"];
const blueAsh: MantineColorsTuple = ["#ebf7fe","#e0e9ee","#c4d0d6","#a5b5be","#8b9faa","#7a919e","#708a99","#5a7381","#506a79","#3e5c6c"];

/* ── Theme ───────────────────────────────────────────────────────────── */

export const isfTheme = createTheme({
  /* Colors */
  colors: {
    'deep-ocean': deepOcean,
    'tidal-blue': tidalBlue,
    'ivory-sand': ivorySand,
    'golden-dune': goldenDune,
    copper,
    midnight,
    'sky-mist': skyMist,
    'blue-ash': blueAsh,

    /* Virtual colors that swap between light and dark schemes */
    surface: virtualColor({
      name: 'surface',
      light: 'ivory-sand',
      dark: 'midnight',
    }),
    onSurface: virtualColor({
      name: 'onSurface',
      light: 'midnight',
      dark: 'ivory-sand',
    }),
  },

  primaryColor: 'deep-ocean',
  primaryShade: { light: 7, dark: 5 },
  autoContrast: true,

  /* Typography */
  fontFamily: 'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  fontFamilyMonospace: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace',
  headings: {
    fontFamily: 'var(--font-serif), Georgia, serif',
    fontWeight: '700',
    sizes: {
      h1: { fontSize: '3.5rem',   lineHeight: '1.1',  fontWeight: '700' },
      h2: { fontSize: '2.5rem',   lineHeight: '1.15', fontWeight: '700' },
      h3: { fontSize: '1.875rem', lineHeight: '1.25', fontWeight: '600' },
      h4: { fontSize: '1.375rem', lineHeight: '1.3',  fontWeight: '600' },
      h5: { fontSize: '1.125rem', lineHeight: '1.4',  fontWeight: '600' },
      h6: { fontSize: '1rem',     lineHeight: '1.45', fontWeight: '600' },
    },
  },

  components: {
    Title: {
      styles: (_theme: MantineTheme, props: { order?: number }) => ({
        root: {
          letterSpacing: (props.order ?? 1) <= 2 ? '-0.025em' : '-0.015em',
        },
      }),
    },
  },

  /* Radius — modern, clean corners */
  defaultRadius: 'sm',
  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
  },

  /* Shadows — very subtle, DSFR-inspired flat aesthetic */
  shadows: {
    xs: '0 1px 2px rgba(31, 45, 51, 0.04)',
    sm: '0 1px 3px rgba(31, 45, 51, 0.06)',
    md: '0 2px 8px rgba(31, 45, 51, 0.08)',
    lg: '0 4px 16px rgba(31, 45, 51, 0.10)',
    xl: '0 8px 32px rgba(31, 45, 51, 0.12)',
  },

  /* Spacing — generous, modern whitespace */
  spacing: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2.5rem',
  },

  /* Other */
  cursorType: 'pointer',
  focusRing: 'auto',
});
