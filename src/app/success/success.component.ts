import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p class="text-success"> Success! </p>',
  styles: [
    `
      p {
        padding: 20px;
        border: 1px solid green
      }
    `
  ]
})

export class SuccessComponent {

}
