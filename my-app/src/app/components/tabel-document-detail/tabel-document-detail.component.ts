import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-tabel-document-detail',
  templateUrl: './tabel-document-detail.component.html',
  styleUrls: ['./tabel-document-detail.component.css']
})
export class TabelDocumentDetailComponent implements OnInit {
  columnDefsDocumDetail: ColDef[] = [
    { field: 's_num_doc', sortable: true, filter: true, headerName: 'Номер' },
    {
      field: 's_name',
      sortable: true,
      filter: true,
      headerName: 'Наименование',
    },
    { field: 'n_sum_doc', sortable: true, filter: true, headerName: 'Сумма' },
  ];

  rowDataDocumDetail = [
    { s_name: 'Toyota', s_num_doc: '1', n_sum_doc: 35000 },
    { s_name: 'Ford', s_num_doc: '2', n_sum_doc: 32000 },
    { s_name: 'Porsche', s_num_doc: '3', n_sum_doc: 72000 },
    { s_name: 'Porsche', s_num_doc: '4', n_sum_doc: 72000 },
  ];
   //rowDataDocumDetail: Observable<any[]>;
  /*  constructor(private http: HttpClient) {
    this.rowDataDocumDetail = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/small-row-data.json'
    );
  } */

  ngOnInit(): void {
  }

}
