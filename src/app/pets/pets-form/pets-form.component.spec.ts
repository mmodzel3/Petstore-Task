import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import petsMock from '../../../mocks/pets/pets-mock';
import { PetsService } from '../pets.service';
import { MatInputModule } from '@angular/material/input';

import { PetsFormComponent } from './pets-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import Pet from '../pet';

describe('PetsFormComponent', () => {
  let component: PetsFormComponent;
  let fixture: ComponentFixture<PetsFormComponent>;
  let petsServiceMock: any;
  let snackbarMock: any;

  const fillFields = (pet: Pet) => {
    component.getFormControl('id').setValue(pet.id);
    component.getFormControl('name').setValue(pet.name);
    component.getFormControl('status').setValue(pet.status);
  };

  beforeEach(async () => {
    petsServiceMock = jasmine.createSpyObj('PetsService', {
      addPet: of(),
    });

    snackbarMock = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ PetsFormComponent ],
      imports: [ MatSnackBarModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule ],
      providers: [
        { provide: PetsService, useValue: petsServiceMock },
        { provide: MatSnackBar, useValue: snackbarMock }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add pet when all fields filled', () => {
    const pet = petsMock[0];

    fillFields(pet);

    fixture.detectChanges();

    component.onAddClick();

    expect(petsServiceMock.addPet).toHaveBeenCalledWith({ id: pet.id, name: pet.name, status: pet.status });
  });

  it('should not add pet when all fields not filled', () => {
    component.getFormControl('id').setValue('id');
    fixture.detectChanges();

    component.onAddClick();

    expect(petsServiceMock.addPet).not.toHaveBeenCalled();
  });

  it('should show snackbar on error', () => {
    const errorMsg = 'ErrorMsg';
    const error = new Error(errorMsg);
    const pet = petsMock[0];

    petsServiceMock.addPet.and.returnValue(throwError(() => error));

    fillFields(pet);

    fixture.detectChanges();

    component.onAddClick();

    expect(snackbarMock.open).toHaveBeenCalledWith(`Error during adding pet: ${error}`, 'Dismiss');
  });
});
