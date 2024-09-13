// Libs
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import SignUpForm from '@/components/Form/SignUp';
import { Flex, Text } from '@chakra-ui/react';

// Constants
import { customColors, ROUTES } from '@/constants';

export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Sign up to create your student or teacher account and access your personalized dashboard.',
};

const SignUpPage = () => {
  return (
    <>
      <Text variant="primary" fontWeight="semibold" size="3xl">
        Welcome, create your school account
      </Text>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        w="512px"
        h="382px"
        bg="white"
        mt="53px"
      >
        <Text size="md" variant="tertiary" mb="14px">
          It is our great pleasure to have you on board!
        </Text>
        <SignUpForm />
        <Text size="xs" mt="14px">
          Already have an account?{' '}
          <Link
            href={ROUTES.SIGN_IN}
            style={{ fontWeight: 'bold', color: `${customColors.cornflower}` }}
          >
            Sign in
          </Link>
        </Text>
      </Flex>
    </>
  );
};

export default SignUpPage;
