import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from '../models/clients';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  baseUrl!: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.pathApi;
  }

  getAll(p:number) {
    return this.http.get<Client>(
      this.baseUrl + '/api/clienti?page='+p+'&size=20&sort=id,ASC'
    );
  }

  getTipiClienti() {
    return this.http.get<any>(this.baseUrl + '/api/clienti/tipicliente');
  }

  getById(id:number) {
    return this.http.get<any>(this.baseUrl + '/api/clienti/'+id);
  }

  getComuni() {
    return this.http.get<any>(
      this.baseUrl + '/api/comuni?page=0&size=20&sort=id,ASC'
    );
  }

  getProvince() {
    return this.http.get<any>(
      this.baseUrl + '/api/province?page=0&size=20&sort=id,ASC'
    );
  }

  addCliente(data:any) {
    return this.http.post<any>(this.baseUrl+'/api/clienti',data);
  }

  updateCliente(data: any,id: number) {
    return this.http.put<any>(this.baseUrl+'/api/clienti/'+id,data);
  }

  deleteCliente(id: number) {
    return this.http.delete<any>(this.baseUrl+'api/clienti/'+id);
  }
}