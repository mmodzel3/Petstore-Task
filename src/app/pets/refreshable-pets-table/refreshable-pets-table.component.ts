import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import Pet from '../pet';
import petsMock from '../../../mocks/pets/pets-mock';

@Component({
  selector: 'app-refreshable-pets-table',
  templateUrl: './refreshable-pets-table.component.html',
  styleUrls: ['./refreshable-pets-table.component.scss']
})
export class RefreshablePetsTableComponent implements OnInit {

  @Input() pets : Array<Pet> = petsMock;
  @Output() refreshClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onRefresh(): void {
    this.refreshClick.emit();
  }

}
