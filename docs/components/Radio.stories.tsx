import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Radio, Stack } from '@mantine/core';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Option A',
  },
};

export const RadioGroup: Story = {
  render: () => (
    <Radio.Group name="role" label="Select your role" defaultValue="engineer">
      <Stack mt="xs">
        <Radio value="engineer" label="Engineer" />
        <Radio value="designer" label="Designer" />
        <Radio value="manager" label="Project Manager" />
        <Radio value="volunteer" label="Volunteer" />
      </Stack>
    </Radio.Group>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Radio.Group
      name="membership"
      label="Membership type"
      description="Choose the membership that best fits your involvement"
      defaultValue="active"
    >
      <Stack mt="xs">
        <Radio value="active" label="Active member" description="Participate in projects regularly" />
        <Radio value="alumni" label="Alumni" description="Former active member" />
        <Radio value="supporter" label="Supporter" description="Financial or advisory support" />
      </Stack>
    </Radio.Group>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Radio.Group name="disabled-demo" label="Disabled options" defaultValue="a">
      <Stack mt="xs">
        <Radio value="a" label="Selected and disabled" disabled />
        <Radio value="b" label="Disabled" disabled />
      </Stack>
    </Radio.Group>
  ),
};
