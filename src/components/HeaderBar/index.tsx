// Icons
import { BellNotification } from '@/icons';

// Components
import { Flex, Text } from '@chakra-ui/react';

const HeaderBar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="backgroundWhiteHint"
      h="95px"
      w="full"
    >
      <Flex justifyContent="space-between" w="753px">
        <Flex flexDirection="column">
          <Text variant="primary" fontWeight="medium" size="md">
            Learn how to launch faster
          </Text>
          <Text variant="primary" size="md" mt="6px">
            watch our webinar for tips from our experts and get a limited time
            offer.
          </Text>
        </Flex>
        <BellNotification />
      </Flex>
    </Flex>
  );
};

export default HeaderBar;
