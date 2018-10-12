import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CompteService {
  private url = "http://localhost:8080/comptes";
  httpOptions = {
    monheaders: new HttpHeaders({ "Content-Type": "application/json" })
  };
  constructor(private http: HttpClient) {}

  getComptes() {
    return this.http.get(this.url);
  }

  getCompte(id: number) {
    return this.http.get(this.url + "/" + id, {
      headers: this.httpOptions.monheaders
    });
  }
  getClientByCompte(id) {
    return this.http.get(this.url + "/" + id + "/client", {
      headers: this.httpOptions.monheaders
    });
  }
  createCompte() {}
}
