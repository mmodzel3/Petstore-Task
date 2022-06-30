import { Component, OnInit } from '@angular/core';
import petsMock from '../../../mocks/pets/pets-mock';
import Pet from '../pet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Array<Pet> = petsMock;
  
  constructor() { }

  ngOnInit(): void {
  }

  onRefresh(): void {
    console.log('Refresh data');
  }

}
