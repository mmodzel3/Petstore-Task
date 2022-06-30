import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { MatTableModule } from "@angular/material/table";



@NgModule({
  declarations: [
    PetsComponent,
    PetsTableComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    MatTableModule,
  ]
})
export class PetsModule { }
