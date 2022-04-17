import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject,BehaviorSubject } from 'rxjs';
import { Document } from '../modules/document.model';
//import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class DataRowDocumentService {
  //objRow: any = {}
  constructor() {}
  public objRow$ = new BehaviorSubject(0);
  public objRowDetail$ = new BehaviorSubject(0);

  public changeDataRow(obj: any) {
    this.objRow$.next(obj);
  }

  public changeDataRowDetail(obj: any) {
    this.objRowDetail$.next(obj);
  }
}
