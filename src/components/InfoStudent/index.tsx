// Utils
import { createIcons } from '@/utils';

// Components
import { Box, Flex, Text } from '@chakra-ui/react';
import Icon from '../Icon';
import Profile from '../Profile';

// Services
import { getStudentById } from '@/services';

const InfoStudent = async ({ params }: { params: { id: string } }) => {
  const { age, fullName, gender, id, avatar, description } =
    await getStudentById(params.id);

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      px="39px"
      mt="45px"
    >
      <Profile
        id={id}
        title={fullName}
        src={avatar}
        variant="md"
        subTitle="Physical Student"
      />
      <Flex flexDirection="row" mt="37px">
        {createIcons('24', '24').map(({ id, icon }) => (
          <Flex
            key={id}
            alignItems="center"
            justifyContent="center"
            mx="13px"
            w="36px"
            h="36px"
            bg="backgroundLinkWater"
            borderRadius="lg"
          >
            <Icon icon={icon} />
          </Flex>
        ))}
      </Flex>
      <Flex flexDirection="column" mt="47px">
        <Box>
          <Text variant="title" fontWeight="semibold" size="md">
            About
          </Text>
          <Text variant="subTitle" fontSize="md" textAlign="justify" mt="16px">
            {description}
          </Text>
        </Box>
        <Flex mt="30px" gap="150">
          <Box>
            <Text variant="title" fontWeight="semibold" size="md">
              Age
            </Text>
            <Text variant="subTitle" fontSize="md" mt="10px">
              {age}
            </Text>
          </Box>
          <Box>
            <Text variant="title" fontWeight="semibold" size="md">
              Gender
            </Text>
            <Text variant="subTitle" fontSize="md" mt="10px">
              {gender}
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default InfoStudent;
