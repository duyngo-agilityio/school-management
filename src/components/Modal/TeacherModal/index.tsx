'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';

// Types
import { ITeacher } from '@/types';

// Constants
import {
  ERROR_MESSAGES,
  OPTIONS_CLASS,
  OPTIONS_GENDER,
  OPTIONS_SUBJECT,
  REGEX_EMAIL,
  REGEX_PASSWORD,
  SUCCESS_MESSAGES,
  TEACHER_URL,
  VALIDATE_MESSAGE,
} from '@/constants';

// Components
import {
  Box,
  Button,
  Flex,
  FormControl,
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
import { Dropdown, PasswordInput } from '@/components';
import Modal from '..';

// Services
import { addTeacher } from '@/services';

interface TeacherModalProps {
  title: string;
  onClose: () => void;
  isOpen: boolean;
}

const TeacherModal = ({ isOpen, onClose, title }: TeacherModalProps) => {
  const toast = useToast();
  const { handleSubmit, control } = useForm<ITeacher>({
    defaultValues: {
      fullName: '',
      email: '',
      gender: 0,
      className: '',
      password: '',
      phoneNumber: '',
      subject: '',
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ITeacher) => {
    const {
      email,
      fullName,
      age,
      gender,
      subject,
      className,
      avatar,
      description,
      phoneNumber,
    } = data;

    const payload = {
      ...data,
      fullName,
      email,
      age,
      gender,
      subject,
      className,
      avatar,
      description,
      phoneNumber,
    };

    const response = await addTeacher(`${TEACHER_URL}`, payload);

    if (response) {
      onClose();

      toast({
        title: SUCCESS_MESSAGES.ADD_TEACHER,
        status: 'success',
      });
    } else {
      toast({
        title: ERROR_MESSAGES.ADD_TEACHER,
        status: 'error',
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="4xl">
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <FormHelperText color="red.400">{error.message}</FormHelperText>
              )}
            </FormControl>
          )}
        />
        <Flex flexDirection="row" justifyContent="space-between">
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
            render={({ field }) => (
              <FormControl mt={4}>
                <FormLabel>Phone number</FormLabel>
                <Input {...field} />
              </FormControl>
            )}
          />
        </Flex>
        <Flex flexDirection="row">
          <Box mr="45px" w="full">
            <Controller
              control={control}
              name="age"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field, fieldState: { error } }) => (
                <FormControl mt={4}>
                  <FormLabel>Age</FormLabel>
                  <NumberInput defaultValue={22} min={22}>
                    <NumberInputField {...field} />
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
          </Box>
          <Box w="full">
            <Controller
              control={control}
              name="subject"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field: { onChange }, fieldState: { error } }) => (
                <FormControl mt={12}>
                  <Dropdown
                    onChangeValue={onChange}
                    options={OPTIONS_SUBJECT}
                    placeholder="Subject"
                  />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
        </Flex>
        <Controller
          control={control}
          name="description"
          render={({ field }) => (
            <Box mt={7}>
              <FormControl mt={4}>
                <FormLabel>About</FormLabel>
                <Textarea {...field} size="sm" />
              </FormControl>
            </Box>
          )}
        />
        <Flex mt={5} justifyContent="flex-end">
          <Button onClick={onClose} mr={3}>
            Cancel
          </Button>
          <Button type="submit" colorScheme="blue">
            Add Teacher
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default TeacherModal;
