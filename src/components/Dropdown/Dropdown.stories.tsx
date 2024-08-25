// Dropdown.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { INPUT_PLACEHOLDER, OPTIONS_SUBJECT } from '@/constants';

// Components
import Dropdown from '@/components/Dropdown';

import { fn } from '@storybook/test';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    options: { description: 'array included option to select' },
    placeholder: {
      description:
        ' specifies a short hint that describes the expected value of an input field',
    },
    width: {
      description: 'set width input how to way flexible',
    },
    onChangeValue: {
      description: 'change value typing input',
    },
    value: {
      description: 'value input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    options: OPTIONS_SUBJECT,
    placeholder: INPUT_PLACEHOLDER.TEACHER,
    width: '179px',
    onChangeValue: fn(),
  },
};
