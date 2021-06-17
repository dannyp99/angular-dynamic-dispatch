import { Student, Teacher } from './data-field';

export class SampleData {
  static students: Student[] = [
    {
      id: '1',
      name: 'Arty Mal'
    },
    {
      id: '2',
      name: 'Arn Banimal'
    },
    {
      id: '3',
      name: 'Soesnt Duty'
    }
  ];

  static teachers: Teacher[] = [
    {
      id: '1',
      name: 'Tard Hests',
      salaray: 23000
    },
    {
      id: '2',
      name: 'Tun Feature',
      salaray: 120000
    },
    {
      id: '3',
      name: 'Tad Beature',
      salaray: 2000
    }
  ];
}
