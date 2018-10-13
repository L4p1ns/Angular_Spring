import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable()
export class OperationsService {
  private url = "http://localhost:8080/operations";
   httpOptions = {
    monheaders: new HttpHeaders({ "Content-Type": "application/json" })
  };


  constructor(private http: HttpClient) { }
  getOperations(){
    return this.http.get(this.url);
  }

}
