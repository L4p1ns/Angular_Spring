import { Injectable } from "@angular/core";
// import { Http } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "../models/client";

@Injectable()
export class ClientsService {
  httpOptions = {
    monheaders: new HttpHeaders({ "Content-Type": "application/json" })
  };
  private url = "http://localhost:8080/clients";
  constructor(public http: HttpClient) {}

  getClient(id: number) {
    return this.http.get(this.url + "/" + id, {
      headers: this.httpOptions.monheaders
    });
  }

  getClients() {
    return this.http.get(this.url);
  }

  createClient(client: Client) {
    return this.http.post(this.url, JSON.stringify(client), {
      headers: this.httpOptions.monheaders
    });
  }

  updateClient(id: number, client: Client) {
    //client: Client
    return this.http.patch(this.url + "/" + id, JSON.stringify(client), {
      headers: this.httpOptions.monheaders
    });
  }

  deleteClient(id: number) {
    return this.http.delete(this.url + "/" + id, {
      headers: this.httpOptions.monheaders
    });
  }
}
