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
import { Client } from "../../models/client";

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styles: []
})
export class EditClientComponent implements OnInit {
  id: number;
  client: Client = {
    nom: "",
    email: ""
  };
  monclient: any = {
    nom: "",
    email: ""
  };
  @ViewChild("alertUpdateClient", { read: ViewContainerRef })
  alertUpdateClient: ViewContainerRef;
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute,
    private _script: ScriptLoaderService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.clientService.getClient(this.id).subscribe(client => {
      this.monclient = client;
      console.log(this.monclient);
    });
    //
    this._script.loadScripts('body', [
    'assets/vendors/base/vendors.bundle.js',
    'assets/demo/demo10/base/scripts.bundle.js'], true).then(() => {
      Helpers.setLoading(false);
    });
  }

  modifierClient({ value, valid }: { value: Client; valid: boolean }) {
    if (!valid) {
      this.showAlert("alertUpdateClient");
      this._alertService.error(
        "Veillez remplir correctement les champs!",
        true
      );
      this.router.navigate(["edit-client/" + this.id]);
    } else {
      this.clientService.updateClient(this.id, value).subscribe(
        response => {
          this.router.navigate(["client/" + this.id]);
          console.log("Ok modification...");
          this.showAlert("alertClient");
          this._alertService.success("Client ajouté avec succès", true);
        },
        error => {
          console.log("Erreur...");
          console.log(error);
        }
      );
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
