import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p class="text-danger"> Warning! </p>',
  styles: [
    `
      p {
        padding: 20px;
        border: 1px solid red
      }
    `
  ]
})

export class WarningComponent {

}
