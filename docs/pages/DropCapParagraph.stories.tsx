import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DropCapParagraph } from './DropCapParagraph';

const meta = {
  component: DropCapParagraph,
  tags: ['ai-generated'],
  parameters: { layout: 'padded' },
} satisfies Meta<typeof DropCapParagraph>;

export default meta;
type Story = StoryObj<typeof meta>;

const PARAGRAPH =
  "Depuis plus de trente ans, Ingénieurs sans Frontières accompagne des communautés dans la conception et la réalisation de projets d'infrastructure adaptés à leurs besoins réels. Eau, énergie, assainissement : chaque mission commence par une écoute attentive du terrain avant toute solution technique.";

export const Default: Story = {
  args: { children: PARAGRAPH },
};

export const FourLines: Story = {
  args: {
    children: PARAGRAPH,
    dropCapLines: 4,
  },
};

export const CustomColor: Story = {
  args: {
    children: PARAGRAPH,
    dropCapColor: 'var(--mantine-color-copper-6)',
  },
};

export const NarrowContainer: Story = {
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320 }}>
        <Story />
      </div>
    ),
  ],
  args: { children: PARAGRAPH },
};
