import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';
import { DocumentViewComponent } from './document-view/document-view.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "AppComponent",
    pathMatch: "full",
  },
  {
    path: "Setting",
    component: TemplateComponent,
  },
  {
    path: "DocumentView",
    component: DocumentViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
