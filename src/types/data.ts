export interface IStudent {
  id: string;
  fullName: string;
  gender: number;
  age: number;
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
  email?: string;
  description?: string;
  phoneNumber?: string;
  avatar?: string;
}

export type TDataType = IStudent | ITeacher;
