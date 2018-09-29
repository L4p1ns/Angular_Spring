import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation
} from "@angular/core";
import { Helpers } from "../../../../../../helpers";
// import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ClientsService } from "../../services";
// import { NomValidators } from "./nom.validator";
import { Client } from "../../models/client";
import { Router } from "@angular/router";
import { AlertComponent } from "../../../../../../auth/_directives/alert.component";
import { AlertService } from "../../../../../../auth/_services/alert.service";

@Component({
  selector: "add-client",
  templateUrl: "./add-client.component.html",
  encapsulation: ViewEncapsulation.None
})
export class AddClientComponent implements OnInit {
  client: Client = {
    nom: "",
    email: ""
  };
  loading = false;
  @ViewChild("alertClient", { read: ViewContainerRef })
  alertClient: ViewContainerRef;
  /*
  form = new FormGroup({
    nom: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      NomValidators.neDoitPasContenirEspace
    ]),
    email: new FormControl(
      "",
      [Validators.required, Validators.minLength(8), Validators.email],
      NomValidators.doitEtreUnique
    )
  });

  get nom() {
    return this.form.get("nom");
  }
  get email() {
    return this.form.get("email");
  }
  */
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private cfr: ComponentFactoryResolver,
    private _alertService: AlertService
  ) {}

  // save(c: Client) {
  //   let monclient = { nom: c.nom, email: c.email };
  //   c.email = "";
  //   c.nom = "";
  //   this.clientService.createClient(monclient).subscribe(response => {});
  // }
  createClient({ value, valid }: { value: Client; valid: boolean }) {
    // console.log(value);
    this.loading = true;
    if (!valid) {
      console.log("pas valide");
      this.router.navigate(["addClient"]);
    } else {
      this.clientService.createClient(value).subscribe(
        response => {
          this.showAlert("alertClient");
          this.loading = false;
          this.router.navigate(["client"]);
          this._alertService.success("Client ajouté avec succès", true);
        },
        error => {
          console.log("Erreur...");
          console.log(error);
          this.showAlert("alertClient");
          this._alertService.error(error);
          this.loading = false;
        }
      );
    }
  }
  ngOnInit() {}
  // showAlert
  showAlert(target) {
    this[target].clear();
    let factory = this.cfr.resolveComponentFactory(AlertComponent);
    let ref = this[target].createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
}
