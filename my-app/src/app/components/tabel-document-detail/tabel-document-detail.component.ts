import {
  Component,
  OnInit,
  Injectable,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input, Output,EventEmitter,NgModule
} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { Subscription } from 'rxjs';

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
  private gridApi!: GridApi;

  constructor(
    private router: Router,
    private dataRowDocumentService: DataRowDocumentService,
    private tabelDocDetailService: TabelDocDetailService,
    public changeDetector: ChangeDetectorRef
  ) {}

  @Input() idDoc:string = "";
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.idDoc = model;
        this.userNameChange.emit(model);
    }

  private subs!: Subscription;

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

  rowDataDocumDetail = [];

  ngOnInit(): void {
    let rowIdDoc: any = this.dataRowDocumentService.objRow$.getValue();
    this.dataRowDocumentService.objRow$.subscribe((v) => v);
    this.tabelDocDetailService
      .getDocDetail(rowIdDoc.id || 0)
      .subscribe((data: any) => {
        console.log('selection', data);
        this.rowDataDocumDetail = data;
      });
  }

  onGridReady(event: GridReadyEvent) {
  }

  deleteUser(detail: DocDetail): void {
    this.tabelDocDetailService.deleteDocDetail(document).subscribe((data) => {
      this.rowDataDocumDetail = this.rowDataDocumDetail.filter(
        (u) => u !== detail
      );
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
