import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBaseItem, IService, Student } from './data-field';

@Injectable()
export class DataItemService {
  constructor() {}
}

@Injectable()
export class SharedStudent implements IService {
  private _data = new BehaviorSubject<Student[]>([]);
  private _datum = new BehaviorSubject<Student>(new Student());
  private _isLoading = new BehaviorSubject<boolean>(true);
  private _hasError = new BehaviorSubject<boolean>(false);
  data = this._data.asObservable();
  datum = this._datum.asObservable();
  isLoading = this._isLoading.asObservable();
  hasError = this._hasError.asObservable();

  loadData(): void {
    
  }
  createData(entry: IBaseItem): void {
    throw new Error('Method not implemented.');
  }
  updateData(entry: IBaseItem): void {
    throw new Error('Method not implemented.');
  }
  deleteData(entryId: string): void {
    throw new Error('Method not implemented.');
  }
}
