import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

/* import { ModalModule } from './_modal'; */

import { FormAddDocumentComponent } from './components/form-add-document/form-add-document.component';
import { FormAddDocumentDetailComponent } from './components/form-add-document-detail/form-add-document-detail.component';
import { TabelDocumentComponent } from './components/tabel-document/tabel-document.component';
import { TabelDocumentDetailComponent } from './components/tabel-document-detail/tabel-document-detail.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    FormAddDocumentComponent,
    FormAddDocumentDetailComponent,
    TabelDocumentComponent,
    TabelDocumentDetailComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    /* ModalModule, */
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
