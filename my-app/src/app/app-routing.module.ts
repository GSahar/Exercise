import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabelDocumentComponent } from './components/tabel-document/tabel-document.component';
import { TabelDocumentDetailComponent } from './components/tabel-document-detail/tabel-document-detail.component';

const routes: Routes = [
  { path: 'documents', component: TabelDocumentComponent },
  { path: 'documents/detail/values', component: TabelDocumentDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
