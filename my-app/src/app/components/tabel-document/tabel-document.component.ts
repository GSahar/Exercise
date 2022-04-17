import { Component, OnInit, Injectable,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { TabelDocumentService } from '../../services/tabel-document.service';
import { TabelDocumentDetailComponent } from '../tabel-document-detail/tabel-document-detail.component';
import { DataRowDocumentService } from '../../services/dataRow-document.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tabel-document',
  templateUrl: './tabel-document.component.html',
  styleUrls: ['./tabel-document.component.css'],
})
export class TabelDocumentComponent implements OnInit {
  private gridApi!: GridApi;
  idDoc: number = 0;

  constructor(
    private router: Router,
    private tabelDocumentService: TabelDocumentService,
    private dataRowDocumentService: DataRowDocumentService,
    private tabelDocumentDetailComponent: TabelDocumentDetailComponent 
  ) {}

  public rowSelection = 'single';
  columnDefsDocum: ColDef[] = [
    { field: 's_number', sortable: true, filter: true, headerName: 'Номер' },
    { field: 'd_date', sortable: true, filter: true, headerName: 'Дата' },
    { field: 'n_sum', sortable: true, filter: true, headerName: 'Сумма' },
    {
      field: 's_description',
      sortable: true,
      filter: true,
      headerName: 'Описание',
    },
  ];
  @Output() onChanged = new EventEmitter<boolean>();
  onSelectionChanged(event: any) {
    let rowData = event.api.getSelectedNodes()[0].data;
    this.dataRowDocumentService.objRow$.next(rowData);
    this.tabelDocumentDetailComponent.changeDetector.markForCheck();
    this.onChanged.emit(true)
  }

  rowDataDocum = [];
  ngOnInit(): void {
    this.dataRowDocumentService.objRow$.subscribe((v) => v);
    this.tabelDocumentService.getDocuments().subscribe((data: any) => {
      this.rowDataDocum = data;
    });
  }

  ngOnDestroy(): void {
    this.dataRowDocumentService.objRow$.unsubscribe();
  }

  deleteUser(document: Document): void {
    this.tabelDocumentService.deleteDocument(document).subscribe((data) => {
      this.rowDataDocum = this.rowDataDocum.filter((u) => u !== document);
    });
  }
}
