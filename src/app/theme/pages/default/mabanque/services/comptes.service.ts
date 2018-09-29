import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class CompteService {
  private url = "http://localhost:8080/comptes";
  constructor(private http: Http) {}

  getComptes() {
    return this.http.get(this.url);
  }

  createCompte() {
    // return this.http.post(this.url, JSON.stringify(client));
  }
}
