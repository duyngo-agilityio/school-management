import type { Meta, StoryObj } from '@storybook/react';

// Types
import { TDataType } from '@/types';

// Mocks
import { COLUMNS_STUDENT, MOCK_STUDENTS } from '@/mocks';

// Components
import Table from '.';

const meta = {
  title: 'components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    columns:{ description: 'Columns are fundamental elements that play a pivotal role in rendering column values in the required format within your application'},
    data: { description: 'Array included information show in table' }
  }
} as Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

const data: TDataType[] = MOCK_STUDENTS

export const Default: Story = {
  args: {
    columns: COLUMNS_STUDENT,
    data: data
  }
};