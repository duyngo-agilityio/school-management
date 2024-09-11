'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// Constants
import {
  REGEX_EMAIL,
  REGEX_PASSWORD,
  ROUTES,
  SUCCESS_MESSAGES,
  VALIDATE_MESSAGE,
} from '@/constants';

// Components
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  useToast,
} from '@chakra-ui/react';
import PasswordInput from '@/components/PasswordInput';

// Services
import { signup } from '@/actions';

interface SignUpFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpForm = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignUpFormData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...rest } = data;

    const response = await signup(rest);

    if (typeof response === 'string') {
      toast({
        title: response,
        status: 'error',
      });
    } else {
      toast({
        title: SUCCESS_MESSAGES.SIGNUP_SUCCESS,
        status: 'success',
      });

      router.replace(ROUTES.SIGN_IN);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="row" justifyContent="space-between" w="248px">
        <Box w="full">
          <Controller
            control={control}
            name="email"
            rules={{
              required: VALIDATE_MESSAGE.EMPTY,
              pattern: {
                value: REGEX_EMAIL,
                message: VALIDATE_MESSAGE.EMAIL,
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <FormControl mt={4}>
                <Input
                  {...field}
                  type="email"
                  borderColor={error && 'red.400'}
                  placeholder="Enter email"
                  w="248px"
                />
                {error?.message && (
                  <FormHelperText textAlign="left" color="red.400">
                    {error.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: VALIDATE_MESSAGE.EMPTY,
              pattern: {
                value: REGEX_PASSWORD,
                message: VALIDATE_MESSAGE.PASSWORD,
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <FormControl mt={4}>
                <PasswordInput
                  {...field}
                  placeholder="Enter password"
                  error={error}
                />
                {error?.message && (
                  <FormHelperText textAlign="left" color="red.400">
                    {error.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
          <Controller
            control={control}
            name="confirmPassword"
            rules={{
              required: VALIDATE_MESSAGE.EMPTY,
              validate: (value) =>
                value === watch('password') || VALIDATE_MESSAGE.REPEAT_PASSWORD,
            }}
            render={({ field, fieldState: { error } }) => (
              <FormControl mt={4}>
                <PasswordInput
                  {...field}
                  placeholder="Enter confirm password"
                  error={error}
                />
                {error?.message && (
                  <FormHelperText textAlign="left" color="red.400">
                    {error.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Box>
      </Flex>
      <Flex mt={5}>
        <Box w="248px">
          <Button
            isLoading={isSubmitting}
            type="submit"
            colorScheme="blue"
            isDisabled={!isDirty || !isValid}
            w="full"
          >
            Sign Up
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default SignUpForm;
