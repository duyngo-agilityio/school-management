import type { Meta, StoryObj } from '@storybook/react';

// Components
import Profile from '.';
import { MOCK_STUDENTS } from '@/mocks';
import { Flex } from '@chakra-ui/react';

const meta: Meta<typeof Profile> = {
  title: 'components/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: 'The main title text displayed in the profile component.',
    },
    variant: {
      description: 'Determines the size of the profile component',
    },
    src: {
      description: 'The source URL for the avatar image',
    },
    id: {
      description: 'Displayed above the avatar within the profile component',
    },
    subTitle: {
      description:
        'An optional subtitle displayed below the main title in the profile component',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    title: MOCK_STUDENTS[0].fullName,
    variant: 'xs',
    src: MOCK_STUDENTS[0].avatar,
  },
};

export const Medium: Story = {
  decorators: [
    (Story) => (
      <Flex
        flexDirection="column"
        w="313px"
        alignItems="center"
        px="39px"
        mt="45px"
      >
        <Story />
      </Flex>
    ),
  ],
  args: {
    id: MOCK_STUDENTS[1].id,
    title: MOCK_STUDENTS[1].fullName,
    src: MOCK_STUDENTS[1].avatar,
    variant: 'md',
    subTitle: 'Physical Student',
  },
};

export const Large: Story = {
  decorators: [
    (Story) => (
      <Flex flexDirection="column" alignItems="center">
        <Story />
      </Flex>
    ),
  ],
  args: {
    title: MOCK_STUDENTS[1].fullName,
    src: MOCK_STUDENTS[1].avatar,
    variant: 'lg',
    subTitle: 'Physical teacher',
  },
};
