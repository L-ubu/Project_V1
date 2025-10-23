import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body1', 'body2', 'caption', 'overline'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'inherit'],
    },
    align: {
      control: { type: 'select' },
      options: ['left', 'center', 'right', 'justify'],
    },
    gutterBottom: {
      control: { type: 'boolean' },
    },
    noWrap: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Typography Text',
  },
};

export const Heading1: Story = {
  args: {
    children: 'Heading 1',
    variant: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: 'Heading 2',
    variant: 'h2',
  },
};

export const Heading3: Story = {
  args: {
    children: 'Heading 3',
    variant: 'h3',
  },
};

export const Body1: Story = {
  args: {
    children: 'Body 1 text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    variant: 'body1',
  },
};

export const Body2: Story = {
  args: {
    children: 'Body 2 text - Smaller body text for secondary information.',
    variant: 'body2',
  },
};

export const Caption: Story = {
  args: {
    children: 'Caption text',
    variant: 'caption',
  },
};

export const Overline: Story = {
  args: {
    children: 'Overline text',
    variant: 'overline',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary color text',
    color: 'secondary',
  },
};

export const Centered: Story = {
  args: {
    children: 'Centered text',
    align: 'center',
  },
};

export const NoWrap: Story = {
  args: {
    children: 'This is a very long text that should not wrap and should be truncated with ellipsis',
    noWrap: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1 - Main body text</Typography>
      <Typography variant="body2">Body 2 - Secondary body text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">Overline text</Typography>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Typography color="primary">Primary color text</Typography>
      <Typography color="secondary">Secondary color text</Typography>
      <Typography color="tertiary">Tertiary color text</Typography>
    </div>
  ),
};
