'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';

// Types
import { IStudent } from '@/types';

// Constants
import {
  ERROR_MESSAGES,
  OPTIONS_CLASS,
  OPTIONS_GENDER,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  SUCCESS_MESSAGES,
  VALIDATE_MESSAGE,
} from '@/constants';

// Components
import Modal from '../..';
import { Dropdown, PasswordInput } from '@/components';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  useToast,
} from '@chakra-ui/react';

// Services
import { addStudent } from '@/actions';

interface StudentModalProps {
  onClose: () => void;
}

const StudentModal = ({ onClose }: StudentModalProps) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, isValid, isDirty },
  } = useForm<IStudent>({
    defaultValues: {
      fullName: '',
      className: '',
      email: '',
      phoneNumber: '',
      password: '',
      description: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: IStudent) => {
    const {
      fullName,
      className,
      gender,
      age,
      email,
      phoneNumber,
      password,
      description,
    } = data;

    const payload = {
      ...data,
      fullName,
      className,
      gender: Number(gender),
      age: Number(age),
      email,
      phoneNumber,
      password,
      description,
    };

    const dataResponse = await addStudent(payload);

    onClose();

    toast({
      title: dataResponse
        ? SUCCESS_MESSAGES.ADD_STUDENT
        : ERROR_MESSAGES.ADD_STUDENT,
      status: dataResponse ? 'success' : 'error',
    });
  };

  return (
    <Modal onClose={onClose} title="Add Student" size="4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box mr="45px" w="full">
            <Controller
              control={control}
              name="fullName"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field, fieldState: { error } }) => (
                <FormControl mt={4}>
                  <FormLabel>Full name</FormLabel>
                  <Input {...field} />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Flex>
            <Controller
              control={control}
              name="className"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl mt={12} mr="45px">
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    value={value}
                    options={OPTIONS_CLASS}
                    placeholder="Class"
                  />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="gender"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl mt={12}>
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    value={value}
                    placeholder="Gender"
                    options={OPTIONS_GENDER}
                  />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="row">
          <Box mr="45px" w="full">
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
                  <FormLabel>Email address</FormLabel>
                  <Input {...field} />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field, fieldState: { error } }) => (
              <FormControl mt={4}>
                <FormLabel>Phone number</FormLabel>
                <Input {...field} />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Flex>
        <Flex flexDirection="row">
          <Box mr="45px" w="full">
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
                  <FormLabel>Password</FormLabel>
                  <PasswordInput {...field} />
                  {error?.message && (
                    <FormHelperText color="red.400" width="inherit">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Controller
            control={control}
            name="age"
            render={({
              field: { ref, ...restField },
              fieldState: { error },
            }) => (
              <FormControl mt={4}>
                <FormLabel>Age</FormLabel>
                <NumberInput {...restField} defaultValue={16}>
                  <NumberInputField ref={ref} name={restField.name} />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {error?.message && (
                  <FormHelperText color="red.400">
                    {error.message}
                  </FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Flex>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <FormControl mt={4}>
              <FormLabel>About</FormLabel>
              <Textarea {...field} size="sm" />
            </FormControl>
          )}
        />
        <Flex mt={5} justifyContent="flex-end">
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button
            isLoading={isSubmitting}
            type="submit"
            colorScheme="blue"
            isDisabled={!isDirty || !isValid}
          >
            Add Student
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default StudentModal;