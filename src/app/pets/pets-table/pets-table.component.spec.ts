import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetsTableComponent } from './pets-table.component';
import petsMock from '../../../mocks/pets/pets-mock';
import { MatTableModule } from "@angular/material/table";
import Pet from '../pet';

describe('PetsTableComponent', () => {
  let component: PetsTableComponent;
  let fixture: ComponentFixture<PetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule],
      declarations: [ PetsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsTableComponent);
    component = fixture.componentInstance;
    component.pets = petsMock;
    fixture.detectChanges();
  });

  it('should display correct number of rows', () => {
    const rows = fixture.nativeElement.querySelectorAll('tr');
    expect(rows.length).toBe(petsMock.length + 1);
  });

  it('should display correct number of cells', () => {
    const rows = fixture.nativeElement.querySelectorAll('td');
    expect(rows.length).toBe(petsMock.length * component.displayedColumns.length);
  });

  it('should display elelement correctly', () => {
    const elementIdx = 0;
    const pet: Pet = petsMock[elementIdx];
    const rows = fixture.nativeElement.querySelectorAll('tr');
    const dataRowCells = rows[elementIdx + 1].querySelectorAll('td');

    expect(dataRowCells.length).toBe(component.displayedColumns.length);
    expect(dataRowCells[0].innerHTML).toContain(pet.id);
    expect(dataRowCells[1].innerHTML).toContain(pet.name);
    expect(dataRowCells[2].innerHTML).toContain(pet.category?.name);
    expect(dataRowCells[3].innerHTML).toContain(pet.status);
  });
});
