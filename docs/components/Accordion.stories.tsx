import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Accordion, Text } from '@mantine/core';

const faqItems = [
  {
    value: 'what-is-isf',
    title: 'What is Ingénieurs sans Frontières?',
    content:
      'ISF is a French network of associations that promotes sustainable development through engineering, education, and field projects in developing countries.',
  },
  {
    value: 'how-to-join',
    title: 'How can I join ISF?',
    content:
      'You can join your local ISF group at your engineering school or university. Visit our membership page to find the nearest chapter and sign up.',
  },
  {
    value: 'projects',
    title: 'What kind of projects does ISF work on?',
    content:
      'ISF works on water access, renewable energy, sanitation, infrastructure, and agricultural projects. All projects prioritize sustainability and community involvement.',
  },
  {
    value: 'funding',
    title: 'How are projects funded?',
    content:
      'Projects are funded through a combination of grants, partnerships, fundraising events, and institutional support from universities and engineering schools.',
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion defaultValue="what-is-isf">
      {faqItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{item.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};

export const Multiple: Story = {
  render: () => (
    <Accordion multiple defaultValue={['what-is-isf', 'projects']}>
      {faqItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{item.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};

export const Separated: Story = {
  render: () => (
    <Accordion variant="separated" defaultValue="what-is-isf">
      {faqItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{item.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};

export const WithCustomChevron: Story = {
  render: () => (
    <Accordion chevron="＋" defaultValue="what-is-isf">
      {faqItems.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control>{item.title}</Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{item.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  ),
};
