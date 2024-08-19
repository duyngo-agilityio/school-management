// Components
import { Icon, Profile, StudentContainer } from '@/components';
import { Box, Flex, Text } from '@chakra-ui/react';

// Services
import { getStudentById } from '@/services';

// Utils
import { createIcons } from '@/utils';

const StudentDetails = async ({ params }: { params: { id: string } }) => {
  const { age, fullName, gender, id, avatar, description } =
    await getStudentById(params.id);

  return (
    <StudentContainer>
      <Flex
        flexDirection="column"
        w="313px"
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
            <Text variant="subTitle" fontSize="md" mt="16px">
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
    </StudentContainer>
  );
};

export default StudentDetails;
