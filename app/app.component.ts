import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { IService, Student, Teacher } from './data-field';
import {
  DataItemService,
  SharedStudent,
  SharedTeacher
} from './data-item.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student;
  teachers: Teacher[] = [];
  selectedTeacher: Teacher;
  services: IService[] = [this.studentService, this.teacherService];

  isLoadingResults = false;

  constructor(
    private dialog: MatDialog,
    private dataItemService: DataItemService,
    private studentService: SharedStudent,
    private teacherService: SharedTeacher
  ) {}

  ngOnInit(): void {
    this.services.forEach(service => {
      this.dataItemService.loadData(service);
    });
    this.studentService.data.subscribe(students => {
      this.students = students;
      this.teacherService.data.subscribe(teachers => {
        this.teachers = teachers;
        this.isLoadingResults = true;
      });
    });
  }

  openCreateDialog(): void {}

  openEditDialog(): void {}

  openDeleteDialog(): void {}
}
