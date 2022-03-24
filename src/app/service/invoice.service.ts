import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
baseUrl!:any;
  constructor(private http:HttpClient) {
    this.baseUrl = environment.pathApi;
   }

  getAll(p:number) {
    return this.http.get(this.baseUrl+'/api/fatture?page='+p+'&size=20&sort=id,ASC');
  }

  getById(id:number){
    return this.http.get<Invoice>(this.baseUrl+'/api/fatture/cliente/'+id+'?page=0&size=20&sort=id,ASC');
  }

  getByIdList(id:number){
    return this.http.get<Invoice>(this.baseUrl+'/api/fatture/'+id);
  }

  addFattura(data: any) {
    return this.http.post<Invoice>(this.baseUrl+'/api/fatture',data);
  }

  updateFattura(data: any,id: number) {
    // return this.http.put<Invoice>(this.baseUrl+'/api/fatture/'+u)
  }

  updateFatturalista(data:any,id: number) {
     return this.http.put<Invoice>(this.baseUrl+'/api/fatture/'+id,data);
  }

  deleteInvoice(id: number) {
    return this.http.delete<any>(this.baseUrl+'/api/fatture/'+id);
  }
}