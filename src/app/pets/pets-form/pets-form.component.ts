import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Pet from '../pet';
import PetStatus from '../pet-status';
import { PetsService } from '../pets.service';

function notIncludesValidator(notIncludes: Array<string>): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const contains = notIncludes.includes(control.value);
    return contains ? {notIncludes: {value: control.value}} : null;
  };
}

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

  @Input()
  set reservedNames(reservedNames: Set<string>) {
    this._reservedNames = reservedNames;
    this.reserveNames();
  }

  @Output() addedPet = new EventEmitter<Pet>();

  set adding(adding: boolean) {
    this._adding = adding;
    this._updateEnableFormStatus();
  }

  private _disabled: boolean = false;
  private _adding: boolean = false;
  private _reservedNames: Set<string> = new Set();
  private _reservedNamesValidator: ValidatorFn | null = null;

  form: FormGroup = this.createForm();

  constructor(private petsService: PetsService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getFormControl(fieldName : string) : FormControl {
    return this.form.get(fieldName) as FormControl;
  }

  onAddClick(): void {
    this.form.markAsTouched();

    if (this.form.valid) {
      const pet : Pet = this.form.getRawValue();
      this.addPet(pet);
    }
  }

  addPet(pet: Pet): void {
    this.adding = true;

    this.petsService.addPet(pet).subscribe(_ => {
      this.snackbar.open('Pet added', 'Dismiss');
      this.addedPet.emit(pet);
      this.resetForm();
      this.adding = false;
    }, err => {
      this.snackbar.open(`Error during adding pet: ${err.message}`, 'Dismiss');
      this.adding = false;
    })
  }

  resetForm(): void {
    this.form = this.createForm();
  }

  private createForm(): FormGroup {
    return new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, notIncludesValidator([...this._reservedNames])]),
      status: new FormControl('', [Validators.required]),
    });
  }

  private _updateEnableFormStatus(): void {
    if (this._disabled || this._adding) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  private reserveNames(): void {
    const nameControl = this.getFormControl('name');

    if (nameControl) {
      if (this._reservedNamesValidator != null) {
        this.getFormControl('name').removeValidators([this._reservedNamesValidator]);
      }
     
      this.getFormControl('name').addValidators([notIncludesValidator([...this._reservedNames])]);
    }
  }
}
