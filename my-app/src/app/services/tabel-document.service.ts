import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Document } from '../modules/document.model';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class TabelDocumentService {

  constructor(private http:HttpClient) {}
 
  private docUrl = 'http://localhost:8080/documents';
 
  public getDocuments() {
    return this.http.get(this.docUrl);
  }
 
  public deleteDocument(document: any) {
    return this.http.delete(this.docUrl + "/"+ document.id);
  }
 
  public createDocument(document: any) {
    return this.http.post(this.docUrl, document);
  }
}
