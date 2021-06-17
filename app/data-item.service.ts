import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IService, Student } from './data-field';
import { SampleData } from './sample-data';

@Injectable()
export class DataItemService {
  constructor() {}
  loadData(service: IService) {
    service.loadData();
  }
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
    this._data.next(SampleData.students);
    this._isLoading.next(false);
    this._hasError.next(SampleData.students.length === 0);
  }
  createData(entry: Student): void {
    this._datum.next(entry);
    SampleData.students.push(entry);
  }
  updateData(entry: Student): void {
    this._datum.next(entry);
    const updateIndex = SampleData.students.findIndex(x => x.id === entry.id);
    SampleData.students[updateIndex] = entry;
  }
  deleteData(entryId: string): void {
    const deleteIndex = SampleData.students.findIndex(x => x.id === entryId);
    SampleData.students.splice(deleteIndex, 1);
  }
}
