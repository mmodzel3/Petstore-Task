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

  pets: Array<Pet> = [];
  
  constructor(private petsService : PetsService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.retrieveAvailablePets();
  }

  retrieveAvailablePets(): void {
    this.petsService.getAvailablePets().subscribe((pets: Array<Pet>) => {
      this.pets = pets;
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

}
