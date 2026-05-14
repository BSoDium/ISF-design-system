'use client';

import {
  Badge,
  Box,
  Container,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { DropCapParagraph } from './DropCapParagraph';

export function ArticlePage() {
  return (
    <Box>
      {/* Full-bleed hero: image + dark gradient overlay + text anchored to bottom */}
      <Box
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '75vh',
          backgroundImage:
            'url("https://picsum.photos/seed/isf-water/1600/900")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Gradient overlay — translucent top, dark bottom */}
        <Box
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(10,20,25,0.1) 0%, rgba(10,20,25,0.65) 50%, rgba(10,20,25,0.92) 100%)',
          }}
        />

        {/* Text content — flex column, justified to bottom */}
        <Container
          size="md"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: '75vh',
            paddingBottom: '3.5rem',
          }}
        >
          <Stack gap="md">
            <Group>
              <Badge color="copper" variant="filled" size="sm">
                Développement durable
              </Badge>
            </Group>

            <Title
              order={1}
              style={{
                color: 'white',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              L&apos;ingénierie au service des communautés&nbsp;: repenser
              l&apos;accès à l&apos;eau potable
            </Title>

            <Text
              size="lg"
              style={{ color: 'rgba(255,255,255,0.85)', maxWidth: 580 }}
            >
              Comment les ingénieurs bénévoles transforment des villages entiers
              grâce à des solutions techniques durables et adaptées au contexte
              local.
            </Text>

            <Text size="sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Par Marie Dupont · 15 avril 2026 · 8 min de lecture
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Article body — narrow reading column */}
      <Container size="sm" py="xl">
        <Stack gap="xl">
          <DropCapParagraph>
            Depuis plus de trente ans, Ingénieurs sans Frontières France mobilise des compétences techniques au service du développement durable. Dans les régions rurales d'Afrique de l'Ouest, l'accès à l'eau potable reste un défi majeur pour des millions de personnes. Nos équipes de bénévoles, composées d'étudiants et de professionnels de l'ingénierie, travaillent main dans la main avec les communautés locales pour concevoir et mettre en œuvre des solutions adaptées, durables et respectueuses de l'environnement.
          </DropCapParagraph>

          <Text size="md" lh={1.85}>
            Le projet mené dans la commune de Koudougou, au Burkina Faso, illustre parfaitement
            cette approche. Pendant deux ans, une équipe de huit ingénieurs bénévoles a collaboré
            avec les habitants pour construire un réseau de distribution d&apos;eau alimenté par
            l&apos;énergie solaire. Le système, conçu pour fonctionner sans combustible fossile,
            dessert aujourd&apos;hui plus de 3&nbsp;000 personnes dans cinq villages. La clé du
            succès réside dans la formation des techniciens locaux, capables d&apos;assurer la
            maintenance et les réparations sans dépendre d&apos;une aide extérieure permanente.
          </Text>

          {/* Pull quote — custom, no Mantine Blockquote chrome */}
          <Box py="sm">
            <Text
              style={{
                fontFamily: 'var(--font-serif), Georgia, serif',
                fontSize: '1.5rem',
                fontStyle: 'italic',
                fontWeight: 400,
                lineHeight: 1.4,
                color: 'var(--mantine-color-copper-6)',
              }}
            >
              «&nbsp;La technique seule ne suffit pas. C&apos;est l&apos;alliance entre le
              savoir-faire des ingénieurs et la connaissance du terrain par les communautés
              qui rend ces projets véritablement pérennes.&nbsp;»
            </Text>
            <Text size="sm" c="dimmed" mt="xs">
              — Dr. Aminata Traoré, hydrologue
            </Text>
          </Box>

          <Text size="md" lh={1.85}>
            Au-delà de l&apos;accès à l&apos;eau, ISF intervient dans de nombreux domaines&nbsp;:
            l&apos;assainissement, l&apos;énergie renouvelable, l&apos;agriculture durable et
            la construction responsable. Chaque mission est l&apos;occasion de questionner nos
            pratiques d&apos;ingénierie et de promouvoir une approche low-tech, sobre et résiliente.
            Les étudiants qui participent à ces projets en reviennent transformés, porteurs d&apos;une
            vision différente de leur métier et de leur responsabilité envers la société.
          </Text>

          <Box>
            <Image
              src="https://picsum.photos/seed/isf-training/700/400"
              alt="Formation des techniciens locaux"
              radius={0}
            />
            <Text size="xs" c="dimmed" mt="xs" ta="center">
              Session de formation sur la maintenance des pompes solaires.
            </Text>
          </Box>

          <Text size="md" lh={1.85}>
            Aujourd&apos;hui, le réseau ISF France compte plus de 30 groupes locaux, présents
            dans les écoles d&apos;ingénieurs et les universités à travers tout le territoire.
            Chaque année, des centaines de bénévoles s&apos;engagent dans des projets de
            solidarité internationale et de sensibilisation. Face aux défis du changement
            climatique et des inégalités croissantes, le rôle d&apos;ISF n&apos;a jamais été
            aussi crucial. L&apos;ingénierie peut et doit être un levier de transformation
            sociale, à condition qu&apos;elle soit pratiquée avec humilité, écoute et respect
            des savoirs locaux.
          </Text>

          <Divider />

          <Group gap="xs">
            <Text size="sm" c="dimmed">Mots-clés&nbsp;:</Text>
            <Badge variant="light" color="deep-ocean" size="sm">Eau potable</Badge>
            <Badge variant="light" color="deep-ocean" size="sm">Burkina Faso</Badge>
            <Badge variant="light" color="deep-ocean" size="sm">Énergie solaire</Badge>
            <Badge variant="light" color="deep-ocean" size="sm">Low-tech</Badge>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}
