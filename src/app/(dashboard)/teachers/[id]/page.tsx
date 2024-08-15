// Components
import { HeaderBar, Icon, Profile, SearchTeachers } from '@/components';

// Mocks
import { MOCK_TEACHERS } from '@/mocks';

// Utils
import { createIcons } from '@/utils';

// Components
import { Box, Button, Flex, Text } from '@chakra-ui/react';

const TeacherDetails = ({ params }: { params: { id: string } }) => {
  // Data mock
  const { fullName, avatar, description, age, gender } = MOCK_TEACHERS[0];

  return (
    <Box p="40px">
      <HeaderBar width="full">
        <Button variant="primary">Add Teacher</Button>
      </HeaderBar>
      <Box mt="42px">
        <SearchTeachers />
      </Box>
      <Flex justifyContent="center" w="full" mt="88px">
        <Flex justifyContent="space-between" w="720px">
          <Flex flexDirection="column" alignItems="center">
            <Profile
              title={fullName}
              variant="lg"
              src={avatar}
              subTitle="Math Teacher"
            />
            <Flex flexDirection="row" mt="37px">
              {createIcons('30', '30').map(({ id, icon }) => (
                <Flex
                  key={id}
                  alignItems="center"
                  justifyContent="center"
                  mx="13px"
                  w="60px"
                  h="60px"
                  bg="backgroundLinkWater"
                  borderRadius="lg"
                >
                  <Icon icon={icon} />
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex flexDirection="column" w="335px">
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
      </Flex>
    </Box>
  );
};

export default TeacherDetails;
