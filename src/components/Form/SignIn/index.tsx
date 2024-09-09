'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';

// Components
import PasswordInput from '@/components/PasswordInput';

// Constants
import { REGEX_PASSWORD, VALIDATE_MESSAGE } from '@/constants';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

const SignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<{ username: string; password: string }>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex flexDirection="row" justifyContent="space-between">
        <Box w="full">
          <Controller
            control={control}
            name="username"
            rules={{
              required: VALIDATE_MESSAGE.EMPTY,
            }}
            render={({ field, fieldState: { error } }) => (
              <FormControl mt={4}>
                <Input
                  {...field}
                  borderColor={error && 'red.400'}
                  placeholder="Enter the name of admin"
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
