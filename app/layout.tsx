import type { Metadata } from 'next';
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { isfTheme, isfCssResolver } from '@/theme';
import '@/theme/types';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const playfairDisplay = Playfair_Display({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Ingénieurs sans Frontières',
  description: 'ISF Design System & Landing',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      {...mantineHtmlProps}
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable}`}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={isfTheme} cssVariablesResolver={isfCssResolver} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
