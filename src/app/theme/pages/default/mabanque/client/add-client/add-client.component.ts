import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';
import { AlertComponent } from '../../../../../../auth/_directives/alert.component';
import { AlertService } from '../../../../../../auth/_services/alert.service';
import { Helpers } from '../../../../../../helpers';
import { Client } from '../../models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: "add-client",
  templateUrl: "./add-client.component.html"
})
export class AddClientComponent implements OnInit {
  client: Client = {
    nom: "",
    email: ""
  };
  loading = false;

  @ViewChild("alertClient", { read: ViewContainerRef })
  alertClient: ViewContainerRef;

  constructor(
    private clientService: ClientsService,
    private router: Router,
    private _script: ScriptLoaderService,
    private _alertService: AlertService,
    private cfr: ComponentFactoryResolver
  ) {}

  createClient({ value, valid }: { value: Client; valid: boolean }) {
    this.loading = true;
    if (!valid) {
      this.showAlert("alertClient");
      this._alertService.error("Veillez remplir correctement les champs!", true);
      this.router.navigate(["addClient"]);
    } else {
      this.clientService.createClient(value).subscribe(
        response => {
          this.router.navigate(["client"]);
          console.log("Ok insertion...");
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
  ngOnInit() {
    this._script.loadScripts('body', [
      'assets/vendors/base/vendors.bundle.js',
      'assets/demo/demo10/base/scripts.bundle.js'], true).then(() => {
        Helpers.setLoading(false);
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
