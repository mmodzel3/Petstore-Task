import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { PetsTableComponent } from '../pets-table/pets-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RefreshablePetsTableComponent } from './refreshable-pets-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RefreshablePetsTableComponent', () => {
  let component: RefreshablePetsTableComponent;
  let fixture: ComponentFixture<RefreshablePetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatTableModule, MatPaginatorModule, BrowserAnimationsModule ],
      declarations: [ PetsTableComponent, RefreshablePetsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshablePetsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit event on refresh click', () => {
    spyOn(component.refreshClick, 'emit');

    const refreshButton = fixture.nativeElement.querySelector('button');
    refreshButton.dispatchEvent(new Event('click'));

    expect(component.refreshClick.emit).toHaveBeenCalled();
  });
});
