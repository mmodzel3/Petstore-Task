import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshablePetsTableComponent } from './refreshable-pets-table.component';

describe('RefreshablePetsTableComponent', () => {
  let component: RefreshablePetsTableComponent;
  let fixture: ComponentFixture<RefreshablePetsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshablePetsTableComponent ]
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
