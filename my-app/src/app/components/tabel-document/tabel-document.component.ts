import { Component, OnInit,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef } from 'ag-grid-community';
@Injectable()

@Component({
  selector: 'app-tabel-document',
  templateUrl: './tabel-document.component.html',
  styleUrls: ['./tabel-document.component.css']
})
export class TabelDocumentComponent implements OnInit {

  columnDefsDocum: ColDef[] = [
    { field: 's_num_doc', sortable: true, filter: true, headerName: "Номер" },
    { field: 'd_date_doc', sortable: true, filter: true, headerName: "Дата" },
    { field: 'n_sum_doc_item', sortable: true, filter: true, headerName: "Сумма" },
    { field: 's_description', sortable: true, filter: true, headerName: "Описание" },
  ];

  rowDataDocum = [
    { s_num_doc: '1', d_date_doc: '09.04.2022', n_sum_doc_item: 35000, s_description: '23' },
    { s_num_doc: '2', d_date_doc: '09.04.2022', n_sum_doc_item: 15000, s_description: 'dsssdasdsadas'},
    { s_num_doc: '3', d_date_doc: '09.04.2022', n_sum_doc_item: 235000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
    { s_num_doc: '4', d_date_doc: '09.04.2022', n_sum_doc_item: 33000, s_description: '' },
  ];

   //rowDataDocum: Observable<any[]>;
  /*  constructor(private http: HttpClient) {
    this.rowDataDocum = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/small-row-data.json'
    );
  } */

  ngOnInit(): void {
  }

}
