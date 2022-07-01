import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsComponent } from './pets/pets.component';
import { PetsRoutingModule } from './pets-routing.module';
import { PetsTableComponent } from './pets-table/pets-table.component';
import { MatTableModule } from "@angular/material/table";
import { RefreshablePetsTableComponent } from './refreshable-pets-table/refreshable-pets-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { PetsFormComponent } from './pets-form/pets-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ErrorStateMatcher } from '@angular/material/core';
import { DirtyTouchedErrorStateMatcher } from './pets-form/dirty-touched-state-matcher';



@NgModule({
  declarations: [
    PetsComponent,
    PetsTableComponent,
    RefreshablePetsTableComponent,
    PetsFormComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: DirtyTouchedErrorStateMatcher }],
})
export class PetsModule { }
