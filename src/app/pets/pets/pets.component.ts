import { Component, OnInit } from '@angular/core';
import Pet from '../pet';
import { PetsService } from '../pets.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.scss']
})
export class PetsComponent implements OnInit {

  disabledForm: boolean = true;

  set pets(pets: Array<Pet>) {
    this._pets = pets;
    this.petsNames = new Set([...pets.map(pet => pet.name ? pet.name : ''), ...this.petsNames]);
  }
  get pets(): Array<Pet> {
    return this._pets;
  }

  petsNames: Set<string> = new Set([]);

  private _pets: Array<Pet> = [];
  
  constructor(private petsService : PetsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.retrieveAvailablePets();
  }

  retrieveAvailablePets(): void {
    this.petsService.getAvailablePets().subscribe((pets: Array<Pet>) => {
      this.pets = pets;
      this.disabledForm = false;
    }, _ => {
      this.onRetrieveError();
    })
  }

  onRefresh(): void {
    this.retrieveAvailablePets();
  }

  onRetrieveError(): void {
    this.snackBar.open('Error during pets retrieval from server', 'Dismiss');
  }

  onAddPet(pet: Pet): void {
    this.retrieveAvailablePets();
    this.petsNames = new Set([...this.petsNames, pet.name ? pet.name : '']);
  }
}
