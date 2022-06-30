import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { of, throwError } from 'rxjs';
import petsMock from '../../../mocks/pets/pets-mock';
import { PetsTableComponent } from '../pets-table/pets-table.component';
import { PetsService } from '../pets.service';
import { RefreshablePetsTableComponent } from '../refreshable-pets-table/refreshable-pets-table.component';

import { PetsComponent } from './pets.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;
  let petsServiceMock: any;
  let snackbarMock: any;

  beforeEach(async () => {
    petsServiceMock = jasmine.createSpyObj('PetsService', {
      getAvailablePets: of(petsMock),
    });

    snackbarMock = jasmine.createSpyObj('MatSnackBar', ['open']);

    await TestBed.configureTestingModule({
      imports: [MatTableModule, MatSnackBarModule],
      declarations: [ RefreshablePetsTableComponent, PetsTableComponent, PetsComponent ],
      providers: [
        { provide: PetsService, useValue: petsServiceMock },
        { provide: MatSnackBar, useValue: snackbarMock }
      ],
    })
    .compileComponents();
  });

  const createComponent = () => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it('should update pets on success during pets retrieval from server', () => {
    createComponent();

    expect(component.pets).toBe(petsMock);
  });

  it('should display sanckbar on error during pets retrieval from server', () => {
    petsServiceMock.getAvailablePets.and.returnValue(throwError(() => new Error()));

    createComponent();

    expect(snackbarMock.open).toHaveBeenCalledWith('Error during pets retrieval from server', 'Dismiss');
  });
});
