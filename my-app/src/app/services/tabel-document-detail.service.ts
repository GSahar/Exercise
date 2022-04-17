import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { DocDetail } from '../modules/doc-detail.module';
 
 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({
  providedIn: 'root'
})
export class TabelDocDetailService {

  constructor(private http:HttpClient) {}
 
  private docDetailUrl = 'http://localhost:8080/documents/detail/values';
 
  public getDocDetail(id: any) {
    return this.http.get(this.docDetailUrl+"/"+id);
    
  }
 
  public deleteDocDetail(detail: any) {
    return this.http.delete(this.docDetailUrl + "/"+ detail.id);
  }
 
  public createDocDetail(detail: any) {
    return this.http.post(this.docDetailUrl, detail);
  }
}
