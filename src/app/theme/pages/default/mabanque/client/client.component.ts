import { Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { ClientsService } from "../services/clients.service";
import { Client } from "../models/client";
import { ScriptLoaderService } from "../../../../../_services/script-loader.service";
import { Helpers } from "../../../../../helpers";
@Component({
  selector: "client",
  templateUrl: "./client.component.html"
  // encapsulation: ViewEncapsulation.None
})
export class ClientComponent implements OnInit {
  // clients: any[];
  // clients: Client;
  clients;

  @ViewChild("alertClient", { read: ViewContainerRef })
  alertClient: ViewContainerRef;

  constructor(
    private clientService: ClientsService,
    private _script: ScriptLoaderService
  ) {}
  ngOnInit() {
    this.clientService.getClients().subscribe(response => {
      this.clients = response;
    });
    // Alert
    this._script
      .loadScripts(
        "body",
        [
          "assets/vendors/base/vendors.bundle.js",
          "assets/demo/demo10/base/scripts.bundle.js"
        ],
        true
      )
      .then(() => {
        Helpers.setLoading(false);
      });
  }
}
