import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IService, Student, Teacher } from './data-field';
import { IDataLoader, SampleData } from './sample-data';

@Injectable()
export class DataLoader implements IDataLoader {
  //overloading in typescript not good The functions need different names.
  loadStudents(studentService: SharedStudent): Student[] {
    return SampleData.students;
  }
  loadTeacher(teacherService: SharedTeacher): Teacher[] {
    return SampleData.teachers;
  }
}

export class DataItemService {
  dl: DataLoader;
  constructor() {
    this.dl = new DataLoader();
  }
  loadData(service: IService) {
    service.loadData(this.dl);
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

  loadData(dl: IDataLoader): void {
    const dlData = dl.loadStudents(this);
    this._data.next(dlData);
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

@Injectable()
export class SharedTeacher implements IService {
  private _data = new BehaviorSubject<Teacher[]>([]);
  private _datum = new BehaviorSubject<Teacher>(new Teacher());
  private _isLoading = new BehaviorSubject<boolean>(true);
  private _hasError = new BehaviorSubject<boolean>(false);
  data = this._data.asObservable();
  datum = this._datum.asObservable();
  isLoading = this._isLoading.asObservable();
  hasError = this._hasError.asObservable();

  loadData(dl: IDataLoader): void {
    const dlData = dl.loadTeacher(this);
    this._data.next(dlData);
    this._isLoading.next(false);
    this._hasError.next(SampleData.teachers.length === 0);
  }
  createData(entry: Teacher): void {
    this._datum.next(entry);
    SampleData.students.push(entry);
  }
  updateData(entry: Teacher): void {
    this._datum.next(entry);
    const updateIndex = SampleData.students.findIndex(x => x.id === entry.id);
    SampleData.students[updateIndex] = entry;
  }
  deleteData(entryId: string): void {
    const deleteIndex = SampleData.students.findIndex(x => x.id === entryId);
    SampleData.students.splice(deleteIndex, 1);
  }
}
