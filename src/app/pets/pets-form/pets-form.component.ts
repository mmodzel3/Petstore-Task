import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Pet from '../pet';
import PetStatus from '../pet-status';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.scss']
})
export class PetsFormComponent implements OnInit {
  petStatuses = Object.keys(PetStatus);

  @Input()
  set disabled(disabled: boolean) {
    this._disabled = disabled;
    this._updateEnableFormStatus();
  }

  @Output() addedPet = new EventEmitter<Pet>();

  set adding(adding: boolean) {
    this._adding = adding;
    this._updateEnableFormStatus();
  }

  form = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    status: new FormControl(''),
  });

  private _disabled: boolean = false;
  private _adding: boolean = false;

  constructor(private petsService: PetsService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getFormControl(fieldName : string) : FormControl {
    return this.form.get(fieldName) as FormControl;
  }

  onAddClick(): void {
    this.form.markAllAsTouched();

    if (this.form.valid) {
      const pet : Pet = this.form.getRawValue();
      this.addPet(pet);
    }
  }

  addPet(pet: Pet): void {
    this.adding = true;
    this.petsService.addPet(pet).subscribe(_ => {
      this.addedPet.emit(pet);
      this.resetForm();
      this.adding = false;
    }, err => {
      this.snackbar.open(`Error during adding pet: ${err}`, 'Dismiss');
      this.adding = false;
    })
  }

  resetForm(): void {
    this.form.reset();
  }

  private _updateEnableFormStatus(): void {
    if (this._disabled || this._adding) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
