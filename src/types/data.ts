export interface IStudent {
  id: string;
  fullName: string;
  gender: number;
  age: number;
  className: string;
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
  className: string;
  subject?: string;
  password?: string;
  email?: string;
  description?: string;
  phoneNumber?: string;
  avatar?: string;
}

export type TDataType = IStudent | ITeacher;

export type APIResponse<T> = {
  isSuccess: boolean;
  data: T | null;
};

export type TSearchParams = {
  q: string;
};