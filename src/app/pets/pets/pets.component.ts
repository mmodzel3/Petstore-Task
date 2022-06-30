import { Component, OnInit } from '@angular/core';
import petsMock from '../../../mocks/pets/pets-mock';
import Pet from '../pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  pets: Array<Pet> = petsMock;
  
  constructor(private petsService : PetsService) { }

  ngOnInit(): void {
    this.retrieveAvailablePets();
  }

  retrieveAvailablePets(): void {
    this.petsService.getAvailablePets().subscribe((pets: Array<Pet>) => {
      this.pets = pets;
    })
  }

  onRefresh(): void {
    this.retrieveAvailablePets();
  }

}
