import { TDataType } from './data';

export interface IFiledNameColumns {
  field: string;
  headerName: string;
  render?: (column: IFiledNameColumns, item: TDataType) => void;
}
