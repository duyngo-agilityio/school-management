import { Box, Flex, Skeleton, SkeletonCircle, Text } from '@chakra-ui/react';

const TeacherDetailSkeleton = () => {
  return (
    <Box w="415px">
      <Flex justifyContent="center" w="full" mt="88px">
        <Flex justifyContent="space-between" w="720px">
          <Flex flexDirection="column" alignItems="center">
            <SkeletonCircle size="30" />
            <Flex flexDirection="row" mt="37px">
              <Skeleton w="full" height="60px" />
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
                <Skeleton w="full" height="60px" />
              </Text>
            </Box>
            <Flex mt="30px" gap="150">
              <Box>
                <Text variant="title" fontWeight="semibold" size="md">
                  Age
                </Text>
                <Text variant="subTitle" fontSize="md" mt="10px">
                  <Skeleton w="full" height="60px" />
                </Text>
              </Box>
              <Box>
                <Text variant="title" fontWeight="semibold" size="md">
                  Gender
                </Text>
                <Text variant="subTitle" fontSize="md" mt="10px">
                  <Skeleton w="full" height="60px" />
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TeacherDetailSkeleton;
