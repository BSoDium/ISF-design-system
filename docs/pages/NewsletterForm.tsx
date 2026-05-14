'use client';

import {
  Box,
  Button,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';

interface NewsletterFormProps {
  initialValues?: {
    firstName?: string;
    email?: string;
  };
}

const INPUT_STYLES = {
  label: { color: 'rgba(255,255,255,0.65)' },
  input: {
    backgroundColor: 'rgba(255,255,255,0.07)',
    color: 'white',
    borderColor: 'rgba(255,255,255,0.15)',
  },
};

export function NewsletterForm({ initialValues }: NewsletterFormProps) {
  const form = useForm({
    initialValues: {
      firstName: initialValues?.firstName ?? '',
      email: initialValues?.email ?? '',
    },
    validate: {
      firstName: (value) =>
        value.trim().length > 0 ? null : 'Le prénom est requis',
      email: (value) =>
        /^\S+@\S+\.\S+$/.test(value) ? null : 'Adresse e-mail invalide',
    },
  });

  return (
    <Box
      style={{
        backgroundColor: 'var(--mantine-color-deep-ocean-8)',
        padding: 'var(--mantine-spacing-xl) 0',
      }}
    >
      <Container size="lg">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" style={{ alignItems: 'center' }}>
          <Stack gap="sm">
            <Title order={2} style={{ color: 'white' }}>
              Restez informé
            </Title>
            <Text size="md" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Recevez les actualités d&apos;ISF&nbsp;: projets en cours, événements à venir
              et opportunités de bénévolat.
            </Text>
          </Stack>

          <form
            onSubmit={form.onSubmit((values) => {
              console.log('Newsletter signup:', values);
            })}
          >
            <Stack gap="md">
              <TextInput
                label="Prénom"
                placeholder="Votre prénom"
                withAsterisk
                styles={INPUT_STYLES}
                {...form.getInputProps('firstName')}
              />

              <TextInput
                label="Adresse e-mail"
                placeholder="vous@exemple.fr"
                withAsterisk
                styles={INPUT_STYLES}
                {...form.getInputProps('email')}
              />

              <Group justify="flex-end" mt="xs">
                <Button type="submit" color="copper" size="md">
                  S&apos;inscrire
                </Button>
              </Group>
            </Stack>
          </form>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
