import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Tabs, Text } from '@mantine/core';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline', 'pills'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="about">
      <Tabs.List>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="members">Members</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about" pt="md">
        <Text>
          ISF promotes sustainable development through engineering education and field projects.
        </Text>
      </Tabs.Panel>
      <Tabs.Panel value="projects" pt="md">
        <Text>Current projects span water access, renewable energy, and infrastructure.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="members" pt="md">
        <Text>Our network includes over 3,000 active members across France.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Outline: Story = {
  render: () => (
    <Tabs defaultValue="about" variant="outline">
      <Tabs.List>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="members">Members</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about" pt="md">
        <Text>About ISF and our mission.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="projects" pt="md">
        <Text>Active and past projects.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="members" pt="md">
        <Text>Our team and members.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultValue="about" variant="pills">
      <Tabs.List>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="members">Members</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about" pt="md">
        <Text>About ISF and our mission.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="projects" pt="md">
        <Text>Active and past projects.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="members" pt="md">
        <Text>Our team and members.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="about" orientation="vertical">
      <Tabs.List>
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="projects">Projects</Tabs.Tab>
        <Tabs.Tab value="members">Members</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about" pl="md">
        <Text>About ISF and our mission.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="projects" pl="md">
        <Text>Active and past projects.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="members" pl="md">
        <Text>Our team and members.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="about">
      <Tabs.List>
        <Tabs.Tab value="about" leftSection="ℹ️">
          About
        </Tabs.Tab>
        <Tabs.Tab value="projects" leftSection="🔧">
          Projects
        </Tabs.Tab>
        <Tabs.Tab value="members" leftSection="👥">
          Members
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about" pt="md">
        <Text>About ISF and our mission.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="projects" pt="md">
        <Text>Active and past projects.</Text>
      </Tabs.Panel>
      <Tabs.Panel value="members" pt="md">
        <Text>Our team and members.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};
