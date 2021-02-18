import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template.component';
import { DocumentViewComponent } from './document-view/document-view.component';
import { AppRoutingModule } from './app-routing.module';
import { ExportAsModule } from 'ngx-export-as';
@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    DocumentViewComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    ExportAsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
 }

