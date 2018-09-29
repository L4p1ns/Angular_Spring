import {Component,OnInit} from "@angular/core";
import { ClientsService } from "../services/clients.service";
import { Client } from "../models/client";
// import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
@Component({
  selector: "client",
  templateUrl: "./client.component.html",
  // encapsulation: ViewEncapsulation.None
})
export class ClientComponent implements OnInit {
  // clients: any[];
  // clients: Client;
  clients;

  constructor(
    private clientService: ClientsService,
    // private _script: ScriptLoaderService
  ) {}
  ngOnInit() {
    this.clientService.getClients().subscribe(response => {
      // this.clients=response.json()
      this.clients = response;
    });
  }
  // ngAfterViewInit() {
  //   this._script.loadScripts("client", [
  //     "assets/vendors/custom/datatables/datatables.bundle.js",
  //     "assets/demo/demo10/custom/crud/datatables/basic/basic.js"
  //   ]);
  // }
}
