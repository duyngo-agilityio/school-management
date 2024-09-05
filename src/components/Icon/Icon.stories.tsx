import type { Meta, StoryObj } from '@storybook/react';

// Components
import Icon from '@/components/Icon';

import { CallIcon, StudentIcon } from '@/icons';

const meta: Meta<typeof Icon> = {
  title: 'components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description:
        'the JSX element representing the icon to be displayed. This is a required prop',
    },
    width: {
      description: 'set width icon how to way flexible',
    },
    height: {
      description: 'set height icon how to way flexible',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: <StudentIcon />,
    width: '16',
    height: '16',
  },
};

export const Medium: Story = {
  args: {
    icon: <CallIcon />,
    width: '24',
    height: '24',
  },
};
