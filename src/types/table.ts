import { TDataType } from './data';

export interface IFiledNameColumns {
  field: string;
  headerName: string;
  render?: (item: TDataType) => void;
  type?: string;
}
