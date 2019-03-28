import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link : String = 'http://localhost:3000';

  constructor(private http : HttpClient) { }

  confirmPayment(token : Object):Observable<any> {
    return this.http.post(environment.apiBaseUrl + `/confirmpayment`,token);
  }

}
