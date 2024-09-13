'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

// Components
import PasswordInput from '@/components/PasswordInput';

// Constants
import {
  REGEX_EMAIL,
  REGEX_PASSWORD,
  ROUTES,
  SUCCESS_MESSAGES,
  VALIDATE_MESSAGE,
} from '@/constants';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
  useToast,
} from '@chakra-ui/react';

// Types
import { SignInFormData } from '@/types';

// Services
import { signin } from '@/actions';

const SignInForm = () => {
  const router = useRouter();
  const toast = useToast();

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: SignInFormData) => {
    const response = await signin(data);

    if (response.error) {
      toast({
        title: response,
        status: 'error',
      });
    } else {
      toast({
        title: SUCCESS_MESSAGES.SIGNIN_SUCCESS,
        status: 'success',
      });
      router.push(ROUTES.DASHBOARD);
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
            Sign In
          </Button>
        </Box>
      </Flex>
    </form>
  );
};

export default SignInForm;
