import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.scss',
})
export class PhotoComponent {
  constructor(public baseService: BaseService) {}

  data: any = [
    {
      url: '../../assets/2433.png',
    },
    {
      url: '../../assets/2434.png',
    },
    {
      url: '../../assets/2436.png',
    },
    {
      url: '../../assets/2438.png',
    },
    {
      url: '../../assets/2439.png',
    },
  ];

  data1: any = [
    {
      url: '../../assets/2435.png',
    },
    {
      url: '../../assets/2437.png',
    },
    {
      url: '../../assets/2440.png',
    },
    {
      url: '../../assets/2441.png',
    },
    {
      url: '../../assets/2442.png',
    },
    {
      url: '../../assets/2443.png',
    },
  ];
}
