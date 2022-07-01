import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Pet from '../pet';

@Component({
  selector: 'app-pets-table',
  templateUrl: './pets-table.component.html',
  styleUrls: ['./pets-table.component.scss']
})
export class PetsTableComponent implements OnInit, AfterViewInit {

  @Input() 
  set pets(pets: Array<Pet>) {
    this.dataSource.data = pets;
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  displayedColumns: Array<string> = ['id', 'name', 'category', 'status'];
  dataSource: MatTableDataSource<Pet> = new MatTableDataSource(new Array<Pet>());
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

}
