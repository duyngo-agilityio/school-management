export const VALIDATE_MESSAGE = {
  EMPTY: 'The input is required',
  EMAIL: 'Invalid email',
  PASSWORD:
    'Password must have at least 8 characters, 1 special character and 1 number',
  REPEAT_PASSWORD: 'Password not matching',
  PHONE_NUMBER: 'Invalid phone number format',
  USERNAME_PASSWORD: 'Email or password invalid. Please help to try again!',
  UNAUTHORIZED: 'You are not authorized to perform this action',
  FORBIDDEN: 'You do not have permission to access this resource',
  NOT_FOUND: 'Resource not found',
  INTERNAL_SERVER_ERROR:
    'An internal server error occurred. Please try again later!',
  SERVICE_UNAVAILABLE:
    'Service is temporarily unavailable. Please try again later!',
  SOMETHING_WENT_WRONG: 'Something went wrong!',
};

export const SUCCESS_MESSAGES = {
  ADD_TEACHER: 'Add Teacher success!',
  ADD_STUDENT: 'Add Student success!',
  DELETE_TEACHER: 'Delete Teacher success!',
  DELETE_STUDENT: 'Delete Student success!',
  EDIT_TEACHER: 'Edit Teacher success!',
  EDIT_STUDENT: 'Edit Student success!',
  SIGNIN_SUCCESS: 'Signed In successfully!',
  SIGNUP_SUCCESS: 'Signed Up successfully!',
};

export const ERROR_MESSAGES = {
  ADD_TEACHER: 'Add Teacher failed!',
  ADD_STUDENT: 'Add Student failed!',
  DELETE_TEACHER: 'Delete Teacher failed!',
  DELETE_STUDENT: 'Delete Student failed!',
  EDIT_TEACHER: 'Edit Teacher failed!',
  EDIT_STUDENT: 'Edit Student failed!',
  PAGE_NOT_FOUND: 'Page not found!',
};

export const ERROR_API = {
  END_POINT: 'Something went wrong!!!',
  NOT_FOUND: 'Not found',
};
