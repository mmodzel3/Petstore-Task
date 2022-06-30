import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { MatTableModule } from "@angular/material/table";
import { RefreshablePetsTableComponent } from './refreshable-pets-table/refreshable-pets-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PetsComponent,
    PetsTableComponent,
    RefreshablePetsTableComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class PetsModule { }
