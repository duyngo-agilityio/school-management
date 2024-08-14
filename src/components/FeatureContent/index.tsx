// Components
import { Box, Flex, Text } from '@chakra-ui/react';

// Mocks
import { CONTENT_DASHBOARD } from '@/mocks';

const FeatureContent = () =>
  CONTENT_DASHBOARD.map(({ id, icon, title, description }) => (
    <Flex key={id} mb="50px">
      <Box w="36px" mr="20px">
        <Flex
          alignItems="center"
          justifyContent="center"
          w="36px"
          h="36px"
          bg="backgroundLinkWater"
          borderRadius="lg"
        >
          {icon}
        </Flex>
      </Box>
      <Flex flexDirection="column">
        <Text variant="primary" fontWeight="medium" size="lg" pb="16px">
          {title}
        </Text>
        <Text variant="primary" size="sm">
          {description}
        </Text>
      </Flex>
    </Flex>
  ));

export default FeatureContent;
