import {
  Component,
  OnInit,
  Injectable,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ColDef,
  GridApi,
  GridReadyEvent,
  GridOptions,
} from 'ag-grid-community';

import { DocDetail } from '../../modules/doc-detail.module';
import { TabelDocDetailService } from '../../services/tabel-document-detail.service';
import { DataRowDocumentService } from '../../services/dataRow-document.service';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-tabel-document-detail',
  templateUrl: './tabel-document-detail.component.html',
  styleUrls: ['./tabel-document-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TabelDocumentDetailComponent implements OnInit {
  private gridApi1!: GridApi;

  public rowSelection = 'single';

  constructor(
    private router: Router,
    private dataRowDocumentService: DataRowDocumentService,
    private tabelDocDetailService: TabelDocDetailService,
    public changeDetector: ChangeDetectorRef
  ) {}

  public rowDataDocumDetail: any[] = [];

  columnDefsDocumDetail: ColDef[] = [
    {
      field: 's_number',
      sortable: true,
      filter: true,
      headerName: 'Номер',
      editable: true,
    },
    {
      field: 's_name',
      sortable: true,
      filter: true,
      headerName: 'Наименование',
      editable: true,
    },
    {
      field: 'n_sum',
      sortable: true,
      filter: true,
      headerName: 'Сумма',
      editable: true,
    },
  ];

  public gridOptions: GridOptions = {
    columnDefs: this.columnDefsDocumDetail,
    rowData: this.rowDataDocumDetail,
    rowModelType: 'clientSide',
  };

  onSelectionChanged(event: any) {
    let rowData = event.api.getSelectedNodes()[0].data;
    this.dataRowDocumentService.objRowDetail$.next(rowData);
    console.log(rowData)
  }

  ngOnInit(): void {
    this.dataRowDocumentService.objRow$.subscribe((v) => v);
    this.dataRowDocumentService.objRowDetail$.subscribe((v) => v);
    this.gridOptions.columnDefs = this.columnDefsDocumDetail;
    let rowIdDoc: any = this.dataRowDocumentService.objRow$.getValue();

    this.tabelDocDetailService
      .getDocDetail(rowIdDoc.id || 2)
      .subscribe((data: any) => {
        console.log('selection', data);
        this.rowDataDocumDetail = data;
      });
  }

  getData() {
    this.dataRowDocumentService.objRow$.subscribe((v) => v);
    let rowIdDoc: any = this.dataRowDocumentService.objRow$.getValue();

    this.tabelDocDetailService
      .getDocDetail(rowIdDoc.id)
      .subscribe((data: any) => {
        this.rowDataDocumDetail = data.map((item: any) => {
          return {
            ...item,
            key: item.id,
          };
        });
        console.log(data);
        this.gridOptions.api?.setRowData(this.rowDataDocumDetail);
      });
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi1 = params.api;
  }

  deleteUser(detail: DocDetail): void {
    this.tabelDocDetailService.deleteDocDetail(document).subscribe((data) => {
      this.rowDataDocumDetail = this.rowDataDocumDetail.filter(
        (u) => u !== detail
      );
    });
  }

  ngOnDestroy(): void {
    this.dataRowDocumentService.objRow$.unsubscribe();
    this.dataRowDocumentService.objRowDetail$.unsubscribe();
  }
}
