import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Table, ScrollArea } from '@mantine/core';

const members = [
  { name: 'Alice Martin', role: 'Project Lead', location: 'Paris', status: 'Active' },
  { name: 'Baptiste Dupont', role: 'Engineer', location: 'Lyon', status: 'Active' },
  { name: 'Claire Bernard', role: 'Volunteer', location: 'Toulouse', status: 'On Mission' },
  { name: 'David Petit', role: 'Designer', location: 'Bordeaux', status: 'Active' },
  { name: 'Emma Roux', role: 'Coordinator', location: 'Marseille', status: 'Inactive' },
  { name: 'François Leroy', role: 'Engineer', location: 'Nantes', status: 'Active' },
];

const rows = members.map((m) => (
  <Table.Tr key={m.name}>
    <Table.Td>{m.name}</Table.Td>
    <Table.Td>{m.role}</Table.Td>
    <Table.Td>{m.location}</Table.Td>
    <Table.Td>{m.status}</Table.Td>
  </Table.Tr>
));

const head = (
  <Table.Tr>
    <Table.Th>Name</Table.Th>
    <Table.Th>Role</Table.Th>
    <Table.Th>Location</Table.Th>
    <Table.Th>Status</Table.Th>
  </Table.Tr>
);

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: () => (
    <Table>
      <Table.Thead>{head}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table striped>
      <Table.Thead>{head}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  ),
};

export const Highlighted: Story = {
  render: () => (
    <Table highlightOnHover>
      <Table.Thead>{head}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  ),
};

export const WithBorder: Story = {
  render: () => (
    <Table withTableBorder withColumnBorders>
      <Table.Thead>{head}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  ),
};

export const WithScrollArea: Story = {
  render: () => (
    <ScrollArea w={400}>
      <Table style={{ minWidth: 600 }}>
        <Table.Thead>{head}</Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  ),
};
