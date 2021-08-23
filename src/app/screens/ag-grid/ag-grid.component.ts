import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { GridData } from 'src/app/models/grid-data';
import { GridDataService } from 'src/app/service/grid-data/grid-data.service';

@Component({
  selector: 'app-ag-grid',
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss'],
})
export class AgGridComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'ID', flex: 1, headerName: 'ID' },
    { field: 'Name', flex: 1 },
    { field: 'Notes', flex: 1 },
  ];

  rowData: Observable<GridData[]> | undefined = undefined;

  constructor(private readonly gridService: GridDataService) {}

  ngOnInit(): void {
    this.rowData = this.gridService.getData();
  }
}
