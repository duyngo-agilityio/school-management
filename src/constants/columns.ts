const COLUMNS = {
  FIELDS: {
    NAME: 'fullName',
    ID: 'id',
    EMAIL: 'email',
    CLASS: 'class',
    GENDER: 'gender',
    SUBJECT: 'subject',
  },
  HEADER_NAME: {
    NAME: 'Name',
    SUBJECT: 'Subject',
    CLASS: 'Class',
    EMAIL: 'Email Address',
    GENDER: 'Gender',
    STUDENT_ID: 'Student ID',
  },
};

export const COLUMNS_STUDENT = [
  {
    field: COLUMNS.FIELDS.NAME,
    headerName: COLUMNS.HEADER_NAME.NAME,
  },
  {
    field: COLUMNS.FIELDS.ID,
    headerName: COLUMNS.HEADER_NAME.STUDENT_ID,
  },
  {
    field: COLUMNS.FIELDS.EMAIL,
    headerName: COLUMNS.HEADER_NAME.EMAIL,
  },
  {
    field: COLUMNS.FIELDS.CLASS,
    headerName: COLUMNS.HEADER_NAME.CLASS,
  },
  {
    field: COLUMNS.FIELDS.GENDER,
    headerName: COLUMNS.HEADER_NAME.GENDER,
  },
];

export const COLUMNS_TEACHER = [
  {
    field: COLUMNS.FIELDS.NAME,
    headerName: COLUMNS.HEADER_NAME.NAME,
  },
  {
    field: COLUMNS.FIELDS.SUBJECT,
    headerName: COLUMNS.HEADER_NAME.SUBJECT,
  },
  {
    field: COLUMNS.FIELDS.CLASS,
    headerName: COLUMNS.HEADER_NAME.CLASS,
  },
  {
    field: COLUMNS.FIELDS.EMAIL,
    headerName: COLUMNS.HEADER_NAME.EMAIL,
  },
  {
    field: COLUMNS.FIELDS.GENDER,
    headerName: COLUMNS.HEADER_NAME.GENDER,
  },
];
