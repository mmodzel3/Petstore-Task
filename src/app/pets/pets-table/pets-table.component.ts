import { Component, Input, OnInit } from '@angular/core';
import Pet from '../pet';
import PetStatus from '../pet-status';
import petsMock from '../../../mocks/pets/pets-mock';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit {

  @Input() pets: Array<Pet> = petsMock;

  displayedColumns: Array<string> = ['id', 'name', 'category', 'status'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
