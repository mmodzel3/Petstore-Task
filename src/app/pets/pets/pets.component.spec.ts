import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { PetsTableComponent } from '../pets-table/pets-table.component';
import { RefreshablePetsTableComponent } from '../refreshable-pets-table/refreshable-pets-table.component';

import { PetsComponent } from './pets.component';

describe('PetsComponent', () => {
  let component: PetsComponent;
  let fixture: ComponentFixture<PetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTableModule, HttpClientTestingModule],
      declarations: [ RefreshablePetsTableComponent, PetsTableComponent, PetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
