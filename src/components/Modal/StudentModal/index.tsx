'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';

// Types
import { IStudent } from '@/types';

// Constants
import { OPTIONS_GENDER, OPTIONS_SUBJECT, VALIDATE_MESSAGE } from '@/constants';

// Components
import Modal from '..';
import { Dropdown, PasswordInput } from '@/components';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';

interface StudentModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const StudentModal = ({ title, onClose, isOpen }: StudentModalProps) => {
  const { handleSubmit, control } = useForm<IStudent>({
    defaultValues: {
      fullName: '',
      email: '',
      gender: 0,
      password: '',
      phoneNumber: '',
    },
    mode: 'onBlur',
  });

  // TODO: Implement later
  const onSubmit = () => {};

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex flexDirection="row" justifyContent="space-between">
          <Box mr="45px" w="full">
            <Controller
              control={control}
              name="fullName"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl mt={4}>
                  <FormLabel>Full name</FormLabel>
                  <Input value={value} onChange={onChange} />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />
          </Box>
          <Flex>
            <Controller
              control={control}
              name="gender"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Box mt={12} mr="45px">
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    options={OPTIONS_SUBJECT}
                  />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </Box>
              )}
            />
            <Controller
              control={control}
              name="gender"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Box mt={12}>
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    placeholder="Gender"
                    options={OPTIONS_GENDER}
                  />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </Box>
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
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <FormControl mt={4}>
                  <FormLabel>Email address</FormLabel>
                  <Input value={value} onChange={onChange} />
                  <FormErrorMessage>{error && error.message}</FormErrorMessage>
                </FormControl>
              )}
            />
          </Box>
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FormControl mt={4}>
                <FormLabel>Phone number</FormLabel>
                <Input value={value} onChange={onChange} />
                <FormErrorMessage>{error && error.message}</FormErrorMessage>
              </FormControl>
            )}
          />
        </Flex>
        <Controller
          control={control}
          name="password"
          rules={{
            required: VALIDATE_MESSAGE.EMPTY,
          }}
          render={({ fieldState: { error } }) => (
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <PasswordInput />
              <FormErrorMessage>{error && error.message}</FormErrorMessage>
            </FormControl>
          )}
        />
        <Flex mt={5} justifyContent="flex-end">
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="blue">
            Add Student
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default StudentModal;
