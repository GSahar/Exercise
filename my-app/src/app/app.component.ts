import { Component, OnInit } from '@angular/core';
import { TabelDocumentService } from './services/tabel-document.service';
import { TabelDocDetailService } from './services/tabel-document-detail.service';
import { DataRowDocumentService } from './services/dataRow-document.service';
/* import { ModalService } from './_modal'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Master-Detail';
  rowDataDocum = [];
  constructor(
    private tabelDocumentService: TabelDocumentService,
    private dataRowDocumentService: DataRowDocumentService,
    private tabelDocDetailService: TabelDocDetailService
  ) {}

  ngOnInit(): void {
    this.dataRowDocumentService.objRow$.subscribe((v) => v);
    this.dataRowDocumentService.objRowDetail$.subscribe((v) => v);
  }

  onDeliteDoc() {
    let rowData: any = this.dataRowDocumentService.objRow$.getValue();

    if (rowData) {
      this.tabelDocumentService
        .deleteDocument(rowData.id)
        .subscribe((data: any) => {
          console.log(data);
        });
      alert('Запись удалена!');
    } else {
      alert('Для удаления, выберите документ!');
    }
  }

  onUpdateDoc() {
    let rowData: any = this.dataRowDocumentService.objRow$.getValue();
    if (rowData) {
      this.tabelDocumentService
        .updateDocument({
          s_number: rowData.s_number,
          d_date: rowData.d_date,
          n_sum: 0,
          s_description: rowData.s_description,
          id: rowData.id,
        })
        .subscribe((data: any) => {
          console.log(data);
        });

      alert('Запись обновлена!');
    } else {
      alert('Для изменения, выберите документ!');
    }
  }

  onInsertDoc() {
    this.tabelDocumentService
      .createDocument({ s_number: ' ', d_date: new Date(), s_description: '' })
      .subscribe((data: any) => {
        console.log('selection', data);
      });

    alert('Запись добавлена!');
  }

  onDeliteDocDet() {
    let rowData: any = this.dataRowDocumentService.objRowDetail$.getValue();

    if (rowData) {
      this.tabelDocDetailService
        .deleteDocDetail(rowData.id)
        .subscribe((data: any) => {
          console.log(data);
        });
      alert('Запись удалена!');
    } else {
      alert('Для удаления, выберите документ!');
    }
  }

  onUpdateDocDet() {
    let rowData: any = this.dataRowDocumentService.objRowDetail$.getValue();
    if (rowData) {
      this.tabelDocDetailService
        .updateDocDetail({
          s_number: rowData.s_number,
          s_name: rowData.s_name,
          n_sum: rowData.n_sum,
          id: rowData.id,
          id_doc: rowData.id_doc
        })
        .subscribe((data: any) => {
          console.log(data);
        });

      alert('Запись обновлена!');
    } else {
      alert('Для изменения, выберите документ!');
    }
  }

  onInsertDocDet() {
    this.tabelDocDetailService
      .createDocDetail({ s_number: ' ',s_name:'', n_sum: 0,id_doc: 2 })
      .subscribe((data: any) => {
        console.log('selection', data);
      });

    alert('Запись добавлена!');
  }

  ngOnDestroy(): void {
    this.dataRowDocumentService.objRow$.unsubscribe();
    this.dataRowDocumentService.objRowDetail$.unsubscribe();
  }
}
