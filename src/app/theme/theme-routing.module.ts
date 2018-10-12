import { NgModule } from "@angular/core";
import { ThemeComponent } from "./theme.component";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../auth/_guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: ThemeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "index",
        loadChildren:
          "./pages/aside-left-display-disabled-loader-enabled-enabled-type-spinner-message/index/index.module#IndexModule"
      },
      {
        path: "inner",
        loadChildren: "./pages/default/inner/inner.module#InnerModule"
      },
      {
        path: "client",
        loadChildren:
          "./pages/default/mabanque/client/client.module#ClientRoutingModule"
      },
      {
        path: "addClient",
        loadChildren:
          "./pages/default/mabanque/client/add-client/add-client.module#AddClientRoutingModule"
      },
      {
        path: "client/:id",
        loadChildren:
          "./pages/default/mabanque/client/detail-client/detail-client.module#DetailClientRoutingModule"
      },
      {
        path: "edit-client/:id",
        loadChildren:
          "./pages/default/mabanque/client/edit-client/edit-client.module#EditClientModule"
      },
      {
        path: "compte",
        loadChildren:
          "./pages/default/mabanque/compte/compte.module#CompteRoutingModule"
      },
      {
        path: "compte/:id",
        loadChildren:
          "./pages/default/mabanque/compte/detail-compte/detail-compte.module#DetailCompteModule"
      },
      {
        path: "inner2",
        loadChildren: "./pages/default/inner2/inner2.module#Inner2Module"
      },
      {
        path: "profile",
        loadChildren: "./pages/default/profile/profile.module#ProfileModule"
      },
      {
        path: "404",
        loadChildren:
          "./pages/default/not-found/not-found.module#NotFoundModule"
      },
      {
        path: "",
        redirectTo: "index",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "404",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
