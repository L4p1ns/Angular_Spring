import { Component, OnInit } from "@angular/core";
import { ClientsService } from "../../services/clients.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail-client",
  templateUrl: "./detail-client.component.html",
  styles: []
})
export class DetailClientComponent implements OnInit {
  id: number;
  monclient;
  constructor(
    private clientService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // recuperer l id
    this.id = this.route.snapshot.params["id"];
    // recup client
    this.clientService.getClient(this.id).subscribe(client => {
      this.monclient = client;
      console.log(this.monclient);
    });
  }
  supprimerClient(){
    //
  }
}
