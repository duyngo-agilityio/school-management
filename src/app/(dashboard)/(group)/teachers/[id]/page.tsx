// Libs
import { notFound } from 'next/navigation';

// Components
import { Icon, Profile } from '@/components';
import SearchInputWrapper from '@/components/SearchInput/Wrapper';

// Services
import { getTeacherById } from '@/services';

// Utils
import { createIcons } from '@/utils';

// Components
import { Box, Flex, Text } from '@chakra-ui/react';
import { Metadata } from 'next';

interface TeacherDetailPageProps {
  params: {
    id: string;
  };
}

export const generateMetadata = async ({
  params: { id },
}: TeacherDetailPageProps): Promise<Metadata> => {
  const data = await getTeacherById(id);

  if (!data) {
    return {};
  }

  const { fullName, avatar = '', subject = 'Math' } = data;

  return {
    title: fullName,
    authors: { name: fullName },
    description: `Learn more about ${fullName}, an experienced ${subject} teacher. Discover their educational background, teaching approach, and contributions to student success.`,
    keywords: fullName,
    openGraph: {
      title: fullName,
      description: `Learn more about ${fullName}, an experienced ${subject} teacher. Discover their educational background, teaching approach, and contributions to student success.`,
      url: `https://data-school-management.onrender.com/teachers/${id}`,
      images: [
        {
          url: avatar,
          width: 700,
          height: 300,
          alt: fullName,
        },
      ],
    },
  };
};

const TeacherDetails = async ({ params }: { params: { id: string } }) => {
  const data = await getTeacherById(params.id);
  const {
    fullName = '',
    avatar = '',
    description = '',
    age = '',
    gender = 0,
    subject = '',
  } = data;

  if (!data) notFound();

  return (
    <>
      <Box mt="42px">
        <SearchInputWrapper placeholder={fullName} disableInput />
      </Box>
      <Flex justifyContent="center" w="full" mt="88px">
        <Flex justifyContent="space-between" w="720px">
          <Flex flexDirection="column" alignItems="center">
            <Profile
              title={fullName}
              variant="lg"
              src={avatar}
              subTitle={`${subject} teacher`}
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
              <Text
                variant="subTitle"
                fontSize="md"
                textAlign="justify"
                mt="16px"
              >
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
    </>
  );
};

export default TeacherDetails;
