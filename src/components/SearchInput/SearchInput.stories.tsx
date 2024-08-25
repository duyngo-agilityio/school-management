import type { Meta, StoryObj } from '@storybook/react';

// Components
import SearchInput from '.';
import { INPUT_PLACEHOLDER } from '@/constants';
import { fn } from '@storybook/test';

const meta: Meta<typeof SearchInput> = {
  title: 'components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      description:
        'The placeholder text displayed inside the input field when it is empty',
    },
    defaultValue: {
      description: 'The initial value of the input field',
    },
    onSearch: {
      description:
        'A callback function triggered every time the input value changes',
    },
    disableInput: {
      description:
        'Disables the input field when set to true. The default value is false',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {
  args: {
    placeholder: INPUT_PLACEHOLDER.STUDENT,
    defaultValue: '',
    onSearch: fn(),
    disableInput: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: INPUT_PLACEHOLDER.STUDENT,
    defaultValue: 'Anna',
    onSearch: fn(),
    disableInput: true,
  },
};
