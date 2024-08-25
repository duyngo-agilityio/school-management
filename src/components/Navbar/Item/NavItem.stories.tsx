import type { Meta, StoryObj } from '@storybook/react';

// Components
import { Box, Flex } from '@chakra-ui/react';
import NavItem from '.';

// Icons
import { TeacherIcon } from '@/icons';

// Constants
import { ROUTES } from '@/constants';

const meta: Meta<typeof NavItem> = {
  title: 'components/NavItem',
  component: NavItem,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      description:
        'An icon element displayed at the start of the NavItem component',
    },
    href: {
      description: 'The URL that the NavItem links to when clicked',
    },
    isActive: {
      description:
        'A boolean that indicates whether the NavItem is currently active, affecting its style',
    },
    children: {
      description:
        'The content inside the NavItem component, typically text or other elements',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <Flex w="280px">
        <Story />
      </Flex>
    ),
  ],
  args: {
    icon: <TeacherIcon stroke="white" />,
    href: ROUTES.DASHBOARD,
    isActive: true,
    children: <Box>Dashboard</Box>,
  },
};
