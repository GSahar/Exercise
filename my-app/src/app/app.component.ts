import { Component } from '@angular/core';
/* import { ModalService } from './_modal'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Master-Detail';

  constructor(/* private modalService: ModalService */) {}

  /* closeModal(id: string) {
    this.modalService.close(id);
  } */
}
