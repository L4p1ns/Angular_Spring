import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { ScriptLoaderService } from "../../../../../../_services/script-loader.service";
import { AlertComponent } from "../../../../../../auth/_directives/alert.component";
import { AlertService } from "../../../../../../auth/_services/alert.service";
import { Helpers } from "../../../../../../helpers";
import { ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-detail-client",
  templateUrl: "./detail-client.component.html",
  styles: []
})
export class DetailClientComponent implements OnInit {
  id:number;
  monclient;
  @ViewChild("alertClient", { read: ViewContainerRef })
  alertClient: ViewContainerRef;
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    private _script: ScriptLoaderService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    // recuperer l'id
    this.id = this.route.snapshot.params["id"];
    // recup client
    this.clientService.getClient(this.id).subscribe(client => {
      this.monclient = client;
      console.log(this.monclient);
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

  supprimerClient(id: number) {
    if (confirm("Voulez vous vraiement supprimer ?")) {
      this.clientService.deleteClient(id).subscribe(response => {
        this.showAlert("alertClient");
        this._alertService.success("Client supprimer avec succès", true);
        this.router.navigate(["client"]);
      });
    }
  }
  // showAlert
  showAlert(target) {
    this[target].clear();
    let factory = this.cfr.resolveComponentFactory(AlertComponent);
    let ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
