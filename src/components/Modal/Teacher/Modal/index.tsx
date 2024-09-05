'use client';

// Libs
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import isEqual from 'react-fast-compare';
import { ChangeEvent, memo } from 'react';

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
  REGEX_PHONE_NUMBER,
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
import { Dropdown, PasswordInput, UploadImage } from '@/components';
import Modal from '../..';

// Services
import { addTeacher, editTeacher } from '@/actions';

// Utils
import { formatPhoneNumber } from '@/utils';

interface TeacherModalProps {
  onClose: () => void;
  defaultValues?: ITeacher;
}

const TeacherModal = ({ onClose, defaultValues }: TeacherModalProps) => {
  const { push } = useRouter();
  const toast = useToast();
  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<ITeacher>({
    defaultValues: {
      ...defaultValues,
      subject: OPTIONS_SUBJECT[0].value,
      gender: Number(OPTIONS_GENDER[0].value),
      className: OPTIONS_CLASS[0].value,
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: ITeacher) => {
    const {
      id,
      email,
      fullName,
      age,
      gender,
      subject,
      className,
      avatar,
      description,
      password,
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
      password,
      phoneNumber,
    };

    const dataResponse = defaultValues
      ? await editTeacher(payload, id)
      : await addTeacher(payload);

    onClose();

    push(ROUTES.TEACHER);

    toast({
      title: dataResponse
        ? defaultValues
          ? SUCCESS_MESSAGES.EDIT_TEACHER
          : SUCCESS_MESSAGES.ADD_TEACHER
        : defaultValues
          ? ERROR_MESSAGES.EDIT_TEACHER
          : ERROR_MESSAGES.ADD_TEACHER,
      status: dataResponse ? 'success' : 'error',
    });
  };

  return (
    <Modal
      onClose={onClose}
      title={defaultValues ? 'Edit Teacher' : 'Add Teacher'}
      size="4xl"
    >
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
              <Input {...field} borderColor={error && 'red.400'} />
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
                  <Input {...field} borderColor={error && 'red.400'} />
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
              render={({ field: { value, onChange } }) => (
                <FormControl mt={4} mr="45px">
                  <FormLabel>Class</FormLabel>
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    value={value}
                    options={OPTIONS_CLASS}
                  />
                </FormControl>
              )}
            />
            <Controller
              control={control}
              name="gender"
              render={({ field: { value, onChange } }) => (
                <FormControl mt={4}>
                  <FormLabel>Gender</FormLabel>
                  <Dropdown
                    width="179px"
                    onChangeValue={onChange}
                    value={value}
                    options={OPTIONS_GENDER}
                  />
                </FormControl>
              )}
            />
          </Flex>
        </Flex>
        <Flex flexDirection="row">
          <Box mr="45px" w="400px">
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
                  <PasswordInput {...field} error={error} />
                  {error?.message && (
                    <FormHelperText color="red.400">
                      {error.message}
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            />
          </Box>
          <Box w="400px">
            <Controller
              control={control}
              name="phoneNumber"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
                pattern: {
                  value: REGEX_PHONE_NUMBER,
                  message: VALIDATE_MESSAGE.PHONE_NUMBER,
                },
              }}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
                  const formattedNumber = formatPhoneNumber(e.target.value);

                  onChange(formattedNumber);
                };

                return (
                  <FormControl mt={4}>
                    <FormLabel>Phone number</FormLabel>
                    <Input
                      value={value}
                      onChange={handleChange}
                      borderColor={error && 'red.400'}
                    />
                    {error?.message && (
                      <FormHelperText color="red.400">
                        {error.message}
                      </FormHelperText>
                    )}
                  </FormControl>
                );
              }}
            />
          </Box>
        </Flex>
        <Flex flexDirection="row">
          <Box mr="45px" w="full">
            <Box w="full">
              <Controller
                control={control}
                name="age"
                render={({
                  field: { ref, ...restField },
                  fieldState: { error },
                }) => (
                  <FormControl mt={4}>
                    <FormLabel>Age</FormLabel>
                    <NumberInput
                      {...restField}
                      defaultValue={22}
                      min={22}
                      borderColor={error && 'red.400'}
                    >
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
            </Box>
            <Box w="full">
              <Controller
                control={control}
                name="subject"
                render={({ field: { value, onChange } }) => (
                  <FormControl mt={4}>
                    <FormLabel>Subject</FormLabel>
                    <Dropdown
                      onChangeValue={onChange}
                      value={value}
                      options={OPTIONS_SUBJECT}
                    />
                  </FormControl>
                )}
              />
            </Box>
            <Box w="full">
              <Controller
                control={control}
                name="description"
                render={({ field }) => (
                  <Box>
                    <FormControl mt={4}>
                      <FormLabel>About</FormLabel>
                      <Textarea {...field} size="sm" />
                    </FormControl>
                  </Box>
                )}
              />
            </Box>
          </Box>
          <Box w="full">
            <Controller
              control={control}
              name="avatar"
              rules={{
                required: VALIDATE_MESSAGE.EMPTY,
              }}
              render={({ field: { value, onBlur }, fieldState: { error } }) => {
                const handleChangeImage = (url: string) => {
                  setValue('avatar', url, { shouldDirty: true });
                  onBlur();
                  clearErrors('avatar');
                };

                const handleRemoveImage = () => {
                  setValue('avatar', '', { shouldDirty: true });
                  onBlur();
                  clearErrors('avatar');
                };

                return (
                  <FormControl mt={4}>
                    <FormLabel htmlFor="avatar">Upload Image</FormLabel>
                    <UploadImage
                      title="Upload Image"
                      width="full"
                      height="256px"
                      boxHeightImage="256px"
                      src={value}
                      alt="Avatar Image"
                      onChange={handleChangeImage}
                      onRemove={handleRemoveImage}
                      error={error}
                    />
                  </FormControl>
                );
              }}
            />
          </Box>
        </Flex>
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
            {defaultValues ? 'Edit Teacher' : 'Add Teacher'}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default memo(TeacherModal, isEqual);
