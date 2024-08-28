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
  REGEX_PHONE_NUMBER,
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

interface TeacherModalProps {
  onClose: () => void;
  defaultValues?: ITeacher;
}

const TeacherModal = ({ onClose, defaultValues }: TeacherModalProps) => {
  const toast = useToast();
  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { isDirty, isValid, isSubmitting },
  } = useForm<ITeacher>({
    defaultValues,
    mode: 'onBlur',
  });

  const watchAvatar = watch('avatar');

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
              render={({ field, fieldState: { error } }) => (
                <FormControl mt={4}>
                  <FormLabel>Phone number</FormLabel>
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
                    <NumberInput {...restField} defaultValue={22} min={22}>
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
                rules={{
                  required: VALIDATE_MESSAGE.EMPTY,
                }}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <FormControl mt={12}>
                    <Dropdown
                      onChangeValue={onChange}
                      value={value}
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
            <Box w="full">
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
            </Box>
          </Box>
          <Box w="full">
            <Controller
              control={control}
              name="avatar"
              render={({ field: { value } }) => {
                const handleChangeImage = (url: string) => {
                  setValue('avatar', url);
                };

                const handleRemoveImage = () => {
                  setValue('avatar', '');
                };

                return (
                  <FormControl mt={4}>
                    <FormLabel>Upload Image</FormLabel>
                    <UploadImage
                      title="Upload Image"
                      width="full"
                      height="268px"
                      boxHeightImage="268px"
                      src={value}
                      alt="Avatar Image"
                      onChange={handleChangeImage}
                      onRemove={handleRemoveImage}
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
            isDisabled={!isDirty || !isValid || !watchAvatar}
          >
            {defaultValues ? 'Edit Teacher' : 'Add Teacher'}
          </Button>
        </Flex>
      </form>
    </Modal>
  );
};

export default TeacherModal;
