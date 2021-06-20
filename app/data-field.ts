import { Observable } from 'rxjs';
import { IDataLoader } from './sample-data';

export interface ComponentData {
  title: string;
  datum: IBaseItem;
  service: IService;
}

export interface IBaseItem {
  id: string;
  name: string;
  salary?: string;
}

export interface IService {
  data: Observable<IBaseItem[]>;
  datum: Observable<IBaseItem>;
  isLoading: Observable<boolean>;
  hasError: Observable<boolean>;
  loadData(dl: IDataLoader): void;
  createData(entry: IBaseItem): void;
  updateData(entry: IBaseItem): void;
  deleteData(entryId: string): void;
}

export class Student implements IBaseItem {
  id: string;
  name: string;

  constructor() {}
}

export class Teacher implements IBaseItem {
  id: string;
  name: string;
  salaray: number;

  constructor() {}
}
