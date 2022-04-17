import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';

import { Document } from '../modules/document.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TabelDocumentService {
  constructor(private http: HttpClient) {}

  private docUrl = 'http://localhost:8080/documents';

  public getDocuments() {
    return this.http.get(this.docUrl);
  }

  public deleteDocument(document: any) {
    console.log(this.docUrl + '/' + document);
    return this.http.delete(this.docUrl + '/' + document);
  }

  public createDocument(document: any) {
    return this.http.post(this.docUrl, document);
  }

  public updateDocument(document: any) {
    return this.http.put(this.docUrl+ '/' + document.id, document);
  }
}
