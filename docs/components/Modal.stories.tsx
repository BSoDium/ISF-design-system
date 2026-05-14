'use client';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Modal, Button, Text, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal opened={opened} onClose={close} title="Welcome to ISF">
          <Text>
            Ingénieurs sans Frontières is a network of associations promoting sustainable
            development through engineering.
          </Text>
        </Modal>
      </>
    );
  },
};

export const WithTitle: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
      <>
        <Button onClick={open}>Open modal</Button>
        <Modal opened={opened} onClose={close} title="Confirm Action">
          <Text size="sm">
            Are you sure you want to submit your application? This action cannot be undone.
          </Text>
          <Group justify="flex-end" mt="md">
            <Button variant="subtle" onClick={close}>
              Cancel
            </Button>
            <Button color="deep-ocean" onClick={close}>
              Confirm
            </Button>
          </Group>
        </Modal>
      </>
    );
  },
};

export const Centered: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
      <>
        <Button onClick={open}>Open centered modal</Button>
        <Modal opened={opened} onClose={close} title="Centered Modal" centered>
          <Text>This modal is vertically centered on the screen.</Text>
        </Modal>
      </>
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const [opened, { open, close }] = useDisclosure(false);
    return (
      <>
        <Button onClick={open}>Open fullscreen modal</Button>
        <Modal opened={opened} onClose={close} title="Full Screen" fullScreen>
          <Text>
            This modal takes up the entire screen. Useful for complex forms or detailed content.
          </Text>
        </Modal>
      </>
    );
  },
};
