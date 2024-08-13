export interface IStudent {
  id: string;
  fullName: string;
  gender: number;
  age: number;
  password?: string;
  email?: string;
  description?: string;
  phoneNumber?: string;
  avatar?: string;
}

export interface ITeacher {
  id: string;
  fullName: string;
  gender: number;
  age: number;
  subject: string;
  password?: string;
  email?: string;
  description?: string;
  phoneNumber?: string;
  avatar?: string;
}

export type TDataType = IStudent | ITeacher;
