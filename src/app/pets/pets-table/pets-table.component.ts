import { Component, Input, OnInit } from '@angular/core';
import Pet from '../pet';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit {

  @Input() pets: Array<Pet> = [];

  displayedColumns: Array<string> = ['id', 'name', 'category', 'status'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
