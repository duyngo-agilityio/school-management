// Components
import { FeatureContent, HeaderBar } from '@/components';
import { Flex, Text } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Flex flexDirection="column">
      <Flex
        alignItems="center"
        justifyContent="center"
        bg="backgroundWhiteHint"
        h="95px"
        w="full"
      >
        <HeaderBar width="753px">
          <Flex flexDirection="column">
            <Text variant="primary" fontWeight="medium" size="md">
              Learn how to launch faster
            </Text>
            <Text variant="primary" size="md" mt="6px">
              watch our webinar for tips from our experts and get a limited time
              offer.
            </Text>
          </Flex>
        </HeaderBar>
      </Flex>
      <Flex alignItems="center" justifyContent="center" w="full">
        <Flex
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          w="753px"
          mt="53px"
        >
          <Text variant="primary" fontWeight="semibold" size="3xl">
            Welcome to your dashboard, Udemy school
          </Text>
        </Flex>
      </Flex>
      <Flex alignItems="center" justifyContent="center" w="full" mt="23px">
        <Flex
          flexDirection="column"
          alignContent="center"
          justifyContent="center"
          width="570px"
        >
          <Text
            variant="primary"
            fontWeight="semibold"
            size="lg"
            mt="23px"
            mb="74px"
          >
            Uyo/school/@teachable.com
          </Text>
          <FeatureContent />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
