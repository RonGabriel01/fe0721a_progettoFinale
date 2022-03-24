import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token!:string;
  tenant!:string;
  constructor() {
    this.token = environment.adminToken;
    this.tenant = environment.tenant;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler){
     let authReq: HttpRequest<any> = request;
       authReq = request.clone({
         headers: request.headers
        .set('Authorization', 'Bearer ' + this.token)
        .set('X-TENANT-ID',this.tenant),
        });

    return next.handle(authReq);
  }
}